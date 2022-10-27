import React from 'react';
import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

const Checkout = () => {

    const renderTooltip = props => (
        <Tooltip {...props}>Tooltip for the register button</Tooltip>
    );

    return (
        <div className=''>

            <h2>checkout</h2>

            <OverlayTrigger placement="top" overlay={renderTooltip}>
                <Button>Register</Button>
            </OverlayTrigger>

        </div>
    );
};

export default Checkout;