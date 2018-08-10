import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import classNames from "classnames";
// core 
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Parallax from "components/Parallax/Parallax.jsx";
import Button from "components/CustomButtons/Button.jsx";
import CardBody from "components/Card/CardBody.jsx";
import landingPageStyle from "assets/jss/material-kit-react/views/landingPage.jsx";
import { Card } from "../../../node_modules/@material-ui/core";


class HomePage extends React.Component{


  render() {
    const { classes} = this.props;
  return (
    <div>
      <Header
        
        SetLog={this.props.SetLog}
        color="transparent"
        brand="Tutorias UBB"
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "primary"
        }}
        
      />
      <Parallax filter image={require("assets/img/landing-bg.jpg")}>
        <div className={classes.container} >
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classes.title} >Tu Historia Comienza con nosotros.</h1>
              <h4>
                Every landing page needs a small description after the big
                bold title, that's why we added this text here. Add here all
                the information that can make you or your product create the
                first impression.
              </h4>
              <br />
              
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
      <br/>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={6}>
        <Card style={{width: "90%",marginLeft:"4vh"}}>
          <img
            style={{height: "180px", width: "100%", display: "block"}}
            className={classes.imgCardTop}
            src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22320%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20320%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_163df23d717%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A16pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_163df23d717%22%3E%3Crect%20width%3D%22320%22%20height%3D%22180%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22119.0859375%22%20y%3D%2297.35%22%3E320x180%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
            alt="Card-img-cap"
          />
          <CardBody>
            <h4 className={classes.cardTitle}>Card title</h4>
            <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <Button color="primary">Do something</Button>
          </CardBody>
        </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={6}>
        <Card style={{width: "90%",marginLeft:"4vh"}}>
          <img
            style={{height: "180px", width: "100%", display: "block"}}
            className={classes.imgCardTop}
            src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22320%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20320%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_163df23d717%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A16pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_163df23d717%22%3E%3Crect%20width%3D%22320%22%20height%3D%22180%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22119.0859375%22%20y%3D%2297.35%22%3E320x180%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
            alt="Card-img-cap"
          />
          <CardBody>
            <h4 className={classes.cardTitle}>Card title</h4>
            <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <Button color="primary">Do something</Button>
          </CardBody>
        </Card>
        </GridItem>
        </GridContainer>
        <br/><br/>
        <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={6}>
        <Card style={{width: "90%",marginLeft:"4vh"}}>
          <img
            style={{height: "180px", width: "100%", display: "block"}}
            className={classes.imgCardTop}
            src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22320%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20320%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_163df23d717%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A16pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_163df23d717%22%3E%3Crect%20width%3D%22320%22%20height%3D%22180%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22119.0859375%22%20y%3D%2297.35%22%3E320x180%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
            alt="Card-img-cap"
          />
          <CardBody>
            <h4 className={classes.cardTitle}>Card title</h4>
            <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <Button color="primary">Do something</Button>
          </CardBody>
        </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={6}>
        <Card style={{width: "90%",marginLeft:"4vh"}}>
          <img
            style={{height: "180px", width: "100%", display: "block"}}
            className={classes.imgCardTop}
            src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22320%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20320%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_163df23d717%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A16pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_163df23d717%22%3E%3Crect%20width%3D%22320%22%20height%3D%22180%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22119.0859375%22%20y%3D%2297.35%22%3E320x180%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
            alt="Card-img-cap"
          />
          <CardBody>
            <h4 className={classes.cardTitle}>Card title</h4>
            <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <Button color="primary">Do something</Button>
          </CardBody>
        </Card>
        </GridItem>
        
        </GridContainer><br/><br/>
          </div>
      
      <Footer />
    </div>
  );
}
}
export default withStyles(landingPageStyle)(HomePage);
