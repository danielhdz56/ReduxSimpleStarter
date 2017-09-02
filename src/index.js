import React from 'react'; // used to create and manage components
import ReactDOM from 'react-dom'; // used to inteareact witht he browser

// Create a new component. This component should produce some HTML.
const App = () => <div>Hi!</div>;

// Take this component's generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App/>, document.querySelector('.container'));