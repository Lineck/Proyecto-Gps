 import React from 'react'
 import Button from '@material-ui/core/Button';
 import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import HeaderGps from "components/Header/HeaderGps.jsx"
import Footer from "components/Footer/Footer.jsx";

 class Validacion extends React.Component {
   constructor(props){

    super(props);
   }

  render() {
    
    return (
      <div>
        
        <HeaderGps/>
        <Dialog
          open={true}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Proceso de verificación</DialogTitle>
          <DialogContent>
            <DialogContentText>
            Para finalizar el proceso de verificación introduzca a continuación el código que enviamos a su correo
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Codigo de verificacion"
              type="text"
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={()=>this.props.SetLog(0)} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleClose} color="primary">
              Validar
            </Button>
          </DialogActions>
        </Dialog>
        <div style={{marginTop:'87vh'}}>
          <Footer />
        </div>
        
      </div>
    )
  }

}
  export default Validacion;