import { Component } from 'react';
import './employees-list-item.css';

const EmployeesListItem = (props) =>{
    
    const {name, increase, salary, rise, onDelete, onToggleProp,salaryUpdate} = props

    let classNames = "list-group-item d-flex justify-content-between";
    if(increase){
        classNames += " increase";
    }
    if(rise){
        classNames += " like";
    }

    return (
        <li className={classNames}>
            <span onClick={onToggleProp} data-toggle="rise" className="list-group-item-label">{name}</span>
            <input type="text" className="list-group-item-input" defaultValue={salary + '$'} onChange={salaryUpdate}/>
            <div className='d-flex justify-content-center align-items-center'>
                <button type="button"
                    onClick={onToggleProp} 
                    data-toggle="increase"
                    className="btn-cookie btn-sm ">
                    <i className="fas fa-cookie"></i>
                </button>

                <button type="button"
                        className="btn-trash btn-sm"
                        onClick={onDelete}
                        >
                    <i className="fas fa-trash"></i>
                </button>
                <i className="fas fa-star"></i>
            </div>
        </li>
    )
    
}

export default EmployeesListItem;