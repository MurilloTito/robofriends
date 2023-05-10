import React, { Component } from "react";
import CardList from "../components/CardList";
import SearchBox from '../components/SearchBox';
import Scroll from "../components/Scroll";
// o robots esta exportando um array(varias coisas), entao ele fica apenas export e
// precisa estar entre chave

class App extends Component { // container: smart component
    constructor() {
        super();
        this.state = {
            robots: [],
            searchfield: '',
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json())
        .then(users => this.setState({ robots: users}));
    }

    // this is not an lifecycle method of React, so it may have an arrow function
    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
    }

    render () {
        const { robots, searchfield } = this.state
        const filteredRobots = robots.filter(robot => { // iterar sobre o vetor de robos e para cada robo...
            return robot.name.toLowerCase().includes(searchfield.toLowerCase()); 
        });
        if (!robots.length) {
            return (
                <h1 id="title" className="tc f1">Loading...</h1>
            );
        } else {
            return (
                <div>
                    <h1 className="tc f1" id="title">RoboFriends</h1>
                    <SearchBox searchChange={this.onSearchChange}></SearchBox>
                    <Scroll>
                        <CardList robots={filteredRobots}></CardList>
                    </Scroll>
                </div>
            );
        }
    }
}

/*const App = () => {
    return (
        <div>
            <h1 className="tc">RoboFriends</h1>
            <SearchBox></SearchBox>
            <CardList robots={robots}></CardList>
        </div>
    );
}*/

export default App;