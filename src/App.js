import HeaderComponent from "./components/HeaderComponent";
import InputComponent from "./components/InputComponent";
import NavbarComponent from "./components/NavbarComponent";
import PhotoComponent from "./components/PhotoComponent";
import React, { Component } from 'react'
import {API_URL} from './utils/constants'
import axios from 'axios' 
import './App.css'

export default class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       pictures: [],
       indexValue: 0,
       textInput: 'cats'
    }
  }

  componentDidMount(){
    this.ReloadImages()
  }

  ReloadImages = () => {
    axios.get(API_URL+"api/photo/findtag/?tag="+this.state.textInput)
      .then(res => {
        let picArray = res.data.photos.photo.map((pic) => {
          var srcPath = 'https://farm'+pic.farm+'.staticflickr.com/'+pic.server+'/'+pic.id+'_'+pic.secret+'.jpg';
          return(
            <img alt="cat" className="pictureClass" src={srcPath}></img>
          )
        })
        this.setState({ pictures: picArray });
      })
      .catch(error => {
        console.log(error)
      })

  }

  HandleChange = (e) => {
    this.setState({textInput: e.target.value})
  }

  Delay = (function(){
    var timer = 0;
    return function(callback, ms){
      clearTimeout(timer)
      timer = setTimeout(callback, ms)
    }
  })();

  NextHandler = () => {
    var currentIndex = this.state.indexValue
    if(currentIndex === 90){
      currentIndex = 0;
    }else{
      currentIndex++;
    }
    this.setState({indexValue: currentIndex})
  }

  PrevHandler = () => {
    var currentIndex = this.state.indexValue
    if(currentIndex === 0){
      currentIndex = 90
    }else{
      currentIndex--;
    }
    this.setState({indexValue: currentIndex})
  }
  
  render() {
    const {pictures} = this.state
    return (
      <div className="App">
        <HeaderComponent/>
        <p className="App-intro">
          <div>
            Picture #{this.state.indexValue}
          </div>
          {this.state.pictures[this.state.indexValue]}
        </p>
        <p>
          <input className="textInput" 
          onChange={this.HandleChange}
          onKeyUp={() => this.Delay(function(){
            this.ReloadImages()
          }.bind(this),1000)}></input>
        </p>
        <div>
          <button onClick={this.PrevHandler}>Prev</button>&nbsp;
          <button onClick={this.NextHandler}>Next</button>
        </div>
      </div>
    )
  }
}
