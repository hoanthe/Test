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
      ojWork: {
        bg: "14:00"
      }
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

  onShow = () => {

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
                <button onClick = {this.onShow()} 
                        type="button" 
                        className="btn btn-primary box-btn"
                        id = "1"
                >Ca 1</button>
                <button onClick = {this.onShow()} 
                        type="button" 
                        className="btn btn-primary box-btn"
                        id = "2"
                >Ca 2</button>
                <button onClick = {this.onShow()} 
                        type="button" 
                        className="btn btn-primary box-btn"
                        id = "3"
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

                  <p> 14:00 - 18:30　メールを監視・対応しながら、資料確認、。</p>

                  <p> 18:30 - 19:00　休憩、食事。 　</p>

                  <p>19:00 - 22:30　メールを監視・対応しながら、資料確認、。</p>

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
