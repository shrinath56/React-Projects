import axios from 'axios';  //don't forget to install axios in this project'

const KEY = 'AIzaSyDmRRVZxyvd53tJiBuHfzUMfdvVwFbofRc';

export default axios.create({
	baseURL: 'https://www.googleapis.com/youtube/v3',
	params: {
		part: 'snippet',
		type: 'video',
		maxResults: 5,
		key: KEY

	}
});