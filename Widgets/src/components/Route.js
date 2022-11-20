// no need to import React as we are not writing any JSX
import { useState, useEffect } from 'react';

const Route = ({ path, children }) => {
	
	const [currentPath, setCurrentPath] = useState(window.location.pathname);
	
	useEffect(() => {
		const onLocationChange = () =>{
			setCurrentPath(window.location.pathname)
			// console.log('Location Change');
		};

		window.addEventListener('popstate', onLocationChange);

		return () => {
			window.removeEventListener('popstate', onLocationChange)
		};
	}, [])

	return currentPath === path ? children : null;
};

export default Route;

