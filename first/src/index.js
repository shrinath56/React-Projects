// 1) Import React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

// 2) Get a reference to the div with ID root
const el = document.getElementById('root');

// 3) Tell React to take control of that element
const root = ReactDOM.createRoot(el);

// 4) Create a component
function App() {
	const myname = 'Shrinath';

	return (
	<div>
	<h1>Hello, my name is {myname}.</h1>
	<input placeholder="hi there" type='string' min={5}/>
	</div>
	);
}

// 5) Show the component on the screen
root.render(<App />);

