import React from 'react';
import Col from "react-bootstrap/Col";
import {Card, Image} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import {DEVICE_ROUTE} from "../utils/consts";
import "./css/DeviceItem.css"

const DeviceItem = ({device}) => {
    const navigate = useNavigate();
    return (
        <Col md={3} className={"mt-3"} style={{display:"flex",flexDirection:"column"}} onClick={() => navigate(DEVICE_ROUTE + '/' + device.id)}>
            <Card className={"deviceitem"}>
                <Image  style={{height:"90%"}} src={process.env.REACT_APP_API_URL + device.img}/><br/>
            </Card>
            <div style={{width: '90%', margin: '0 auto', textalign: 'center'}}>{device.name}<br/>
                price: {device.price} UAN.
            </div>
        </Col>
    );
};

export default DeviceItem;