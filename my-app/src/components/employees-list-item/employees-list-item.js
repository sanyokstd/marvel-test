import { Component } from 'react';
import './employees-list-item.css';

class EmployeesListItem extends Component{
    constructor(props){
        super(props)
        this.state = {
            increase: false,
            like: false
        }
    }

    onIncreas = () => {
        this.setState(({increase}) => ({
            increase: !increase
        }))
    }

    toggleLike = () => {
        this.setState(({like}) => ({
            like: !like
        }))
    }

    render(){
        const {name, salary, onDelete} = this.props
        const {increase, like} = this.state

        let classNames = "list-group-item d-flex justify-content-between";
        if(increase){
            classNames += " increase";
        }
        if(like){
            classNames += " like";
        }
    
        return (
            <li className={classNames}>
                <span onClick={this.toggleLike} className="list-group-item-label">{name}</span>
                <input type="text" className="list-group-item-input" defaultValue={salary + '$'}/>
                <div className='d-flex justify-content-center align-items-center'>
                    <button type="button"
                        onClick={this.onIncreas}
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
}

export default EmployeesListItem;