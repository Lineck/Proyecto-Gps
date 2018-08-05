import React, { Component } from 'react';

// import Footer from './components/Footer/Footer';
import LoginPage from './views/LoginPage/LoginPage';
// import Home from './components/Home/Home';
 import RegistroPage from './views/RegistroPage/RegistroPage';
import HomePage from './views/HomePage/HomePage';


 
class App extends Component {
  
  constructor(props){
    super(props)
    this.state = {
      logg: 0
    }
    this.SetLog = this.SetLog.bind(this);
  }

  SetLog(result){
    this.setState({logg:result})
    console.log(this.state.logg)

  }



  render() {
    var {logg} = this.state
    return (
      
     
      <div className='row'>

     
    
      { logg == 0? <LoginPage SetLog={this.SetLog}/> :
          logg == 1? <HomePage SetLog={this.SetLog}/> :
        logg == 2? <RegistroPage SetLog={this.SetLog}/> :""}
    
       
      </div>
      
     
      
    );
  }
}

export default App;
