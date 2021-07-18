import React, { Component } from 'react';

class Gif extends Component {

    render() {
        const src = "https://media4.giphy.com/media/aagX4Bl8Fo21G/giphy.gif?cid=ecf05e47c1183f4435ee73b63bd3533bfd6f9e6f7f888d3f&rid=giphy.gif&ct=g"
        return(
            <img src={src} alt="" className="gif" />
        )
    }
}

export default Gif;