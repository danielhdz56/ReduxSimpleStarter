import _ from 'lodash';
import React, { Component } from 'react'; // used to create and manage components
import ReactDOM from 'react-dom'; // used to inteareact witht he browser
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY = 'AIzaSyCbl40Ks3o3c5xRkh3iWs3zoqW-uoAHe64';

class App extends Component {
    constructor(props) {
        super(props);
        
        this.state = { 
            videos: [],
            selectedVideo: null 
        };

        this.videoSearch('surfboards');
    }

    videoSearch(term){
        YTSearch({key: API_KEY, term}, videos => this.setState({ 
            videos,
            selectedVideo: videos[0]
        }));
    }

    render() {
        const videoSearch = _.debounce(term => { this.videoSearch(term) }, 300); // will only run every 300 ms no matter how many times its called
        return (
            <div>
                <SearchBar onSearchTermChange={videoSearch}/>
                <VideoDetail video={this.state.selectedVideo}/>
                <VideoList
                    onVideoSelect={selectedVideo => this.setState({selectedVideo})} 
                    videos={this.state.videos}/> 
            </div>
        );
    }
}

// Take this component's generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App/>, document.querySelector('.container'));