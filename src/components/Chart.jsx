import React, { useState, useEffect } from 'react';
import ReactApexChart from 'react-apexcharts';
import chartData from '../data';

function Chart(props) {
	let optionsLine = {
		series: chartData.series,
		chart: {
			id: 'chart1',
			height: 130,
			type: 'area',
			brush: {
				target: 'chart2',
				enabled: true,
			},
			selection: {
				enabled: true,
				xaxis: {
					min: new Date('01 Aug 2022').getTime(),
					max: new Date('07 Nov 2022').getTime(),
				},
			},
		},
		colors: ['#008FFB'],
		fill: {
			opacity: 1,
		},
		xaxis: {
			type: 'datetime',
			tooltip: {
				enabled: false,
			},
		},
		yaxis: {
			tickAmount: 4,
			max: 1000,
		},
		annotations: {
			position: 'back',
			yaxis: [
				{
					y: 250,
					y2: null,
					strokeDashArray: 1,
					borderColor: '#c2c2c2',
					fillColor: '#c2c2c2',
					opacity: 0.45,
					offsetX: -40,
					offsetY: -5,
					width: '100%',
					yAxisIndex: 0,
					label: {
						borderColor: '#c2c2c2',
						borderWidth: 1,
						borderRadius: 2,
						text: 'This is a test 2',
						textAnchor: 'end',
						position: 'right',
						offsetX: -30,
						offsetY: 0,
						style: {
							background: '#fff',
							color: '#777',
							fontSize: '12px',
							fontWeight: 400,
							fontFamily: undefined,
							cssClass: 'apexcharts-yaxis-annotation-label',
							padding: {
								left: 5,
								right: 5,
								top: 0,
								bottom: 2,
							},
						},
					},
				},
			],
		},
	};

	return (
		<div className="brushChart">
			<ReactApexChart
				options={chartData.options}
				series={chartData.series}
				type="line"
				height={320}
			/>
			<ReactApexChart
				options={optionsLine}
				series={optionsLine.series}
				type="line"
				height={130}
			/>
		</div>
	);
}

export default Chart;
