import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

// class WhoAmI extends Component{
//   constructor(props){
//     super(props)
//     this.state = {
//       years: 10,
//     }
//   }

//   nextYear = () =>{
//     this.setState(state => ({
//       years: state.years + 1
//     }))
//   }

//   render(){
//     const {name, lastName} = this.props
//     return(
//       <div>
//         <h1>{name} {lastName}</h1> <span>{this.state.years}</span>
//         <button onClick={this.nextYear}>+1</button>
//       </div>
//     )
//   }
// }

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      data: [
        {name: 'Name 1', salary: 1000, increase: false, id:1},
        {name: 'Name 2', salary: 2000, increase: true, id:2},
        {name: 'Name 3', salary: 3000, increase: false, id:3},
      ],
      maxId: 4
    }
  }
  
  deleteItem = (id) =>{
    this.setState(({data}) => {
      return{
        data: data.filter(item => item.id !== id)
      }
    })
  }

  onAdd = (name, salary) => {
    this.setState(({data}) => {
      const newItem = {
        name: name,
        salary: salary,
        increase: false,
        id:this.state.maxId
      }

      const newArray = [ ...data, newItem];
      return{
        data: newArray,
        maxId: this.state.maxId + 1
      }
    })
  }

  render(){
    const {data} = this.state;

    return (
      <div className="app">
          <AppInfo />
  
          <div className="search-panel">
              <SearchPanel/>
              <AppFilter/>
          </div>
          
          <EmployeesList data={data} onDelete={this.deleteItem}/>
          <EmployeesAddForm onAdd={this.onAdd}/>

      </div>
    )
  }
  
}

export default App;
