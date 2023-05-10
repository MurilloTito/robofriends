import React, { Component } from "react";

class Card extends Component {
    render() {
        // the return can only return one thing or an array, in that case,
        // its returning a div that has another elements inside(div, img, etc)
        return (
            <div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 tc ml4 mr3 mb4 mt4 ph3'>
                <img alt="robots" src={`https://robohash.org/${this.props.id}?200x200`}></img>
                <div>
                    <h2>{this.props.name}</h2>
                    <p>{this.props.userName}</p>
                    <p>{this.props.email}</p>
                </div>
            </div>
        );
    }
}

/*const Card = (props) => {
    const { name, userName, email, id} = props;
    return (
        <div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 tc'>
            <img alt="robots" src={`https://robohash.org/${id}?200x200`}></img>
            <div>
                <h2>{name}</h2>
                <p>{userName}</p>
                <p>{email}</p>
            </div>
        </div>
    );
}*/

/*const Card = ({name, userName, email, id}) => {
    return (
        <div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 tc'>
            <img alt="robots" src={`https://robohash.org/${id}?200x200`}></img>
            <div>
                <h2>{name}</h2>
                <p>{userName}</p>
                <p>{email}</p>
            </div>
        </div>
    );
}*/

export default Card;