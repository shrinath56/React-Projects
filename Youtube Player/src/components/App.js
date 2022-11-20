import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../api/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

class App extends React.Component {
  state = { videos: [], selectedVideo: null };

  componentDidMount() {
        this.onTermSubmit('car');   //default search term - before user search for anything
  }

  onTermSubmit = async (term) => {
    const response = await youtube.get("/search", {
      params: {
        q: term,
      },
    });
   // console.log(response);
    this.setState({ 
        videos: response.data.items, 
        selectedVideo: response.data.items[0]  // to get default 1st video selected in player
    }); 
  };

  onVideoSelect = video => {
    this.setState({selectedVideo: video});
   // console.log('From the App!', video);
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
          <div className="ui grid">
            <div className="ui row">
                <div className="eleven wide column">
                    <VideoDetail video={this.state.selectedVideo} />
                </div>
                <div className="five wide column">
                    <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
                </div>
             </div>
           </div>
      </div>
    );
  }
}

export default App;


// I have{" "} {this.state.videos.length} videos.  