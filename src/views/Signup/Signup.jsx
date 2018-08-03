import React from "react";
// core components
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import Quote from "components/Typography/Quote.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";

class Signup extends React.Component {

    constructor(props){
        super()
        this.state = {
          rut:'',
          rut_error : '',
          nombre:'',
          nombre_error : '',
          apellido:'',
          apellido_error:'',
          correo:'',
          correo_error:'',
          contrasenia:'',
          contrasenia_error:'',
          localidad:'Concepcion',
          localidad_error:''
    
        }
        this.validar2=this.validar2.bind(this);
        
    }

    validar2(){
        var flag=true;
        console.log("addd");
        this.setState({rut_error:'', nombre_error:'',apellido_error:'',correo_error:'',contrasenia_error:'',localidad_error:''}); 
        
                   
    
    
        if(this.state.rut===''){
          flag=false;
          this.setState({rut_error:'Campo requerido'}); 
        }
        if(this.state.nombre===''){
          flag=false;
          this.setState({nombre_error:'Campo requerido'}); 
        }
        if(this.state.apellido===''){
          flag=false;
          this.setState({apellido_error:'Campo requerido'}); 
        }
        if(this.state.correo===''){
          flag=false;
          this.setState({correo_error:'Campo requerido'}); 
        }
        if(this.state.contrasenia===''){
          flag=false;
          this.setState({contrasenia_error:'Campo requerido'}); 
        }
        if(this.state.localidad===''){
          flag=false;
          this.setState({localidad_error:'Campo requerido'}); 
        }
        return flag;
    }

    handleChange(e) {
        this.setState({[e.target.name]: e.target.value})
    }

    registrar(){

        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange= ()=> {

           if(xmlhttp.readyState === 4 && xmlhttp.status === 200){

               var usuario = xmlhttp.responseText; 
              if(usuario=="true"){
                console.log("exito");
              }
            
           }
        }        
           // xmlhttp.open("POST","../server/registro.php",true);
        xmlhttp.open("POST","http://localhost/build/server/registro.php",true);
         xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xmlhttp.send("rut="+this.state.rut+"&nombre="+this.state.nombre+"&apellido="+this.state.apellido+"&email="+this.state.correo+"&contrasenia="+this.state.contrasenia+"&localidad="+this.state.localidad);

     
      
       

    }

    validar(){
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange= ()=> {

        if(xmlhttp.readyState === 4 && xmlhttp.status === 200){

            var usuario = xmlhttp.responseText; 
            console.log(usuario);
            
           if(usuario==="false" ){
             
            this.setState({rut_error:'Rut Existente'});
             
           }else{
             
             if(this.validar2()===true){
                
                  this.registrar(); 
              }else{
                 
              }
           }
        }
     }       
        // xmlhttp.open("POST","../server/checkrut.php",true);
     xmlhttp.open("POST","http://localhost/build/server/checkrut.php",true);
      xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
     xmlhttp.send("rut="+this.state.rut);

  
    }

  render() {
    return(
        <div>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={4}>
                <Card>
                    <CardHeader color="primary" >Registrar</CardHeader>
                    <CardBody>
                    <Quote
                        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante."
                        author="Someone famous in Source Title"
                    />
                    </CardBody>
                </Card>
            </GridItem>
            </GridContainer>
        </div>
       
    );
  }


}
export default Signup;