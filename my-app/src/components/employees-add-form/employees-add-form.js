import { Component } from 'react';
import './employees-add-form.css';

class EmployeesAddForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            name: '',
            salary: '',
        }
    }

    onValueChange = (e) =>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit = (e) =>{
        e.preventDefault();
        this.props.onAdd(this.state.name, this.state.salary)
    }

    render(){
        const {name, salary} = this.state 

        return (
            <div className="app-add-form">
                <h3>Добавьте нового сотрудника</h3>
                <form
                    onSubmit={this.handleSubmit}
                    className="add-form d-flex">
                    <input type="text"
                        name="name"
                        onChange={this.onValueChange}
                        className="form-control new-post-label"
                        placeholder="Как его зовут?"
                        value={name} 
                        />
                    <input type="number"
                        name="salary"
                        onChange={this.onValueChange}
                        className="form-control new-post-label"
                        placeholder="З/П в $?"
                        value={salary} 
                        />
    
                    <button type="submit"
                            className="btn btn-outline-light">Добавить</button>
                </form>
            </div>
        )
    }
}

export default EmployeesAddForm;