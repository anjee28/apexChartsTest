import React, { useState, useEffect } from 'react';

function NewsPreview(props) {
	return (
		<div>
			{props.newsList.map((val, key) => {
				return (
					<div
						className="newsThumb"
						key={key}
						id={val.id}
						onClick={props.selectNews}
					>
						<div id={val.id}>{val.title}</div>
						<div id={val.id}>{val.desc}</div>
					</div>
				);
			})}
		</div>
	);
}

export default NewsPreview;
