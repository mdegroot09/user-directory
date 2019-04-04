import React, { Component } from 'react';
import './App.css';
import Header from './Header'
import data from './data'
import DataBox from './DataBox'

class App extends Component {
  constructor(){
    super()
    this.state = {
      data: data
    }
  }
  
  delete = (currentIndex) => {
    let data = this.state.data
    data.splice(currentIndex,1);
    if (currentIndex === this.state.data.length){
      this.setState({currentIndex: 0})
    }
    this.setState({data: data})
  }

  render() {
    return (
      <div className="App">
        <Header/>
        <DataBox 
          data={this.state.data} 
          delete={this.delete}/>
      </div>
    );
  }
}

export default App;
