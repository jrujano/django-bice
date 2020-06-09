
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
        selector: 'original_title',
        sortable: true,
        cell: row => <div><div style={{ fontWeight: 700 }}>{row.original_title}</div>{row.title}</div>,
    },
    {
        name: 'Año',
        selector: 'release_date',
        sortable: true,
        right: true,
    },
    {
        name: 'Popularidad',
        selector: 'popularity',
        sortable: true,
        right: true,
    },
    {
        name: 'Foto',
        selector: 'backdrop_path',
        cell: row => <div style={{ padding: '5px' }}><img src={`https://image.tmdb.org/t/p/w500/${row.backdrop_path}`} height='80px' width='80' alt='' /></div>,



    }


];
const handleChange = (state) => {
    console.log('Selected Rows: ', state.selectedRows);
};


// const handleClearRows = () => {
//     this.setState({ toggledClearRows: !this.state.toggledClearRows })
// }

class DataMovies extends Component {

    state = {
        movies: [],
        header: {
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZjI2ZTBjMDBkOGRlNjUxODc3ZjhjOTYyZjcwNDQ0NSIsInN1YiI6IjVlODQxYzUwY2I2ZGI1MDAxOGE2ZjExMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ZjZRTDlnD77AkjyaRsSnSyUxARf84Ot0SiKSFkyQI9k',

        },
        toggledClearRows: false,
        perPage: 10,
        total_results :0
    }

    updateState = state => {
        this.setState({ selectedRows: state.selectedRows });
    }
    componentDidMount() {
        axios.get('https://api.themoviedb.org/3/movie/now_playing?language=es-Es', {
            headers: this.state.header
        })
            .then(
                resp => {

                    this.setState({ movies: resp.data.results });
                    this.setState({ total_results: resp.data.total_results });
                    console.log(resp.data);
                    console.log(this.state.movies);
                }
            )

    }


    render() {
        return (
            <DataTable
                title="Lista de películas en cines"
                columns={columns}
                data={this.state.movies}
                selectableRows
                onSelectedRowsChange={handleChange}
                clearSelectedRows={this.state.toggledClearRows}
                pagination
                
            />
        )
    }
};


export default DataMovies; 