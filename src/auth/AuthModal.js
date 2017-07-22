/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React from 'react';
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import Login from './Login'
class AuthModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false
        };

    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    }

    render() {
        return (
            <div>
                <Button color="danger" onClick={this.toggle}>Login</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
                    <ModalBody>
                        <div>
                           <Login/>
                        </div>

                    </ModalBody>

                </Modal>
            </div>
        );
    }
}

export default AuthModal;