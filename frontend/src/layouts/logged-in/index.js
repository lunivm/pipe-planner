import React from 'react';
import Navigation from './Navigation';

import styles from './LoggedIn.module.css';

export default function LoggedIn(props) {
  return (
    <div className={`${styles.rootLayout} pp-flex`}>
      <header className={`${styles.rootHeader} pp-flex-fixed`}>
        <Navigation/>
      </header>

      <main className="pp-flex pp-flex-sized">
        {props.children}
      </main>
    </div>
  );
}
