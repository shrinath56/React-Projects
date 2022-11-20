import React, { useState, useEffect } from 'react';
import youtube from '../api/youtube';

const useVideos = (defaultSearchTerm) => {
	const [videos, setVideos] = useState([]);

	useEffect( () => {
        search(defaultSearchTerm);
    }, [defaultSearchTerm]);

	 const search = async (term) => {
        const response = await youtube.get("/search", {
        params: {
            q: term,
         },
        });
     setVideos(response.data.items);  
  };
  
  return [videos, search];
  //  return { videos, search };    its similar, in React we use [] and in JS we use {} to return custom hook
};

export default useVideos;