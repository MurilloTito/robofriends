import React from "react";
// o Card esta exportando apenas uma coisa, entao ele fica export default
import Card from './Card';

/*const CardList = ({ robots }) => {
    let firstIndex = Math.floor(Math.random() * (robots.length - 0) + 0);
    let secondIndex =  Math.floor(Math.random() * ((robots.length - 1) - 0) + 0);
    let thirdIndex =  Math.floor(Math.random() * ((robots.length - 2) - 0) + 0);
    if (firstIndex < 0) {
        firstIndex = 0;
    }
    if (secondIndex < 0) {
        secondIndex = 0;
    }
    if (thirdIndex < 0) {
        thirdIndex = 0;
    }
    return (
        <div>
            <Card name={robots[firstIndex].name} userName={robots[firstIndex].username} email={robots[firstIndex].email} id={robots[firstIndex].id}></Card>
            <Card name={robots[secondIndex].name} userName={robots[secondIndex].username} email={robots[secondIndex].email} id={robots[secondIndex].id}></Card>
            <Card name={robots[thirdIndex].name} userName={robots[thirdIndex].username} email={robots[thirdIndex].email} id={robots[thirdIndex].id}></Card>
        </div>
    );
}*/

// export default CardList;

/*const CardList = ({ robots }) => {
    return (
        <div>
            {robots.map((user, i) => {
                return <Card key={i} 
                name={robots[i].name} 
                userName={robots[i].username} 
                email={robots[i].email} 
                id={robots[i].id}></Card>
            })}
        </div>
    );
}*/

const CardList = ({ robots }) => {
    if (true) {
        throw new Error('Nooooooo!');
    }
    const cardComponent = robots.map((user, i) => {
        return  <Card key={i} 
        name={robots[i].name} 
        userName={robots[i].username} 
        email={robots[i].email} 
        id={robots[i].id}></Card>
    });
    return (
        <div>
            {cardComponent}
        </div>
    );
}

// essa funcao eh a mesma coisa que a arrow function dentro do parametro do map
/*function abc(user, i) {
    return <Card></Card>
}*/

export default CardList;