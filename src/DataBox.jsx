import React, {Component} from 'react'
import './DataBox.css'

export default class DataBox extends Component{
  render(){
    let movieList = this.props.data[this.props.currentIndex].favoriteMovies.map((movie, i) => {
      return <p className='dataLine' key={i}>{i + 1}. <span id={`changeMovie${i + 1}`}>{movie}</span></p>
    })
    return(
      <div>
        <div className="whiteBox">
          <div className='topWhiteBox'>
            <h1 className='number'>{this.props.currentIndex + 1}/{this.props.data.length}</h1>
          </div>
          <div className='nameBox'>
            <h1 className='name'><span id='changeFirstName'>{this.props.data[this.props.currentIndex].name.first}</span> <span id='changeLastName'>{this.props.data[this.props.currentIndex].name.last}</span></h1>
            <hr align='left'/>
            <br/>
            <p className='dataLine'><span className='bold'>From: </span><span id="changeCity">{this.props.data[this.props.currentIndex].city}</span>, <span id='changeCountry'>{this.props.data[this.props.currentIndex].country}</span></p>
            <p className='dataLine'><span className='bold'>Job Title:</span> <span id='changeTitle'>{this.props.data[this.props.currentIndex].title}</span></p>
            <p className='dataLine'><span className='bold'>Employer:</span> <span id='changeEmployer'>{this.props.data[this.props.currentIndex].employer}</span></p>
            <br/>
            <p className='dataLine'><span className='bold'>Favorite Movies:</span></p>
            <div className='movieList'>
              {movieList}
            </div>
          </div>
        </div>
        <div className='buttons'>
          <button onClick={() => this.props.decrementIndex(this.props.currentIndex)} className='previous'><span>&#60;</span> Previous</button>
            <div className='blueButtons'>
              <button onClick={() => this.props.editUser(this.props.currentIndex, document.getElementById('editSave').innerText)} id='editSave'>Edit</button>
              <button onClick={() => this.props.delete(this.props.currentIndex)} className='edit'>Delete</button>
              <button onClick={() => this.props.newUser(this.props.currentIndex, document.getElementById('editSave').innerText)} className='edit'>New</button>
            </div>
          <button onClick={() => this.props.incrementIndex(this.props.currentIndex)} className='previous next'>Next <span>&#62;</span></button>
        </div>
      </div>
    )
  }
}