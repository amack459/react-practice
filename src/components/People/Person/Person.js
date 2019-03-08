import React from 'react';

import styles from '../../../assets/App.css';

const person = (props) => {
  // const rando = Math.random();

  // if ( rando > 0.7 ) {
  //   throw new Error( 'Something went wrong');
  // }

  return (
    <div className={styles.Person}>
      <p onClick={props.click}>I'm a {props.name} and I'm {props.age} years old</p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed}/>
    </div>
  )
};

export default person;
