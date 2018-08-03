import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import InputAdornment from "@material-ui/core/InputAdornment";
// @material-ui/icons
import Email from "@material-ui/icons/Email";
import LockOutline from "@material-ui/icons/LockOutline";
// core components
import Footer from "components/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";

import loginPageStyle from "assets/jss/material-kit-react/views/loginPage.jsx";

import image from "assets/img/bg7.jpg";

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    // we use this to make the card to appear after the page has been rendered
    this.state = {
          email:'',
          contraseña:'',
          cardAnimaton: "cardHidden"
      
    };
    this.login=this.login.bind(this);
    this.onChange=this.onChange.bind(this);
  }

  login(){
      
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange= ()=> {

        if(xmlhttp.readyState === 4 && xmlhttp.status === 200){

            var usuario = xmlhttp.responseText; 
            console.log(usuario)
            return usuario;
            if(usuario=="true"){
                this.props.SetLog(1);

            }
           
         

        }else{

        }
     }        
      //  xmlhttp.open("POST","../server/checklogin.php",true);
     xmlhttp.open("POST","http://localhost/build/server/checklogin.php",true);
     xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
     xmlhttp.send("email="+this.state.email+"&contrasenia="+this.state.contraseña);

    
  }

  onChange(e){

    this.setState({[e.target.name]: e.target.value})

  } 

  componentDidMount() {
    // we add a hidden class to the card and after 700 ms we delete it and the transition appears
    setTimeout(
      function() {
        this.setState({ cardAnimaton: "" });
      }.bind(this),
      700
    );
  }
  render() {
    const { classes} = this.props;
    return (
      <div>
       
        <div
          className={classes.pageHeader}
          style={{
            backgroundImage: "url(" + image + ")",
            backgroundSize: "cover",
            backgroundPosition: "top center"
          }}
        >
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={4}>
                <Card className={classes[this.state.cardAnimaton]}>
                  <form className={classes.form}>
                    <CardHeader color="primary" className={classes.cardHeader}>
                      <h4>Login</h4>
                      <div className={classes.socialLine}>
                        <Button
                          justIcon
                          href="#pablo"
                          target="_blank"
                          color="transparent"
                          onClick={e => e.preventDefault()}
                        >
                          <i className={"fab fa-twitter"} />
                        </Button>
                        <Button
                          justIcon
                          href="#pablo"
                          target="_blank"
                          color="transparent"
                          onClick={e => e.preventDefault()}
                        >
                          <i className={"fab fa-facebook"} />
                        </Button>
                        <Button
                          justIcon
                          href="#pablo"
                          target="_blank"
                          color="transparent"
                          onClick={e => e.preventDefault()}
                        >
                          <i className={"fab fa-google-plus-g"} />
                        </Button>
                      </div>
                    </CardHeader>
                    <p className={classes.divider}>Or Be Classical</p>
                    <CardBody>
                     
                      <CustomInput
                        labelText="Correo"
                        id="email"
                        
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          name: "email",
                          onChange: (e)=>this.onChange(e),
                          type: "email",
                          endAdornment: (
                            <InputAdornment position="end">
                              <Email className={classes.inputIconsColor} />
                            </InputAdornment>
                          )
                        }}
                      />
                      <CustomInput
                        labelText="Contraseña"
                        id="pass"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          name:"contraseña",
                          onChange:(e)=>this.onChange(e),
                          type: "password",
                          endAdornment: (
                            <InputAdornment position="end">
                              <LockOutline
                                className={classes.inputIconsColor}
                              />
                            </InputAdornment>
                          )
                        }}
                      />
                    </CardBody>
                    <CardFooter className={classes.cardFooter}>
                      <Button simple color="primary" size="lg" onClick={()=>this.login()}>
                        Iniciar sesión
                      </Button>
                      <Button simple color="primary" size="lg" onClick={() => this.props.SetLog(2)}>
                        Registrarse
                      </Button>
                    </CardFooter>
                  </form>
                </Card>
              </GridItem>
            </GridContainer>
          </div>
          <Footer/>
        </div>
      </div>
    );
  }
}

export default withStyles(loginPageStyle)(LoginPage);
