import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      status: true,
      num : 0,
      dataTest: ['12345','abc','xyz'],
      divStyle : {color: 'blue'}
    };
    this.onChangeText = this.onChangeText.bind();
    this.onChangeValue = this.onChangeValue.bind()
  }

  onChangeValue = (event) => {

    const divStyleFirst = {
      color: 'blue',
      textDecoration: 'line-through'
    };

    const divStyleSec = {
      color: 'black',
      fontStyle: 'normal'
    };


    if (event.target.checked) {
      this.setState({
        divStyle : divStyleFirst
      })
    }else{
      this.setState({
        divStyle : divStyleSec
      })
    }
  }

  onChangeText = (event) => {
    var x = event.target.value
    if (event.key !== 'Enter') {
      x += x
    }else
    {this.setState({
      num : this.state.dataTest.push(x)
    })
    event.target.value = ""
  }
  }

  render(){
  
  let arr = this.state.dataTest.map((arr1, index) => {
    return(
      <div className="checkbox" key={index} >
        <label >
          <input type="checkbox" value="" ></input>
          <p style = {this.state.divStyle} onClick = {this.onChangeValue} >{arr1}</p>
        </label>
    </div>
    )
  })
  return (
    <div>

      
      <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
        
      </div>
      
    <div className="panel panel-default col-xs-8 col-sm-8 col-md-8 col-lg-8">
        <div className="panel-body todo">
          TO DO
        </div>
        <div className="panel-footer">
          
          <div className="input-group">
            <input type="text" className="form-control" 
                                id="exampleInputAmount" 
                                placeholder="Search"
                                onKeyPress = {this.onChangeText}
                                >
            </input> 
            <span className="input-group-btn">
              <button type="button" 
                      className="btn btn-default"
                      onClick= {this.onChangeValue}>
                        Go!
                      </button>
            </span>
          </div>

          {arr}

        </div>
    </div>

          
    <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
        
        </div>

    </div>
    
  );
  }
}

export default App;
