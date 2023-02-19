import React, { useState, useEffect } from 'react';

function News(props) {
	const news = props.currentNews;

	return (
		<div>
			<div>{news.title}</div>
			<div>{news.desc}</div>
		</div>
	);
}

export default News;
