import React from 'react';
import ReactApexChart from 'react-apexcharts';

class ApexChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [70],
      options: {
        chart: {
          height: 3,
          type: 'radialBar',
        },
        plotOptions: {
          radialBar: {
            hollow: {
              size: '50%',
            },
          },
        },
        labels: ['gg'],
      },
    };
  }

  render() {
    const { options, series } = this.state;

    return (
      <div id="chart">
        <ReactApexChart
          options={options}
          series={series}
          type="radialBar"
          height={150}
        />
      </div>
    );
  }
}

export default ApexChart;
