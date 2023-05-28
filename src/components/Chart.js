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
    labels: [''],
  };

  return (
    <div>
      <ReactApexChart
        options={options}
        series={[series]}
        type="radialBar"
        height={150}
        className="charts"
      />
    </div>
  );
};

ApexChart.propTypes = {
  series: PropTypes.string.isRequired,
};

export default ApexChart;
