import React, { Component } from 'react';
import './App.css';
import Header from './Header'
import data from './data'
import DataBox from './DataBox'

class App extends Component {
  constructor(){
    super()
    this.state = {
      data: data,
      currentIndex: 0
    }
  }
  
  delete = (currentIndex) => {
    let data = this.state.data
    data.splice(currentIndex,1);
    if (currentIndex === data.length){
      this.setState({currentIndex: 0})
    }
    if (data.length === 0){
      data.push({
        id: 'Nada',
        name: { first: 'No Current Users', last: ''},
        city: 'Notown',
        country: 'Nowhere',
        employer: 'Nobody',
        title: 'Nothing',
        favoriteMovies: ['Devils', 'Wear', 'Nada']
      })
    }
    this.setState({data: data})
  }

  editUser = (currentIndex, editOrSave) => {
    if (editOrSave === 'Edit'){
      document.getElementById('changeFirstName').innerHTML = `<input id='inputFirstName' value='${this.state.data[currentIndex].name.first}'>`
      document.getElementById('changeLastName').innerHTML = `<input id='inputLastName' value='${this.state.data[currentIndex].name.last}'>`
      document.getElementById('changeCity').innerHTML = `<input id='inputCity' value='${this.state.data[currentIndex].city}'>`
      document.getElementById('changeCountry').innerHTML = `<input id='inputCountry' value='${this.state.data[currentIndex].country}'>`
      document.getElementById('changeTitle').innerHTML = `<input id='inputTitle' value='${this.state.data[currentIndex].title}'>`
      document.getElementById('changeEmployer').innerHTML = `<input id='inputEmployer' value='${this.state.data[currentIndex].employer}'>`
      document.getElementById('changeMovie1').innerHTML = `<input id='inputMovie1' value='${this.state.data[currentIndex].favoriteMovies[0]}'>`
      document.getElementById('changeMovie2').innerHTML = `<input id='inputMovie2' value='${this.state.data[currentIndex].favoriteMovies[1]}'>`
      document.getElementById('changeMovie3').innerHTML = `<input id='inputMovie3' value='${this.state.data[currentIndex].favoriteMovies[2]}'>`
      document.getElementById('editSave').innerHTML = `<span className='edit'>Save</span>`
    } else {
      let data = this.state.data
      data[currentIndex].name.first = document.getElementById('inputFirstName').value
      document.getElementById('changeFirstName').innerHTML = `${data[currentIndex].name.first}`
      data[currentIndex].name.last = document.getElementById('inputLastName').value
      document.getElementById('changeLastName').innerHTML = `${data[currentIndex].name.last}`
      data[currentIndex].city = document.getElementById('inputCity').value
      document.getElementById('changeCity').innerHTML = `${data[currentIndex].city}`
      data[currentIndex].country = document.getElementById('inputCountry').value
      document.getElementById('changeCountry').innerHTML = `${data[currentIndex].country}`
      data[currentIndex].title = document.getElementById('inputTitle').value
      document.getElementById('changeTitle').innerHTML = `${data[currentIndex].title}`
      data[currentIndex].employer = document.getElementById('inputEmployer').value
      document.getElementById('changeEmployer').innerHTML = `${data[currentIndex].employer}`
      data[currentIndex].favoriteMovies[0] = document.getElementById('inputMovie1').value
      document.getElementById('changeMovie1').innerHTML = `${data[currentIndex].favoriteMovies[0]}`
      data[currentIndex].favoriteMovies[1] = document.getElementById('inputMovie2').value
      document.getElementById('changeMovie2').innerHTML = `${data[currentIndex].favoriteMovies[1]}`
      data[currentIndex].favoriteMovies[2] = document.getElementById('inputMovie3').value
      document.getElementById('changeMovie3').innerHTML = `${data[currentIndex].favoriteMovies[2]}`
      document.getElementById('editSave').innerHTML = `<span className='edit'>Edit</span>`
      console.log('data:',data[currentIndex])
    }
    this.setState({data: data})
  }

  newUser = (currentIndex, editOrSave) => {
    if(editOrSave !== 'Save'){
      let data = this.state.data
      let tempUser = {
        id: 'new',
        name: { first: '', last: ''},
        city: '',
        country: '',
        employer: '',
        title: '',
        favoriteMovies: ['', '', '']
      }
      data.splice(currentIndex,0,tempUser)
      this.setState({data: data})
    }
  }

  incrementIndex = (val) => {
    if (val + 1 < this.state.data.length) {
      this.setState({currentIndex: val + 1})
    } else {
      this.setState({currentIndex: 0})
    }
  }

  decrementIndex = (val) => {
    if (val - 1 >= 0) {
      this.setState({currentIndex: val - 1})
    } else {
      this.setState({currentIndex: this.state.data.length - 1})
    }
  }

  render() {
    return (
      <div className="App">
        <Header/>
        <DataBox 
          data={this.state.data} 
          delete={this.delete}
          incrementIndex={this.incrementIndex}
          decrementIndex={this.decrementIndex}  
          currentIndex={this.state.currentIndex}
          newUser={this.newUser}
          editUser={this.editUser}
        />
      </div>
    );
  }
}

export default App;
