import React, { Component } from 'react';

// import Footer from './components/Footer/Footer';
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
      logg: 1
    }
    this.IniciarSesion=this.IniciarSesion.bind(this);
    this.cerrarSesion=this.cerrarSesion.bind(this);
    this.SetLog = this.SetLog.bind(this);
  }

  SetLog(result){
    this.setState({logg:result})
    console.log(this.state.logg)

  }
  cerrarSesion(){
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            this.setState({
                nombre: "",
                rut: ""
            });

            console.log("usuario: "+this.state.nombre);
            
        }else{
            console.log(xmlhttp.status);
            console.log(xmlhttp.readyState);
        }
    }.bind(this);
    xmlhttp.open("POST","http://localhost/build/server/closeSession.php",true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send();
  }
  IniciarSesion(){
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            var $user = JSON.parse(xmlhttp.responseText);
            console.log("usuario: "+$user['nombre']);
            this.setState({
                nombre: $user['nombre'],
                rut: $user["rut"]
            });
            
        }else{
            console.log(xmlhttp.status);
            console.log(xmlhttp.readyState);
        }
    }.bind(this);
    xmlhttp.open("POST","http://localhost/build/server/initSession.php",true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send();
  }



  render() {
    var {logg} = this.state
    return (
      
     
      <div className='row'>

     
    
      { logg == 0? <LoginPage IniciarSesion={this.IniciarSesion}
                              SetLog={this.SetLog}
                              CerrarSesion={this.cerrarSesion}/> :
        logg == 1? <Validacion SetLog={this.SetLog}/> :
        logg == 3? <HomePage SetLog={this.SetLog}/> :
        logg == 2? <RegistroPage SetLog={this.SetLog}/> :""}
    
       
      </div>
      
     
      
    );
  }
}

export default App;
