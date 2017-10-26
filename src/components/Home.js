import React from 'react'
import '../scss/Home.scss';

class Home extends React.Component {
  render() {
    return (
      <div className="greeting">
        <h1 className="greeting__head">Paul</h1>
        <h2 className="greeting__subhead">Front-end<br></br>developer</h2>
      </div>
    )
  }
}

export default Home
