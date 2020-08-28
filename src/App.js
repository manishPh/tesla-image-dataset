import React from 'react';
import Filter from './Filter';
import ImageList from './ImageList';
import data from './data.json';
import './App.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data,
            filter: '',
            labels: this.getLabels(),
        };
    }

    getLabels = () => {
        const s = new Set();
        data.forEach(({ label }) => s.add(label));
        return [...s].sort();
    };

    getFilteredData = () => {
        const { filter, data } = this.state;
        if (filter === '') return data;

        return data.filter(({ label }) => label === filter);
    };

    handleFilterSelect = (selectedFilter) => {
        const filter = selectedFilter ? selectedFilter.value : '';
        console.log({ filter });
        this.setState({ filter });
    };

    render() {
        const { labels, filter } = this.state;
        const filteredData = this.getFilteredData();
        console.log('filteredData length : ' + filteredData.length);

        return (
            <section className='main'>
                <header>
                    <h2>TESLA Self Driving Cars - Neural Net Model Data</h2>
                </header>
                <Filter filter={filter} labels={labels} onFilterSelect={this.handleFilterSelect} />
                <ImageList images={filteredData} />
            </section>
        );
    }
}

export default App;
