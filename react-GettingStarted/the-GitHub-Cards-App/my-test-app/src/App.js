import React from 'react';
import Card from './Card'
// const App = ({ title }) => (
//   <div className="header">{title}</div>
// )

class App extends React.Component {
  render() {
    return (
      <>
        <div className="header">{this.props.title}</div>
        <Card />
      </>
    )
  }
}


export default App;
