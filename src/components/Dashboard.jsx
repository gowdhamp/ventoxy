import React, { useEffect } from 'react';
// import ecg from '../assets/images/ecg.gif';
// import loader from '../assets/images/loader.gif';
import logo from '../assets/images/logo.png';
import Chart from 'react-apexcharts';
import '../assets/css/dashboard.css';
import { UserData } from '../constants/UserData';
import { HealthDataInitial } from '../constants/HealthDataInitial';
import { UserDataInitial } from '../constants/UserDataInitial';
import { useState } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const radialBar = {
    options: {
      colors: ['#095d14'],
      plotOptions: {
        radialBar: {
          startAngle: -110,
          endAngle: 110,
          track: {
            background: '#333',
            startAngle: -110,
            endAngle: 110,
          },
          hollow: {
            margin: 25,
            size: '50%',
          },
          dataLabels: {
            name: {
              show: true,
              color: '#000',
              fontSize: '14px',
            },
            value: {
              color: '#111',
              fontSize: '16px',
              show: true,
            },
          },
        },
      },
      fill: {
        type: 'gradient',
        gradient: {
          shade: 'dark',
          type: 'horizontal',
          colorStops: [
            {
              offset: 0,
              color: '#095d14',
              opacity: 1,
            },
            {
              offset: 60,
              color: '#c4db15',
              opacity: 1,
            },
            {
              offset: 100,
              color: '#e02222',
              opacity: 1,
            },
          ],
        },
      },
      stroke: {
        lineCap: 'round',
      },
    },
  };

  const ecgChart = {
    series: [
      {
        name: 'ECG',
        data: [
          12, 34, 56, 78, 56, 89, 56, 45, 87, 45, 34, 25, 67, 56, 12, 36, 41,
        ],
      },
    ],
    options: {
      chart: {
        id: 'realtime',
        animations: {
          enabled: true,
          easing: 'linear',
          dynamicAnimation: {
            speed: 1000,
          },
        },
        toolbar: {
          show: false,
        },
        zoom: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: 'smooth',
      },
      title: {
        text: 'ECG',
        align: 'left',
      },
      markers: {
        size: 0,
      },
      yaxis: {
        max: 100,
      },
      legend: {
        show: false,
      },
    },
  };

  const lineChartOptions = {
    options: {
      chart: {
        background: 'transparent',
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: 'smooth',
      },
      markers: {
        size: 0,
      },
      xaxis: {
        categories: [
          'Jan',
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
        ],
      },
      yaxis: [
        {
          title: {
            text: 'Series A',
          },
        },
        {
          opposite: true,
          title: {
            text: 'Series B',
          },
        },
      ],
      legend: {
        position: 'top',
      },
      grid: {
        show: false,
      },
    },
  };

  const [axdata, setaxdata] = useState({
    id: '10',
    emg: '12',
    ecg: '24',
    temperature: '97.5',
    blood_pressure: '78',
    heart_rate: '73',
    pulse_oxi: '45',
    timestamp: '2022-08-18 12:46:56',
  });
  const [ECGGraph, setECGGraph] = useState([]);
  const [Hdata, setHdata] = useState(HealthDataInitial);
  const [Udata, setUdata] = useState(UserDataInitial);
  const [series, setSeries] = useState([]);
  // const [img, setimg] = useState(loader);

  useEffect(() => {
    setInterval(() => {
      axios
        .get('https://exploremychoice.in/sih/ventoxy/getdata.php')
        .then((response) => {
          setaxdata(response.data[0]);
        });

      var i = 0;
      var ecgTemp = [];
      while (i < 12) {
        var y = parseInt(Math.random() * (100 - 20) + 20);
        ecgTemp.push(y);
        console.log(y);
        i++;
      }

      console.log(ecgTemp);
      setECGGraph([
        {
          name: 'ECG',
          data: ecgTemp,
        },
      ]);

      setHdata([
        {
          name: 'Temperature',
          image: 'bx bxs-thermometer temp-color',
          value: `${axdata.temperature}`,
        },
        {
          name: 'Blood Pressure',
          image: 'bx bxs-heart-circle pressure-color',
          value: `${axdata.blood_pressure}`,
        },
        {
          name: 'Oxygen (Conc)',
          image: 'bx bx-wind wind-color',
          value: '78%',
        },
        {
          name: 'Heart Rate',
          image: 'bx bxs-heart heart-color',
          value: `${axdata.heart_rate}`,
        },
      ]);

      setUdata(UserData);

      setSeries([
        {
          name: 'Blood Pressure',
          data: [30, 70, 20, 90, 36, 80, 30, 91, 60],
        },
        {
          name: 'Heart Rate',
          data: [70, 30, 70, 80, 40, 16, 40, 20, 51],
        },
        {
          name: 'Oximeter',
          data: [55, 16, 19, 67, 38, 90, 12, 21, 50],
        },
        {
          name: 'Glucometer',
          data: [10, 62, 78, 65, 23, 43, 78, 87, 28],
        },
      ]);
    }, 1000);

    // setimg(ecg);
  }, [axdata]);

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="card-container col-7">
            <Chart
              options={ecgChart.options}
              series={ECGGraph}
              type="line"
              height={210}
            />
          </div>
          <div className="col-5">
            <div className="row">
              {Hdata.map((lists, index) => (
                <div className="col-6" key={index}>
                  <div className="status-card flexbox fdir-col">
                    <h4>{lists.name}</h4>
                    <div className="flexbox">
                      <i className={lists.image}></i>
                      <h5>{lists.value}</h5>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-5">
            <div className="row">
              {Udata.map((lists, index) => (
                <div className="col-6" key={index}>
                  <div className="status-card status-card-bar flexbox fdir-col">
                    <div className="flexbox">
                      <Chart
                        series={[lists.value]}
                        options={
                          lists.option !== ''
                            ? {
                                ...radialBar.options,
                                labels: [lists.name],
                              }
                            : {
                                ...radialBar.options,
                                labels: [lists.name],
                              }
                        }
                        type="radialBar"
                        height="200px"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-7">
            <div className="card-container height-20">
              <Chart
                series={series}
                options={lineChartOptions.options}
                type="line"
                height="100%"
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <div className="card-container">
              <h5>Blood Pressure</h5>
              <Chart
                series={[
                  {
                    name: 'Blood Pressure',
                    data: [30, 70, 20, 90, 36, 80, 30, 91, 60],
                  },
                ]}
                options={{ ...lineChartOptions.options, colors: ['#0020C2'] }}
                type="line"
                height="100%"
              />
            </div>
          </div>
          <div className="col-6">
            <div className="card-container">
              <h5>Heart Rate</h5>
              <Chart
                series={[
                  {
                    name: 'Heart Rate',
                    data: [70, 30, 70, 80, 40, 16, 40, 20, 51],
                  },
                ]}
                options={{ ...lineChartOptions.options, colors: ['#008000'] }}
                type="line"
                height="100%"
              />
            </div>
          </div>
          <div className="col-6">
            <div className="card-container">
              <h5>Oximeter</h5>
              <Chart
                series={[
                  {
                    name: 'Oximeter',
                    data: [55, 16, 19, 67, 38, 90, 12, 21, 50],
                  },
                ]}
                options={{ ...lineChartOptions.options, colors: ['#F6BE00'] }}
                type="line"
                height="100%"
              />
            </div>
          </div>
          <div className="col-6">
            <div className="card-container">
              <h5>Glucometer</h5>
              <Chart
                series={[
                  {
                    name: 'Glucometer',
                    data: [10, 62, 78, 65, 23, 43, 78, 87, 28],
                  },
                ]}
                options={{ ...lineChartOptions.options, colors: ['#C04000'] }}
                type="line"
                height="100%"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="body_background">
        <img src={logo} alt="logo" width="100%"></img>
      </div>
    </div>
  );
};

export default Dashboard;
