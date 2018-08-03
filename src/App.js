import React, { Component } from 'react';

// import Footer from './components/Footer/Footer';
import LoginPage from './views/LoginPage/LoginPage';
// import Home from './components/Home/Home';
 import Signup from './views/Signup/Signup';
import Home from './views/Home/Home';


 
class App extends Component {
  
  constructor(props){
    super(props)
    this.state = {
      logg: 1
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
          logg == 1? <Home/> :
        logg == 2? <Signup/> :""}
    
       
      </div>
      
     
      
    );
  }
}

export default App;
