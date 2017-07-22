import React, {Component} from 'react'

import { graphql } from 'react-apollo'
import {fetchAllProducts} from '../service'
import { Card, CardImg, CardText, CardBlock,
    CardTitle, CardSubtitle, Button, Container, Col, Row,  Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';

import Login from '../../auth/Login'
class ProductList extends Component{

    constructor (props) {
        super(props)
        this.state = {
            isOpen: false
        }
    }


    closeModal = () => {
        this.setState({
            isOpen: false
        })
    }


    render(){

        let button  = <button  color="danger" onClick={(evt) => this.setState({ isOpen: true })}>sign in dude</button>
        if (this.props.token !== null){
            button = <Button color="success" >Buy Now</Button>
        }

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
                                {button}
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

                </Row>

                <Modal isOpen={this.state.isOpen} toggle={this.closeModal}>
                    <ModalHeader>Some Header</ModalHeader>
                    <ModalBody>
                        <Login/>

                    </ModalBody>
                    <ModalFooter>
                        <Button color="default" outline onClick={this.closeModal}>Close</Button>
                    </ModalFooter>
                </Modal>
            </Container>

        )
    }
}

export default graphql(fetchAllProducts, {
    fetchPolicy: 'network-only'
})(ProductList)