import React from 'react';

import styles from '../../assets/Cockpit.css';

const cockpit = (props) => {
  const importedClasses = [];
  let btnClass = '';
    if(props.showPeople) {
      btnClass = styles.Red;
    }

    if(props.people.length <= 2) {
      importedClasses.push(styles.red);
    }

    if(props.people.length <= 1) {
      importedClasses.push(styles.bold);
    }

  return (
    <div className={styles.Cockpit}>
      <h1>HI, HAMBURGER</h1>
      <p className={importedClasses.join(' ')}>What's happening?!</p>
      <button
      className={btnClass}
      onClick={props.clicked}>
        Switch Info
      </button>
    </div>
  );
}

export default cockpit;
