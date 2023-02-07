import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.scss';

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      data: [
        { 
          id: 1,
          name: 'Abdumalik Baxriddinov',
          salary: '8000$',
          increase: false
        },
        {
          id: 2,
          name: 'Firdavs Karimov',
          salary: '2000$',
          increase: false
        },
        {
          id: 3,
          name: 'Firdavs Eminov',
          salary: '2000$',
          increase: false
        },
        {
          id: 4,
          name: 'Bexruz Samadov',
          salary: '5000$',
          increase: false
        },
        {
          id:5,
          name: 'Sardor Asrorov',
          salary: '5000$',
          increase: false
        },
        {
          id: 6,
          name: 'Javohir Shodmonov',
          salary: '5000$',
          increase: false
        }
      ]
    }
  }

  onChangeIncrease = (id, incr) => {
    this.setState(( { data } ) => {
      let newData = data.map((item) => {
        if(item.id === id){
         item.increase = incr 
        }
        return item
      })

      return {
        data: [...newData]
      }
    })
  }

  onDelete = (id) => {
    this.setState(({ data }) => {
      let newData = data.filter(item => item.id !== id)
      return {
        data: [...newData]
      }
    })
  }

  render(){
    const { data } = this.state
    const filterData = data.filter((item) => item.increase).length
    return (
      <div className="app">
          <AppInfo employeesCount={data.length} filterData={filterData}/>
          <div className="search-panel">
              <SearchPanel onClick={() => alert('msg')}/>
              <AppFilter/>
          </div>
          
          <EmployeesList 
            data={data} 
            onChangeIncrease={this.onChangeIncrease}
            onDelete={this.onDelete}
          />
          <EmployeesAddForm/>
      </div>
    );
  }
}

export default App;
