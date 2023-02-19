import React, { useState, useEffect } from 'react';
import ReactApexChart from 'react-apexcharts';
//import chartData from '../data';
import chartDataConf from '../data';

function Chart(props) {
	return (
		<div className="brushChart">
			<ReactApexChart
				options={chartDataConf.chartData.options}
				series={chartDataConf.chartSeries}
				type="line"
				height={320}
			/>
			<ReactApexChart
				options={chartDataConf.optionsLine}
				series={chartDataConf.optionsLine.series}
				type="line"
				height={130}
			/>
		</div>
	);
}

export default Chart;
