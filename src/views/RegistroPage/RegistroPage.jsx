import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import { createMuiTheme,MuiThemeProvider } from '@material-ui/core/styles';
import InfoOutline from "@material-ui/icons/InfoOutline";
import SnackbarContent from "components/Snackbar/SnackbarContent.jsx";
import purple from '@material-ui/core/colors/purple';
import CustomInput from "components/CustomInput/CustomInput.jsx";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";

// core 
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Footer from "components/Footer/Footer.jsx";
import Card from "components/Card/Card.jsx"
import CardHeader from "components/Card/CardHeader.jsx"
import InputLabel from "@material-ui/core/InputLabel"

const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flexGrow: 1,
    textAlign:"center"
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};
const theme = createMuiTheme({
  palette: {
    primary: purple,
    
  },
});


class RegistroPage extends React.Component {

    constructor(props){
        super(props);
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
    const { classes } = this.props;
  return (
    <div>
      <MuiThemeProvider theme={theme} >
        <AppBar color="transparent" position="static">
        <Toolbar>
          
         
          <Button onClick={() => this.props.SetLog(0)} color="inherit"> 
            <Typography   variant="title" color="inherit" className={classes.flex}>
                GrupoCold
            </Typography>
          </Button>
          
        </Toolbar>
      </AppBar>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={7}>
          <br/><br/><br/><br/>
          <Card > 
            <CardHeader className={classes.flex} color="primary" >   
              <h3>Registro</h3>
            </CardHeader>
            <br/>
            <GridContainer justify="center">
              <GridItem xs={12} sm={4} md={4} >
              <CustomInput
                  labelText="Nombre"
                  id="Nombre"
                  success={this.state.nombre != ''? true  : false}
                  error={this.state.nombre_error == ''? false : true}
                 
                  formControlProps={{
                    fullWidth: true
                    
                  }}
                  inputProps={{
                   
                    name:"nombre",
                    onChange:(e) => this.handleChange(e)
                  }}
                />
                
              </GridItem>
              <GridItem xs={12} sm={4} md={4} >
                <CustomInput
                  labelText="Apellido"
                  id="Apellido"
                  success={this.state.apellido != ''? true  : false}
                  error={this.state.apellido_error == ''? false : true}
                 
                  formControlProps={{
                    fullWidth: true
                    
                  }}
                  inputProps={{
                   
                    name:"apellido",
                    onChange:(e) => this.handleChange(e)
                  }}
                />
              </GridItem>
              </GridContainer>
              <br/>
              <GridContainer justify="center">
                <GridItem xs={12} sm={4} md={4}>
                  <CustomInput
                    labelText="Rut"
                    id="Rut"
                    success={this.state.rut != ''? true  : false}
                    error={this.state.rut_error == ''? false : true}
                  
                    formControlProps={{
                      fullWidth: true
                      
                    }}
                    inputProps={{
                    
                      name:"rut",
                      onChange:(e) => this.handleChange(e)
                    }}
                  />
                </GridItem>
              
              <GridItem xs={12} sm={4} md={4}>
                  <CustomInput
                    labelText="Correo"
                    id="Correo"
                    success={this.state.correo != ''? true  : false}
                    error={this.state.correo_error == ''? false : true}
                  
                    formControlProps={{
                      fullWidth: true
                      
                    }}
                    inputProps={{
                    
                      name:"correo",
                      onChange:(e) => this.handleChange(e)
                    }}
                  />
                </GridItem>
              </GridContainer>
              <br/>
              <GridContainer justify="center">
                <GridItem xs={12} sm={4} md={4}>
                  <CustomInput
                    labelText="Contraseña"
                    id="Contraseña"
                    
                    success={this.state.contrasenia != ''? true  : false}
                    error={this.state.contrasenia_error == ''? false : true}
                  
                    formControlProps={{
                      fullWidth: true
                      
                    }}
                    inputProps={{
                    type:"password",
                      name:"contrasenia",
                      onChange:(e) => this.handleChange(e)
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={4} md={4}>
                
                <InputLabel  htmlFor="age-helper">Ubicacion</InputLabel>
                  <Select
                    fullWidth= "true"
                    name="localidad"
                    value={this.state.localidad}
                    onChange={(e) =>this.handleChange(e)}
                      >
                        PLACEHOLDER
                        <MenuItem value='Concepcion'>Concepcion</MenuItem>
                        <MenuItem value='Coronel'>Coronel</MenuItem>
                        <MenuItem value='Chiguayante'>Chiguayante</MenuItem>
                        <MenuItem value='Florida'>Florida</MenuItem>
                        <MenuItem value='Hualpen'>Hualpen</MenuItem>
                        <MenuItem value='Hualqui'>Hualqui</MenuItem>
                        <MenuItem value='Lota'>Lota</MenuItem>
                        <MenuItem value='San pedro de la paz'>San Pedro de la Paz</MenuItem>
                        <MenuItem value='Santa Juana'>Santa Juana</MenuItem>
                        <MenuItem value='Talcahuano'>Talcahuano</MenuItem>
                        <MenuItem value='Tome'>Tome</MenuItem>
                        <MenuItem value='Penco'>Penco</MenuItem>
                  </Select>
                </GridItem>
              </GridContainer>
              <br/><br/>
              <Button variant="contained" color="primary" onClick={()=>this.validar()} >REGISTRAR</Button>
              
          </Card>
          <SnackbarContent
              message={
                  <span>
                    <b>INFO ALERT:</b> Porfavor llene todos los campos
                  </span>
              }
              close={true}
              color="info"
              icon={InfoOutline}
              />
            
          
        </GridItem >
       </GridContainer>
      </MuiThemeProvider >
     
      <br/><br/> <br/><br/><br/><br/>
      
      <Footer />
    </div>
  );
}
  


}
export default withStyles(styles)(RegistroPage);