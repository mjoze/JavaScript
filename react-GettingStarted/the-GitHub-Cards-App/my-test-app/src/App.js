import React from 'react';
import Cardlist from './Card';
import Form from './Form';

// const App = ({ title }) => (
//   <div className="header">{title}</div>
// )
const testData = [
  { name: "Dan Brona", avatar_url: "https://avatars0.githubusercontent.com/u/810438?v=4", company: "Facebook" },
  { name: "Jenna Arona", avatar_url: "https://avatars2.githubusercontent.com/u/6820?v=4", company: "Facebook" },
  { name: "Brian Kona", avatar_url: "https://avatars2.githubusercontent.com/u/62648?v=4", company: "Facebook" },
]

class App extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     profiles: testData
  //   };
  // }
  state = {
    profiles: testData
  };
  render() {
    return (
      <>
        <Form />
        <div className="header">{this.props.title}</div>
        <Cardlist profiles={this.state.profiles} />
      </>
    )
  }
}


export default App;
