import React, {Component} from 'react';
import style from './../styles/styles.less';

import Confetti from 'react-confetti';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
    }
  }
  componentDidMount() {

  }
  componentDidUpdate(prevProps, prevState, snapshot) {

  }
  componentWillUnMount() {

  }
  // shouldComponentUpdate(nextProps, nextState) {}
  // static getDerivedStateFromProps(props, state) {}
  // getSnapshotBeforeUpdate(prevProps, prevState) {}
  // static getDerivedStateFromError(error) {}
  // componentDidCatch() {}
  render() {
    return (
      <div className={style.app}>
        <Confetti width={window.innerWidth} height={window.innerHeight} recycle={true} className={style.rain} />
        <div className={style.image_container}><img src="img/kokko.jpg" /></div>
        <h1>You! Yes you!</h1>
        <div className={style.image_container}><img src="img/juhannus.jpg" /></div>
        <h3>You are summoned to get drunk on Saturday</h3>
        <h1>The Finnish way</h1>
        <div className={style.image_container}><img src="img/humalainen.jpeg" /></div>
        <h3>Be there or don't come to Finland, ever!!</h3>
      </div>
    );
  }
}
export default App;