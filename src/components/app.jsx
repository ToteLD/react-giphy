import React, { Component } from 'react';
import Gif from './gif.jsx';
import List from './list.jsx';
import SearchBar from './search_bar.jsx';
import giphy from 'giphy-api';
import { result } from 'lodash';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            gifs: [],
            selectedGifId: "aagX4Bl8Fo21G"
        }

        this.search("homer thinking");
    }
    
    search = (query) => {
        giphy('1KMPHCBIOe3hOjJwCJQX49sRc6cM0oIm').search({
            q: query,
            rating: 'g'
    }, (err, res) => {
            this.setState({
                gifs: res.data
            });
        });
    }

    render() {
        return(
            <div>
                <div className="left-scene">
                    <SearchBar />
                    <div className="selected-gif">
                        <Gif id={this.state.selectedGifId}/>
                    </div>
                </div>
                <div className="right-scene">
                    <List gifs={this.state.gifs} />
                </div>
            </div>
        );
    }
}

export default App;