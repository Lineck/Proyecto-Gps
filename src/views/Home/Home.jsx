import  React from 'react'

import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import Quote from "components/Typography/Quote.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";

export default class Home extends React.Component{

  render() {
    return (
      <div>
        
        <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={5}>
                <Card>
                    <CardHeader color="primary" >Home</CardHeader>
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
    )
  }
}
