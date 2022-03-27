import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      data: [
        {name: 'Name 1', salary: 1000, increase: false, rise: true, id:1},
        {name: 'Name 2', salary: 2000, increase: true, rise: false, id:2},
        {name: 'Name 3', salary: 3000, increase: false, rise: false, id:3},
      ],
      term: "",
      filterType: "all",
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

  addItem = (name, salary) => {
    this.setState(({data}) => {
      const newItem = {
        name: name,
        salary: salary,
        increase: false,
        rise: false,
        id:this.state.maxId
      }

      const newArray = [ ...data, newItem];
      return{
        data: newArray,
        maxId: this.state.maxId + 1
      }
    })
  }

  onToggleProp = (id, prop) => {
    this.setState(({data}) =>{
      return{
        data: data.map(item => {
          if(item.id == id){
            return {...item, [prop]: !item[prop]}
          }
          return item
        })
      }
    })
  }

  searchEmp = (items, term) =>{
    if(term.length < 1){
      return items
    }

    return items.filter(item => {
      return item.name.indexOf(term) > -1
    })
  }

  onUpdateTerm = (term) =>{
    this.setState({term: term})
  }

  filterUpdateType = (type) =>{
    this.setState({filterType: type})
  }

  onFilterEmp = (visibleData) =>{
    if(this.state.filterType === 'all'){
      return visibleData
    }
    else if(this.state.filterType === 'rise'){
      visibleData = visibleData.filter(item => item.rise == true)
      return visibleData;
    }
    else if(this.state.filterType === 'salary'){
      visibleData = visibleData.filter(item => item.salary > 1000)
      return visibleData;
    }
    else{
      return visibleData
    }
  }

  salaryUpdate = (id, newsalary) => {
    this.setState(({data}) =>{
      return{
        data: data.map(item => {
          if(item.id == id){
            return {...item, salary: newsalary}
          }
          return item
        })
      }
    })
    console.log(id,newsalary)
  }

  render(){
    const {data, term} = this.state;
    const empCount = data.length
    const increaseCount = data.filter(item => item.increase).length;
    let visibleData = this.searchEmp(data, term)
    visibleData = this.onFilterEmp(visibleData)
    
    return (
      <div className="app">
          <AppInfo empCount={empCount} increaseCount={increaseCount}/>
  
          <div className="search-panel">
              <SearchPanel onUpdateTerm={this.onUpdateTerm}/>
              <AppFilter filterUpdateType={this.filterUpdateType} filterType={this.state.filterType}/>
          </div>
          
          <EmployeesList data={visibleData} onDelete={this.deleteItem} onToggleProp={this.onToggleProp} salaryUpdate={this.salaryUpdate}/>
          <EmployeesAddForm addItem={this.addItem}/>

      </div>
    )
  }
  
}

export default App;
