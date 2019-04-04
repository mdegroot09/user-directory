import React, {Component} from 'react'
import './DataBox.css'

export default class DataBox extends Component{
  constructor(props){
    super(props)
    this.state = {
      currentIndex: 0
    }
  }

  incrementIndex = (val) => {
    if (val + 1 < this.props.data.length) {
      this.setState({currentIndex: val + 1})
    } else {
      this.setState({currentIndex: 0})
    }
  }
  
  decrementIndex = (val) => {
    if (val - 1 >= 0) {
      this.setState({currentIndex: val - 1})
    } else {
      this.setState({currentIndex: this.props.data.length - 1})
    }
  }

  render(){
    let movieList = this.props.data[this.state.currentIndex].favoriteMovies.map((movie, i) => {
        return <p className='dataLine' key={i}>{i + 1}. {movie}</p>
      })
    return(
      <div>
        <div className="whiteBox">
          <div className='topWhiteBox'>
            <h1 className='number'>{this.state.currentIndex + 1}/{this.props.data.length}</h1>
          </div>
          <div className='nameBox'>
            <h1 className='name'>{this.props.data[this.state.currentIndex].name.first} {this.props.data[this.state.currentIndex].name.last}</h1>
            <hr align='left'/>
            <br/>
            <p className='dataLine'><span className='bold'>From: </span>{this.props.data[this.state.currentIndex].city}, {this.props.data[this.state.currentIndex].country}</p>
            <p className='dataLine'><span className='bold'>Job Title:</span> {this.props.data[this.state.currentIndex].title}</p>
            <p className='dataLine'><span className='bold'>Employer:</span> {this.props.data[this.state.currentIndex].employer}</p>
            <br/>
            <p className='dataLine'><span className='bold'>Favorite Movies:</span></p>
            <div className='movieList'>
              {movieList}
            </div>
          </div>
        </div>
        <div className='buttons'>
          <button onClick={() => this.decrementIndex(this.state.currentIndex)} className='previous'><span>&#60;</span> Previous</button>
            <div className='blueButtons'>
              <button className='edit'>Edit</button>
              <button onClick={() => this.props.delete(this.state.currentIndex)} className='edit'>Delete</button>
              <button className='edit'>New</button>
            </div>
          <button onClick={() => this.incrementIndex(this.state.currentIndex)} className='previous next'>Next <span>&#62;</span></button>
        </div>
      </div>
    )
  }
}