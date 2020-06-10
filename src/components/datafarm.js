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
    name: 'Dia',
    selector: 'funcionamiento_dia',
    sortable: true,
    right: true,
  },
  {
    name: 'Apertura',
    selector: 'funcionamiento_hora_apertura',
    sortable: true,
    right: true,
  },
  {
    name: 'Cierre',
    selector: 'funcionamiento_hora_cierre',
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
    name: 'Dirección',
    selector: 'local_direccion',
    cell: row => <div style={{ padding: '5px' }}>{row.local_direccion}</div>,
  },
  {
    name: 'Mapa',
    selector: 'local_direccion',
    cell: row => <div style={{ padding: '5px' }}><a href={`https://www.google.com/maps/place/${row.local_direccion}/@-${row.local_lat},${row.local_lng}`} target="_blank" rel="noopener noreferrer">Abrir</a></div>,
  },
  {
    name: 'Localidad',
    selector: 'localidad_nombre',
    sortable: true,
    right: true,
  },
];

class DataFarm extends Component {

  state = {
    comunas: [],
    data: [],
    loading: false,
    totalRows: 0,
    perPage: 15,
    selectedOption: null,
    inputValue: '', 
    selectedComuna: "",
    validationError: ""


  };

  async componentDidMount() {
    const { perPage } = this.state;

    this.setState({ loading: true });

    const response = await axios.get(
      `https://django-bice.herokuapp.com/farms/v1/list/?page=1&per_page=${perPage}&delay=1`,
    );

    const response_comuna = await axios.get(
      `https://django-bice.herokuapp.com/farms/v1/comu/`,
    );

    let comunaFromApi=response_comuna.data.map(comuna => {
      return {value: comuna.fk_comuna, display: comuna.comuna_nombre}
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
    console.log(selectedComuna);
    let url =``;
    this.setState({ loading: true });
    if (selectedComuna>0) {
      url = `https://django-bice.herokuapp.com/farms/v1/list/?page=${page}&per_page=${perPage}&delay=1&id_comuna=${selectedComuna}`;


    }else{
      url = `https://django-bice.herokuapp.com/farms/v1/list/?page=${page}&per_page=${perPage}&delay=1`;
        
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
    this.setState({ loading: true });

    const response = await axios.get(
      `https://django-bice.herokuapp.com/farms/v1/list/?page=${page}&per_page=${perPage}&delay=1`,
    );

    this.setState({
      loading: false,
      data: response.data.results,
      perPage: response.data.pagination.per_page,
    });
  }

  handleChangeSelect = async (event) => {
    this.setState({ loading: true });
    let id_comuda=event.target.value;
    
    const { perPage } = this.state;    
    const { selectedComuna } = this.state;    
    
    
    console.log(event.target.value )
    console.log(this.selectedComuna)
    const response = await axios.get(
      `https://django-bice.herokuapp.com/farms/v1/list/?page=1&per_page=${perPage}&delay=1&id_comuna=${id_comuda}`,
    );
    
    this.setState({
      selectedComuna:id_comuda,
      data: response.data.results,
      totalRows: response.data.pagination.total,
      perPage: response.data.pagination.per_page,
      loading: false,
    });
   
  };
   
  render() {
    const { loading, data, totalRows } = this.state;


    return (
      <React.Fragment>
        
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