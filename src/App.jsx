import React, { useState, useEffect } from 'react';
import NewsPreview from './comp/NewsPreview';
import News from './comp/News';

function App() {
	const [currentView, setCurrentView] = useState(0);
	const [currentNews, setCurrentNews] = useState({
		id: 0,
		title: '',
		desc: '',
	});
	const [newsList, setNewsList] = useState([
		{
			id: 1,
			title: 'News 1',
			desc: 'This is the content for the first news',
		},
		{
			id: 2,
			title: '2nd News',
			desc: 'The second news has this content',
		},
	]);

	const renderCurrentView = () => {
		switch (currentView) {
			case 0:
				return (
					<NewsPreview newsList={newsList} selectNews={selectNews} />
				);
			case 1:
				return <News currentNews={currentNews} />;
			default:
				return <NewsPreview />;
		}
	};

	const selectNews = (e) => {
		const id = parseInt(e.target.id);
		const newsIndex = newsList.findIndex((i) => i.id === id);
		setCurrentNews(newsList[newsIndex]);
		setCurrentView(1);

		console.log(newsList[newsIndex]);
		console.log(currentNews);
	};

	return (
		<React.Fragment>
			<div className="App">
				<div>{renderCurrentView()}</div>
			</div>
		</React.Fragment>
	);
}

export default App;
