import React, { Component } from 'react';

import styles from './assets/App.css';
import People from './components/People/People';
import Cockpit from './components/Cockpit/Cockpit';

class App extends Component {
  state = {
    people: [
      {id:1, name: 'Acacia', age: 31 },
      {id:2, name: 'Valentina', age: 37 },
      {id:3, name: 'Albert', age: 9 }
    ],
    otherState: 'something',
    shows: false
  }

  deleteNameHandler = (personIndex) => {
    const people = [...this.state.people];
    people.splice(personIndex, 1);
    this.setState({people: people});
  }

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.people.findIndex(p => {
      return p.id ===id;
    });
    const person = {
      ...this.state.people[personIndex]
    };

    // Alternative way of updating an object. Less modern but equal
    // const person = Object.assign({}, this.state.person[personIndex]);

    person.name = event.target.value;

    const people = [...this.state.people];
    people[personIndex] = person;

    this.setState( {people: people} )
  }

  togglePersonHandler = () => {
    const shows = this.state.showPeople;
    this.setState({showPeople: !shows});
  }

  render() {
    let people = null;

    if(this.state.showPeople) {
      people = (
        <div>
          <People
            people={this.state.people}
            clicked={this.deleteNameHandler}
            changed={this.nameChangeHandler}
          />
        </div>
      );
      // style.backgroundColor = 'red';
    }


    return (
        <div className={styles.App}>
          < Cockpit
            showPeople={this.state.showPeople}
            people={this.state.people}
            clicked={this.togglePersonHandler}
          />
          {people}
        </div>
      );
      //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'HI, HAMBURGER!'))
    }
  }

export default App;
