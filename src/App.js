import React, { Component } from 'react';

import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {id:1, name: 'Acacia', age: 31 },
      {id:2, name: 'Valentina', age: 37 },
      {id:3, name: 'Albert', age: 9 }
    ],
    otherState: 'something',
    shows: false
  }

  deleteNameHandler = (personIndex) => {
    const people = [...this.state.persons];
    people.splice(personIndex, 1);
    this.setState({persons: people});
  }

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id ===id;

    });
    const person = {
      ...this.state.persons[personIndex]
    };

    // Alternative way of updating an object. Less modern but equal
    // const person = Object.assign({}, this.state.person[personIndex]);

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;


    this.setState( {persons: persons} )
  }

  togglePersonHandler = () => {
    const shows = this.state.showPeople;
    this.setState({showPeople: !shows});
  }

  render() {
    const style = {
      backgroundColor: 'green',
      borderRadius: '2px',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
    };

    let people = null;

    if(this.state.showPeople) {
      people = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              click={() => this.deleteNameHandler(index)}
              name={person.name}
              age={person.age}
              key={person.id}
              changed={(event) => this.nameChangedHandler(event, person.id)} />
          })}
        </div>
      );
      style.backgroundColor = 'red';
    }

    const classes = [];
    if(this.state.persons.length <= 2) {
      classes.push('red');
    }
    if(this.state.persons.length <= 1) {
      classes.push('bold');
    }
    return (

        <div className="App">
          <h1>HI, HAMBURGER</h1>
            <p className={classes.join(' ')}>What's happening?!</p>
          {/* THIS CAN BE INEFFICIENT COMPARED TO LINE 88 */}
          <button
          style={style}
          onClick={this.togglePersonHandler}>Switch Info</button>
          {people}
          {/* <button
          style={style}
          onClick={() => this.switchInfoHandler('Valentina!!!')}>Switch Info</button> */}
          {/* {
            this.state.showPeople === true ?
          } */}
        </div>
      );
      //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'HI, HAMBURGER!'))
    }
  }

export default App;
