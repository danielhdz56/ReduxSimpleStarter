import React, {Component} from 'react';

// This is a class based component, used when we want to be aware of state.
class SearchBar extends Component { // allows SearchBar to have access to all of the functionality that React.component has
    constructor(props) {
        super(props);

        this.state = { term: ''};
    }

    render() {
        return (
            <div className="search-bar">
                <input
                    value ={this.state.term} // turns it into a controlled component; has its value set by state
                    onChange={ event => this.onInputChange(event.target.value)} 
                />
            </div> 
        ); 
    }

    onInputChange(term) {
        this.setState({term});
        this.props.onSearchTermChange(term);
    }
}

export default SearchBar;