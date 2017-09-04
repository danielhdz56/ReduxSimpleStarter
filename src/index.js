import React, { Component } from 'react'; // used to create and manage components
import ReactDOM from 'react-dom'; // used to inteareact witht he browser
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
const API_KEY = 'AIzaSyCbl40Ks3o3c5xRkh3iWs3zoqW-uoAHe64';

class App extends Component {
    constructor(props) {
        super(props);
        
        this.state = { videos: [] };

        YTSearch({key: API_KEY, term: 'surfboards'}, videos => this.setState({ videos }));

    }
    render() {
        return (
            <div>
                <SearchBar/>
            </div>
        );
    }
}

// Take this component's generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App/>, document.querySelector('.container'));