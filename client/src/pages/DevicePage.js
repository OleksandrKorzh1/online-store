import React, {useEffect, useState} from 'react';
import {Button, Card, Col, Container, Image, Row} from "react-bootstrap";
import bigStar from '../assets/BigStar.png'
import {useParams} from "react-router-dom";
import {addToBasket, fetchOneDevice} from "../htpp/deviceAPI";
import '../components/css/DevicePage.css'

const DevicePage = () => {
    const [device, setDevice] = useState({info: []})
    const {id} = useParams();
    useEffect(() => {
        fetchOneDevice(id).then(data => setDevice(data))
    }, [])
    const add = () => {
        const formData = new FormData()
        formData.append('deviceId', id)
        addToBasket(formData).then(() => alert(`Product ` + device.name + ` has been added to cart!`))
    }
    return (
        <div className={"device_main_div"} style={{display: "flex"}}>
            <div className={"device_img"}>
                <img src={process.env.REACT_APP_API_URL + device.img}/>
            </div>
            <div style={{float: "right", width: "70%"}}>
                <h3 className={"device_name"}>{device.name}</h3>
                <div className={"price_div"}>
                    <h1 className={"device_price"} style={{fontSize: "59px"}}>Price : {device.price}</h1>
                    <Button className={"button_buy"} variant={"outline-primary"} onClick={add}>Buy</Button>
                </div>
                <div>
                    <h1 style={{textAlign: "center"}}>Specification</h1>
                    {device.info.map((info, index) =>
                        <Row className={"qwe"} key={info.id}
                             style={{background: index % 2 === 0 ? 'lightgray' : 'transparent ', padding: 10}}>
                            <div>{info.title}</div>
                            <div className={"description_device"}>{info.description}</div>
                        </Row>
                    )}
                </div>
            </div>
        </div>
    );
};

export default DevicePage;