import React, { Component } from 'react'
import CardList from './component/cardList/CardList'
import Search from './component/search/Search'

export class Monster extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        monsters: [ ],
        searchField: '',
      }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({monsters: users}))
    }

    handleChange = (e) => {
      this.setState({searchField: e.target.value})
    } 

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonster = monsters.filter(item => item.name.toLowerCase().includes(searchField.toLowerCase().trim()) || item.email.toLowerCase().includes(searchField.toLowerCase().trim()))
    return (
      <div className='container mx-auto'>
      <h1 style={{fontFamily: 'Bigelow Rules', color: '#95dada'}} className="flex justify-center font-extrabold tracking-wide text-6xl py-2">Monsters Design</h1>
      <Search  placeholder="Search for monsters..." handleChange={this.handleChange}/> 
      <CardList monsters={filteredMonster}/>
      </div>
    )
  }
}

export default Monster