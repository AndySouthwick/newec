import React, { Component } from 'react'

import { Switch, Route, Redirect } from 'react-router-dom'
import Login from '../auth/Login'
import SignUp from '../auth/SignUp'
import Auth from '../auth/Auth'
import ProductList from '../products/shop/ProductList'
import AuthModal from '../auth/AuthModal'

class App extends Component {
    render () {
        return (
            <Switch>

                <Route path="/login" component={AuthModal}/>
                <Route path="/sign-up" component={SignUp}/>
                <Route path="/app" component={Auth}/>
                <Route exact path="/store" component={ProductList}/>

            </Switch>
        )
    }
}

export default App
