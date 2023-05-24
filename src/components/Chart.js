import ReactApexChart from 'react-apexcharts';
import PropTypes from 'prop-types';

const ApexChart = ({ series }) => {
  const options = {
    chart: {
      height: 350,
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
  };

  return (
    <div id="chart">
      <ReactApexChart
        options={options}
        series={[series]}
        type="radialBar"
        height={150}
      />
    </div>
  );
};

ApexChart.propTypes = {
  series: PropTypes.number.isRequired,
};

export default ApexChart;
