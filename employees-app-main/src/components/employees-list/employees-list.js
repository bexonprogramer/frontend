import { Component } from "react";

import EmployeesListItem from "../employees-list-item/employees-list-item";

import './employees-list.css';

class EmployeesList extends Component{

    render(){
        const { data, onChangeIncrease, onDelete } = this.props

        let arr = data.map((employ) => {
            let { id, name, salary, increase } = employ
            
            return <EmployeesListItem 
                        id={id} 
                        key={id}
                        name={name} 
                        salary={salary} 
                        increase={increase}
                        onChangeIncrease={(id, incr) => onChangeIncrease(id, incr)}
                        onDelete={(id) => onDelete(id)}
                    />
        })

        return (
            <ul className="app-list list-group">
                {arr}
            </ul>
        )
   }
}

export default EmployeesList;