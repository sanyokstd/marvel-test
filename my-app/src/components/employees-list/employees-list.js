import EmployeesListItem from "../employees-list-item/employees-list-item";

import './employees-list.css';

const EmployeesList = ({data, onDelete, onToggleProp,salaryUpdate}) => {
    
    if(data.length < 1){
        return (
            <div>Не найдено</div>
        )
    }
    const elements = data.map(item => {
        const {id, ...itemProps} = item
        return (
            <EmployeesListItem key={id} {...itemProps} 
                onDelete={() => onDelete(id)}
                onToggleProp={(e) => onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))}
                salaryUpdate={(e) => salaryUpdate(id, e.target.value.split('$')[0])}
            />
        )
    })

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default EmployeesList;