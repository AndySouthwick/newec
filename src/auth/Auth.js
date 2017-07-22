import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { Redirect} from 'react-router-dom'
import { withApollo } from 'react-apollo'
import {connect} from 'react-redux'
import {Container, Row, Col, Button} from 'reactstrap'

import AuthService from './service'
import {logout, setProfile} from './actions'

class Auth extends Component {

    handleLogout = () => {
        this.props.dispatch(logout())
    }

    componentWillMount() {
        this.props.client.query({
            query:AuthService.getLoggedInUser
        }).then((resp) => {
            this.props.dispatch(setProfile(resp.data.user))
        }).catch((error) => {
            console.error(error)
        })
    }

    render() {

        if(this.props.token === null) {
            return <Redirect to="/login"/>
        }
        let userName = <span>Loading user profile</span>
        if (this.props.userInfo != null) {
            userName = <span>{this.props.userInfo.profile.name}</span>
        }
        return (
            <Container>
                <Row>
                    <Col>
                        <p>
                            You've been authenticated: {userName}
                        </p>
                        <Button type="button" color="primary" onClick={this.handleLogout()}>Logout</Button>
                    </Col>
                </Row>
            </Container>
        )
    }
}

Auth.propTypes = {
    userInfo: PropTypes.object,
    token: PropTypes.string
}

const mapStateToProps = (state) => {
    return{
        userinfo:  state.auth.userInfo,
        token: state.auth.token
    }
}

const withApolloClient = withApollo(Auth)
const withReduxConnection = connect(mapStateToProps)(withApolloClient)

export default withReduxConnection
