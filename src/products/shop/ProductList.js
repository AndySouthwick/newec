import React, {Component} from 'react'

import { graphql } from 'react-apollo'
import {fetchAllProducts} from '../service'
import { Card, CardImg, CardText, CardBlock,
    CardTitle, CardSubtitle, Button, Container, Col, Row } from 'reactstrap';
import AuthModal from "../../auth/AuthModal";

class ProductList extends Component{
    render(){
        let products = null
        if (this.props.data.allProducts) {
            products = this.props.data.allProducts.map(({ id, name, description, price }) => {
                return (
                    <Col sm="4" key={id}>
                        <Card>
                            <CardImg src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                            <CardBlock>
                                <CardTitle>{name}</CardTitle>
                                <CardSubtitle>${price}</CardSubtitle>
                            </CardBlock>
                            <CardBlock>
                                <CardText>{description}</CardText>
                                <Button>Add To Cart</Button>
                            </CardBlock>
                        </Card>
                    </Col>
                )
            })
        }
        return(
            <Container>
                <Row>
                    {products}
                    <div>
                        <AuthModal/>
                    </div>
                </Row>
            </Container>

        )
    }
}

export default graphql(fetchAllProducts, {
    fetchPolicy: 'network-only'
})(ProductList)