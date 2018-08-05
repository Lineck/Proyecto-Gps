import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
// core 
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Parallax from "components/Parallax/Parallax.jsx";
import Button from "components/CustomButtons/Button.jsx";

import landingPageStyle from "assets/jss/material-kit-react/views/landingPage.jsx";

class HomePage extends React.Component{

  render() {
    const { classes} = this.props;
  return (
    <div>
      <Header
        color="transparent"
        brand="Material Kit React"
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
        
      />
      <Parallax filter image={require("assets/img/landing-bg.jpg")}>
        <div className={classes.container} >
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classes.title} >Your Story Starts With Us.</h1>
              <h4>
                Every landing page needs a small description after the big
                bold title, that's why we added this text here. Add here all
                the information that can make you or your product create the
                first impression.
              </h4>
              <br />
              <Button
                color="danger"
                size="lg"
                href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-play" />Watch video
              </Button>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      
      <Footer />
    </div>
  );
}
}
export default withStyles(landingPageStyle)(HomePage);
