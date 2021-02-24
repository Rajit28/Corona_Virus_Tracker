import React from 'react';

import { Cards, Chart, CountryPicker } from './components';
import { fetchData } from './api'; // just the folder name beacuase there is a index file
import styles from './App.module.css';
import image from './images/covid_tracker.png';


class App extends React.Component {

    state = {
        data: {},
        country: '',
    }

    async componentDidMount() {

        const fetchedData = await fetchData();
        // console.log(data);
        this.setState({ data: fetchedData });

    }

    // To change the state of the Country
    handleCountryChange = async (country) => {
        console.log(country);
        const fetchedData = await fetchData(country);
        console.log(fetchedData); //fetch data
        this.setState({ data: fetchedData, country: country });




        // set the state
    }

    render() {
        const { data, country } = this.state;

        return (
            <div className={styles.container}>
                <img className={styles.image} src={image} alt="COVID-19" />
                <Cards data={data} />
                <CountryPicker handleCountryChange={this.handleCountryChange} />
                <Chart data={data} country={country} />

            </div>
        )
    }
}

export default App;