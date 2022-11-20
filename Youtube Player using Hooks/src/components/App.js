import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import youtube from "../api/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import useVideos from "../hooks/useVideos";


const App = () => {

    const [selectedVideo, setSelectedVideo] = useState(null);
    const [videos, search] = useVideos('car');

    useEffect( () => {
        setSelectedVideo(videos[0]);
    }, [videos])
    //setSelectedVideo(response.data.items[0]);


  return (
      <div className="ui container">
        <SearchBar onFormSubmit={search} />
          <div className="ui grid">
            <div className="ui row">
                <div className="eleven wide column">
                    <VideoDetail video={selectedVideo} />
                </div>
                <div className="five wide column">
                    <VideoList onVideoSelect={setSelectedVideo} videos={videos} />
                </div>
             </div>
           </div>
      </div>
    );
};

export default App;

// onVideoSelect={ (video) => setSelectedVideo(video) }

/*  
    const onVideoSelect = video => {
     setSelectedVideo(video);
     // console.log('From the App!', video);
     };

     onVideoSelect={onVideoSelect}
*/
  