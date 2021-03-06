import React, { Component } from "react";
import axios from "axios";
import Table from "../components/Table";
import "../components/Table.css";
import { Link } from "react-router-dom";
import mac from "../images/mac.png"
import LineChart from "../components/LineChart";
import {Line} from "react-chartjs-2";
import Chart from 'chart.js/auto';


class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      coins: [],
      chartData:{
        labels:['January',
        'February',
        'March',
        'April',
        'May',
        'June']
        , datasets: [{
          label: 'My First Dataset',
          data: [65, 59, 80, 81, 56, 55, 40],
          fill: false,
          borderColor: 'rgb(75, 192, 192)',
          tension: 0.1
        }]

      },
    
      }
    
    this.componentDidMount = this.componentDidMount.bind(this);
    // this.getapi = this.getapi.bind(this);
  }

  async componentDidMount() {
    await axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=6&page=1&sparkline=false"
      )
      .then((response) => {
        // console.log(response.data);

        this.setState({
          coins: response.data,
        });
      });
    console.log(this.state.coins);
    console.log(this.state.chartData);
  }

  render() {
    const { coins,chartData } = this.state;

    return (
      <div className="container">
        <div className="bg-about">
        <div className="flex-about">
          <div className="about-item">
            <div className="about-content">
              <h5>
                Esse id exercitation exercitation lorem quis 
              </h5>
              <p>Ad nisi non id ea laborum exercitation</p>
              <a href="/about">
                <button className="btn41-43 btn-42">Get Now</button>
              </a>
            </div>
            
          </div>
          <div className="about-item">
            <div className="about-content">
           
            </div>
            
          </div>
        
        </div>
        <Table data={coins} />


        <div className="flex-about2">
          <div className="about-item2">
            <div className="about-content2">
            <h5>{'Aliquip minim irure id '.toUpperCase()} </h5> 
            </div>
           
          </div>
      
       
        </div >
        <div className="flex-about2">
          <div className="about-item3">
            <div className="about-content2">
            <img src={mac}/>
            </div>
           
          </div>
      
       
        </div >


 
{/*    
            <Line
            options={{}}
            data={chartData}
         
         
            /> */}


       



      
      
        </div>
      </div>
    );
  }
}
export default About;
