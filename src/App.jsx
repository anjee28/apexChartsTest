import React, { useState, useEffect } from 'react';
import Chart from './components/Chart';
import DenseAppBar from './components/DenseAppBar';

function App() {
	return (
		<div className="App">
			<nav>
				<DenseAppBar />
			</nav>
			<main>
				<Chart />
			</main>
		</div>
	);
}

export default App;
