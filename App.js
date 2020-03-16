import React, { Component } from 'react';
import './App.css';

class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      status : true,
      data: [
        "abc",
        "xyz"
      ]
    }

    this.onChangeText = this.onChangeText.bind()
  }

  onChangeText(event){
    let value = event.target.value
    this.setState({
      data : this.data.push(value)
    })
    console.log(this.data)
  }


  render(){
    return(

      <div>
        
        <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
          
        </div>
      
          <div className="box panel panel-info col-xs-6 col-sm-6 col-md-6 col-lg-6">
              <div className="panel-heading">
                <h3 className="panel-title">TO DO LIST</h3>
              </div>
              <div className="panel-body box-main">
                
                {/* INPUT */}

                <input type="email" name=""className="form-control" value="" onChange = {this.onChangeText}>
                </input>&nbsp;
                
                <div className="checkbox">
                  <label>
                    <input type="checkbox" value=""></input>
                    Checkbox
                  </label>

                  {/* INPUT */}

                </div>
                
              </div>
          </div>

          <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
          
          </div>
      
      </div>
    )
  }
}

export default App;
