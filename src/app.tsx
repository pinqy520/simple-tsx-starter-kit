const styles = require('./index.scss')
import * as React from 'react';

export default class App extends React.Component<any, any> {
  render() {
    return (
      <div>
        <h1>It Works!</h1>
        <p>This React project just works including <span className={styles.redBg}>module</span> local styles.</p>
        <p>Enjoy!</p>
      </div>
    )
  }
}
