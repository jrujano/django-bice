
import React, { Component } from 'react';

import DataTable, { createTheme } from 'react-data-table-component';
// import Button from '@material-ui/core/Button';
import axios from 'axios';


createTheme('solarized', {
    text: {
        primary: '#268bd2',
        secondary: '#2aa198',
    },
    background: {
        default: '#002b36',
    },
    context: {
        background: '#cb4b16',
        text: '#FFFFFF',
    },
    divider: {
        default: '#073642',
    },
    action: {
        button: 'rgba(0,0,0,.54)',
        hover: 'rgba(0,0,0,.08)',
        disabled: 'rgba(0,0,0,.12)',
    },
});
// const actions = <Button key="add">Add</Button>;
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
        name: 'Comuna',
        selector: 'comuna_nombre',
        sortable: true,
        right: true,
    },
    {
        name: 'Dirección',
        selector: 'local_direccion',
        cell: row => <div style={{ padding: '5px' }}>{row.local_direccion}  <a href={`https://maps.google.com/?q=${row.local_lat},${row.local_lng}`} target="_blank">Abrir</a></div>,



    }


];
const handleChange = (state) => {
    console.log('Selected Rows: ', state.selectedRows);
};


// const handleClearRows = () => {
//     this.setState({ toggledClearRows: !this.state.toggledClearRows })
// }

class DataFarm extends Component {

    state = {
        farms: [],
        header: {
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZjI2ZTBjMDBkOGRlNjUxODc3ZjhjOTYyZjcwNDQ0NSIsInN1YiI6IjVlODQxYzUwY2I2ZGI1MDAxOGE2ZjExMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ZjZRTDlnD77AkjyaRsSnSyUxARf84Ot0SiKSFkyQI9k',

        },
        toggledClearRows: false,
        perPage: 50,
        total_results :0
    }

    updateState = state => {
        this.setState({ selectedRows: state.selectedRows });
    }
    componentDidMount() {
        axios.get('http://localhost:8000/farms/v1/list/', {
            headers: this.state.header
        })
            .then(
                resp => {

                    this.setState({ farms: resp.data });
                    this.setState({ total_results: resp.data.total_results });
                    console.log(resp.data);
                    console.log(this.state.farms);
                }
            )

    }


    render() {
        return (
            <DataTable
                title="Lista de Farmacias"
                columns={columns}
                data={this.state.farms}
                selectableRows
                onSelectedRowsChange={handleChange}
                clearSelectedRows={this.state.toggledClearRows}
                pagination
                
            />
        )
    }
};


export default DataFarm;