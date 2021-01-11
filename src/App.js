import React from "react";

import Cards  from "./Components/Cards/Cards.component";
import Chart from "./Components/Chart/Chart.component";
import Hero from "./Components/Hero/Hero.component"
import CountryPicker from "./Components/CountryPicker/Country-picker.component";
import {fetchData} from "./API"
import InforCard from "./Components/InforCards/inforcard"

import styles from "./module.css";

class App extends React.Component{
state = {
  data: {},
  country: ""
}

async componentDidMount(){
  const fetchedData = await fetchData();
  this.setState({data: fetchedData})
}

handleCountryChange = async (country)=>{
const fetchedData = await fetchData(country);
console.log(fetchedData);
this.setState({data: fetchedData, country: country})
}
render(){

const {data, country} = this.state;
return (
  <div className={styles.container}>
    <Hero />
      <Cards data={data} />
      <CountryPicker handleCountryChange={this.handleCountryChange} />
      <Chart data={data} country={country} />
    <InforCard />
  </div>
);
}
}

export default App;
