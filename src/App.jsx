import React, { useState, useEffect } from 'react';
import Chart from './components/Chart';
import DenseAppBar from './components/DenseAppBar';

function App() {
	return (
		<React.Fragment>
			<DenseAppBar />
			<Chart />
		</React.Fragment>
	);
}

export default App;
