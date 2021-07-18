import React, { Component } from 'react';
import Gif from './gif.jsx';
import SearchBar from './search_bar.jsx';

class App extends Component {
    render() {
        return(
            <div>
                <div className="left-scene">
                    <SearchBar />
                    <div className="selected-gif">
                        <Gif />
                    </div>
                </div>
                <div className="right-scene"></div>
            </div>
        );
    }
}

export default App;