import {Component} from 'react';
import './App.css';

const Header = () => {
  return <h2>title</h2>
}


const Btn = () =>{
  const res = () =>{
    return "text2"
  }
  return (
    <button type="button">
      {res()}
    </button>
  )
}

class Field extends Component {
  render(){
    return (
      <input placeholder='input'/>
    )
  }
}

function App() {
  return (
    <div className="App">
      <Header/>
      <Field/>
    </div>
  );
}

export default App;
export {Header};