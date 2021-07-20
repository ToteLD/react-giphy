import React, { Component } from 'react';

class Gif extends Component {
    handleClick = (event) => {
        console.log(event.target)
    }

    render() {
        const src = `https://media4.giphy.com/media/${this.props.id}/200.gif`;
        return(
            <img src={src} alt="" className="gif" onClick={this.handleClick} />
        )
    }
}

export default Gif;