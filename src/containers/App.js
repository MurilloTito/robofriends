import React, { useState, useEffect } from "react";
import CardList from "../components/CardList";
import SearchBox from '../components/SearchBox';
import Scroll from "../components/Scroll";
import ErrorBoundry from "../components/ErrorBoundry";
// o robots esta exportando um array(varias coisas), entao ele fica apenas export e
// precisa estar entre chave

function App() { // container: smart component
    /*constructor() {
        super();
        this.state = {
            robots: [],
            searchfield: '',
        }
    }
    
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json())
        .then(users => this.setState({ robots: users}));
    }*/

    const [robots, setRobots] = useState([]);
    const [searchfield, setSearchField] = useState('');
    const [count, setCount] = useState(0);

    useEffect( () => { // o useEffect roda sempre que o App renderiza
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => setRobots(users));
        console.log(count);
    }, [count]); // o segundo argumento do useEffect diz qual variavel que muda e
    // por isso precisa ser re-renderizada, isso porque o useEffect roda sempre que o App component esta rodando.
    // Como o robots nao muda, entao o segundo argumento deve ser um array vazio(o segundo argumento sempre eh um array) pois
    // isso mostra para o useEffect que nenhuma variavel esta mudando e portanto ele nao precisa rodar de novo, ou seja, precisa
    // rodar apenas uma vez.
    // Obs: No caso o count precisa ser atualizado, entao ele entra no segundo argumento do useEffect

    const onSearchChange = (event) => {
        // this.setState({ setSearchField: event.target.value })
        setSearchField(event.target.value);
    }

    // const { robots, searchfield } = this.state;
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
                <button onClick={()=>setCount(count + 1)}>Click Me!</button>
                <SearchBox searchChange={onSearchChange}></SearchBox>
                <Scroll>
                    <ErrorBoundry>
                        <CardList robots={filteredRobots}></CardList>
                    </ErrorBoundry>
                </Scroll>
            </div>
        );
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