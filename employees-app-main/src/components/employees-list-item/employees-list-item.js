import { Component } from 'react';

import './employees-list-item.css';

class EmployeesListItem extends Component {
    constructor(props){
        super(props)
        this.state = {
            like: false,
            increase: false
        }
    }

    changeLikeState = () => {
        this.setState({ like: !this.state.like })
    }
    changeIncreaseState = () => {
        this.setState(({ increase }) => {
            return { increase: !increase }
        })
        this.props.onChangeIncrease(this.props.id, !this.state.increase)
    }

    render(){
        const { id, name, salary, onDelete } = this.props

        let clazz = 'list-group-item d-flex justify-content-between'

        if(this.state.like){
            clazz += ' like'
        }

        if(this.state.increase){
            clazz += ' increase'
        }

        return (
            <li className={clazz}>
                <span onClick={this.changeIncreaseState} className="list-group-item-label">{name}</span>
                <input type="text" className="list-group-item-input" defaultValue={salary} readOnly/>
                <div className='d-flex justify-content-center align-items-center'>
                    <button type="button"
                        className="btn-cookie btn-sm"
                        onClick={this.changeLikeState}
                        >
                        <i className="fas fa-cookie"></i>
                    </button>
                    <button type="button"
                            className="btn-trash btn-sm "
                            onClick={() => onDelete(id)}        
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