import React from 'react'; // used to create and manage components
import ReactDOM from 'react-dom'; // used to inteareact witht he browser
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';

const API_KEY = 'AIzaSyCbl40Ks3o3c5xRkh3iWs3zoqW-uoAHe64';

YTSearch({key: API_KEY, term: 'surfboards'}, data => console.log(data));

// Create a new component. This component should produce some HTML.
// This is a functional component because it doesn't have any concept of state
const App = () => {
    return (
        <div>
            <SearchBar/>
        </div>
    );
};

// Take this component's generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App/>, document.querySelector('.container'));