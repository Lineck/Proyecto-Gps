import React, { Component } from 'react';


import LoginPage from './views/LoginPage/LoginPage';
import Validacion from './views/Validacion/Validacion';
import RegistroPage from './views/RegistroPage/RegistroPage';
import HomePage from './views/HomePage/HomePage';


 
class App extends Component {
  
  constructor(props){
    super(props)
    this.state = {
      rut:'',
      nombre:'',
      logg: 0
    }
    this.IniciarSesion=this.IniciarSesion.bind(this);
    this.cerrarSesion=this.cerrarSesion.bind(this);
    this.SetLog = this.SetLog.bind(this);
  }

  SetLog(result){
    this.setState({logg:result})
  }

  cerrarSesion(){


    fetch("http://localhost/build/server/closeSession.php")
    // fetch("../server/closeSession.php")
    .then(()=>{
        this.setState({
          rut:"",
          nombre:""
        })
    })
  }
  IniciarSesion(){

    fetch("http://localhost/build/server/initSession.php")
    // fetch("../server/initSession.php")
    .then((response) =>{
      return response.json()
    }).then((myjson)=>this.setState({
                                    nombre: myjson["nombre"],
                                    rut:myjson["rut"],
                                    credentials: 'include'
                                    })
            )
  }



  render() {
    var {logg} = this.state
    return (
      
     
      <div className='row'>

     
    
      { logg === 0? <LoginPage IniciarSesion={this.IniciarSesion}
                              SetLog={this.SetLog}
                              CerrarSesion={this.cerrarSesion}/> :
        logg === 1? <Validacion SetLog={this.SetLog}/> :
        logg === 2? <RegistroPage SetLog={this.SetLog}/> :
        logg === 3? <HomePage SetLog={this.SetLog}/> :""}
    
       
      </div>
      
     
      
    );
  }
}

export default App;
