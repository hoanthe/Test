import React, { Component } from 'react';
import './App.css';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      name: "",
      first_Sec: 'first',
      number: 0,
      break_1: "",
      arr : ["06:00 - 11:00","11:00 - 11:30","11:30 - 14:30"]
    }
  }

  onChangeWork (event){
      let target = event.target
      let name = target.name
      let value = target.value
      this.setState({
        [name] : value
      })
  }

  onInput(event){
    let target = event.target
    let value = target.value
    this.setState({
      number : value
    })
  }

  onInputName(event){
    let target = event.target
    let value = target.value
    this.setState({
      name : value
    })
  }

  onShow(event) {
    let ar1 = ["06:00 - 11:00","11:00 - 11:30","11:30 - 14:30"]
    let ar1_2 = ["06:00 - 11:30","11:30 - 12:00","12:00 - 14:30"]

    let ar2 = ["14:00 - 18:00","18:00 - 18:30","18:30 - 22:30"]
    let ar2_2 = ["14:00 - 18:30","18:30 - 19:00","19:00 - 22:30"]

    let ar3 = ["22:00 - 02:00","02:00 - 02:30","02:30 - 06:30"]
    let ar3_2 = ["22:00 - 02:30","02:30 - 03:00","03:00 - 06:30"]

    let name = event.target.name
    let first_Sec = this.state.first_Sec

    console.log(name)
    console.log(name)


    if (first_Sec === "first") {
      if (name === "1") {
        this.setState({
          arr: ar1
        })
      }
      if (name === "2") {
        this.setState({
          arr: ar2
        })
      }
      if (name === "3") {
        this.setState({
          arr: ar3
        })
      }
    }
    if (first_Sec === "second") {
      if (name === "1") {
        this.setState({
          arr: ar1_2
        })
      }
      if (name === "2") {
        this.setState({
          arr: ar2_2
        })

      }
      if (name === "3") {
        this.setState({
          arr: ar3_2
        })
      }
    }

  }

  render(){

    console.log(this.state.first_Sec)

    return(            
    <>     
      {/* Mục tùy chọn */}
      <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
        <div className="panel panel-info">
          <div className="panel-heading">
            <h3 className="panel-title">Mail Server</h3>
          </div>
          <div className="panel-body">

          <div className="input-group box">
              <div className="input-group-addon"><span>Tên</span></div>
              <input type="text" 
                    onChange = {(event) => this.onInputName(event)}
                    className="form-control" 
                    id="exampleInputAmountName" 
                    placeholder="Name"/>
            </div>

            <div className="input-group box">
              <div className="input-group-addon"><span>Số lượng lỗi</span></div>
              <input type="text" 
                    onChange = {(event) => this.onInput(event)}
                    className="form-control" 
                    id="exampleInputAmount" 
                    placeholder="Number"/>
            </div>

            
            <div className="radio">
              <label>
                <input type="radio" 
                      name="first_Sec" 
                      id="input" 
                      value="first" 
                      onChange = { (event) => this.onChangeWork(event)}
                      // Minh họa ví dụ cho dễ hiểu checked đang ở đâu
                      checked={this.state.first_Sec === 'first'}/> 
                Mail Trước
              </label><br/>
              <label>
              <input type="radio" 
                      name="first_Sec" 
                      id="input" 
                      value="second" 
                      onChange = { (event) => this.onChangeWork(event)}
                      // Minh họa ví dụ cho dễ hiểu checked đang ở đâu
                      checked={this.state.first_Sec === 'second'}/>
                Mail Sau
              </label>
            </div>
            
            {/* <select  id="input" className="form-control" onChange = { (event) => this.onChangeWork(event)} >
              <option name="first_Sec" value="first" >-- Mail Trước --</option>
              <option name="first_Sec" value="second" >-- Mail Sau --</option>
            </select> */}
            
            
            
            
            <div className = "box">
                <button onClick = {(event) => this.onShow(event)} 
                        type="button" 
                        className="btn btn-primary box-btn"
                        name = "1"
                >Ca 1</button>
                <button onClick = {(event) => this.onShow(event)} 
                        type="button" 
                        className="btn btn-primary box-btn"
                        name = "2"
                >Ca 2</button>
                <button onClick = {(event) => this.onShow(event)} 
                        type="button" 
                        className="btn btn-primary box-btn"
                        name = "3"
                >Ca 3</button>
            </div>
          </div>
      </div>
      </div>

      {/* Nội dung hiển thị */}

      <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
          
          
          <div className="panel panel-info">
              <div className="panel-heading">
                <h3 className="panel-title">Tiêu đề</h3>
              </div>
              <div className="panel-body">
                <p>作業日報 {this.state.name} 2020/04/10</p>
              </div>
          </div>
          
          
          <div className="panel panel-info">
              <div className="panel-heading">
                <h3 className="panel-title">Nội Dung Mail</h3>
              </div>
              <div className="panel-body">
                  <p></p>
                  <p>関連各位</p>

                  <p>・勤務日時　04月10日 14:00 - 22:30</p>

                  <p>　作業内容</p>

                  <p> {this.state.arr[0]}　メールを監視・対応しながら、資料確認、。</p>

                  <p> {this.state.arr[1]}　休憩、食事。 　</p>

                  <p> {this.state.arr[2]}　メールを監視・対応しながら、資料確認、。</p>

                  <p>アラート対応 :  {this.state.number} Errors。</p>
                  <p>特にございません。</p>

                  <p>以上です</p>
                  <p>よろしくお願いします。</p>
                  <p>--------------------------------------------------------------- </p>                
              </div>
          </div>
          
      </div>

    </>
        
    )
  }
}

export default App;
