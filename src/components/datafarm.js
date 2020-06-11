import React, { Component } from 'react';
import axios from 'axios';
import DataTable from 'react-data-table-component';


const columns = [
  {
    name: 'Nombre',
    selector: 'local_nombre',
    sortable: true,
    cell: row => <div><div style={{ fontWeight: 700 }}>{row.local_nombre}</div>{row.local_telefono}</div>,
  },
  {
    name: 'Dirección',
    selector: 'local_direccion',
    sortable: true,
    right: true,
  },

  {
    name: 'Comuna',
    selector: 'comuna_nombre',
    sortable: true,
    right: true,
  },
  
  {
    name: 'Latitud',
    selector: 'local_lat',
    sortable: true,
    right: true,
  },
  {
    name: 'Longitud',
    selector: 'local_lng',
    sortable: true,
    right: true,
  },
  {
    name: 'Mapa',
    selector: 'local_direccion',
    cell: row => <div style={{ padding: '5px' }}><a href={`https://www.google.com/maps/place/${row.local_direccion}/@-${row.local_lat},${row.local_lng}`} target="_blank" rel="noopener noreferrer">Abrir</a></div>,
  },
];

class DataFarm extends Component {
  constructor(props) {
    super(props);
    // this.domain ="http://localhost:8000";
    this.domain ="https://django-bice.herokuapp.com";
    
    this.state = {
      comunas: [],
      data: [],
      loading: false,
      totalRows: 0,
      perPage: 15,
      selectedOption: null,
      inputValue: '',
      selectedComuna: '',
      validationError: '',
      localname: '',
      page: 1,

    };
  }

  async componentDidMount() {
    const { perPage } = this.state;
    console.log(this.domain );
    let url = `${this.domain}/farms/v1/list/?page=1&per_page=${perPage}&delay=1`;
    this.setState({ loading: true });

    const response = await axios.get(
      url,
    );

    const response_comuna = await axios.get(
      `${this.domain}/farms/v1/comu/`,
    );

    let comunaFromApi = response_comuna.data.map(comuna => {
      return { value: comuna.fk_comuna, display: comuna.comuna_nombre }
    });
    this.setState({
      data: response.data.results,
      totalRows: response.data.pagination.total,
      perPage: response.data.pagination.per_page,
      loading: false,
      comunas: [
        {
          value: "",
          display:
            "(Comuna....)"
        }
      ].concat(comunaFromApi)

    });
  }

  handlePageChange = async page => {
    const { perPage } = this.state;
    const { selectedComuna } = this.state;
    const { localname } = this.state;
    console.log(selectedComuna);
    let url = `${this.domain}/farms/v1/list/`;
    this.setState({ loading: true });
    if (selectedComuna > 0) {
      url = url + `?page=${page}&per_page=${perPage}&delay=1&id_comuna=${selectedComuna}`;


    } else {
      url = url + `?page=${page}&per_page=${perPage}&delay=1`;

    }

    if (localname !== 'undefined') {
      url = url + `&nombre=${localname}`;

    }
    const response = await axios.get(
      `${url}`,
    );

    this.setState({
      loading: false,
      data: response.data.results,
      perPage: response.data.pagination.per_page,
    });
  }

  handlePerRowsChange = async (perPage, page) => {
    console.log('handlePerRowsChange');
    this.setState({ loading: true });

    const response = await axios.get(
      `${this.domain}/farms/v1/list/?page=${page}&per_page=${perPage}&delay=1`,
    );

    this.setState({
      loading: false,
      data: response.data.results,
      perPage: response.data.pagination.per_page,
    });
  }

  handleChangeSelect = async (event) => {
    this.setState(
      {
        loading: true,
        localname: ''
      }
    );

    let id_comuda = event.target.value;

    const { perPage } = this.state;
    const { localname } = this.state;
    const { selectedComuna } = this.state;


    console.log(event.target.value)
    console.log("localname->" + localname)
    const response = await axios.get(
      `${this.domain}/farms/v1/list/?page=1&per_page=${perPage}&delay=1&id_comuna=${id_comuda}`,
    );

    this.setState({
      selectedComuna: id_comuda,
      data: response.data.results,
      totalRows: response.data.pagination.total,
      perPage: response.data.pagination.per_page,
      loading: false,
      localname: ''
    });

  };
  handleChangeLocalname = event => {
 
    this.setState({
      localname: event.target.value
    }, () => {
      this.handlePageChange(this.state.page);
    });
  }


  render() {
    const { loading, data, totalRows } = this.state;


    return (
      <React.Fragment>


        <div className="row margin">
          <div className="input-field col s12">
            <select class="browser-default"
              value={this.state.selectedComuna}
              onChange={this.handleChangeSelect}

            >
              {this.state.comunas.map(comuna => (
                <option
                  key={comuna.value}
                  value={comuna.value}
                >
                  {comuna.display}
                </option>
              ))}
            </select>

          </div>
        </div>
        <div className="row margin">
          <div className="input-field col s12">
            <input id="localname" type="text" onChange={this.handleChangeLocalname} value={this.state.localname} />

            <label htmlFor="localname" className="center-align">Local</label>
          </div>
        </div>

        <DataTable
          title="Lista de Farmacias"
          columns={columns}
          data={data}
          progressPending={loading}
          pagination
          paginationServer
          paginationTotalRows={totalRows}
          onChangeRowsPerPage={this.handlePerRowsChange}
          onChangePage={this.handlePageChange}
        />

      </React.Fragment>
    );
  }
}

export default DataFarm;