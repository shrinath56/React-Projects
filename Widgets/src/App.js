import React, {useState} from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import Route from './components/Route';
import Header from './components/Header';

	const content = [
		{
			title: 'What is React?',
			content: 'React is front-end JavaScript Library.'
		},
		{
			title: "Why use React?",
			content: 'React is a favourite JS library among engineers.'
		},
		{
			title: "How do you use React",
			content: "You use React by creating components."
		}
	];

	const colorOptions = [
		{
			label: 'The Color Red',
			value: 'red'
		},
		{
			label: 'The Color Green',
			value: 'green'
		},
		{
			label: 'A Shade of Blue',
			value: 'blue'
		}
	];



	export default () => {
		
		const [selected, setSelected] = useState(colorOptions[0]);
		
		return (
			<div>
				<Header />
				<Route path = "/">
					<Accordion items={content} />
				</Route>
				<Route path = "/list">
					<Search />
				</Route>
				<Route path = "/dropdown">
					<Dropdown
						label="Select a color"
						options={colorOptions}
						selected={selected}
						onSelectedChange={setSelected}
					/>
				</Route>
				<Route path = "/translate">
					<Translate />
				</Route>
			</div>
		);	
	};


// <Accordion items={content}/>   
// <Search />
// <Dropdown />
// <Translate />

/*
	const showAccordion = () => {
		if (window.location.pathname === '/') {
			return <Accordion items = {content} />;
		}
	};

	const showList = () => {
		if (window.location.pathname === '/list') {
			return <Search />;
		}
	};

	const showDropdown = () => {
		if (window.location.pathname === '/dropdown') {
			return <Dropdown />;
		}
	};

	const showTranslate = () => {
		if (window.location.pathname === '/translate') {
			return <Translate />;
		}
	};

	inside export default return statement, write below code in <div> tag
	{showAccordion()}
	{showList()}
	{showDropdown()}
	{showTranslate()}
*/