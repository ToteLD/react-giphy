import React, { Component } from 'react';
import Gif from './gif.jsx';
import List from './list.jsx';
import SearchBar from './search_bar.jsx';

class App extends Component {
    render() {
        const gifs = [
            { id: "aagX4Bl8Fo21G"},
            { id: "3o6wNYTRSluicbit5S"}
        ]

        return(
            <div>
                <div className="left-scene">
                    <SearchBar />
                    <div className="selected-gif">
                        <Gif />
                    </div>
                </div>
                <div className="right-scene">
                    <List gifs={gifs} />
                </div>
            </div>
        );
    }
}

export default App;