import React, { PureComponent } from "react"
import { Container , Row, Col } from 'react-grid-system';
import { Jumbotron, Button } from 'reactstrap';


export default class myValues extends PureComponent{
    render(){
        return <Container>
            <Row style={{paddingTop: "100px"}}>
                <Col>
                    <Jumbotron>
                        <h1 className="display-3">Hello, world!</h1>
                        <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
                        <hr className="my-2" />
                        <p>It uses utility classes for typgraphy and spacing to space content out within the larger container.</p>
                        <p className="lead">
                            <Button color="primary">Learn More</Button>
                        </p>
                    </Jumbotron>
                </Col>
             </Row>
        </Container>
    }
}