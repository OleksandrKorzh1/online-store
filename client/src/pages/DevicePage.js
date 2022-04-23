import React, {useEffect, useState} from 'react';
import {Button, Card, Col, Container, Image, Row} from "react-bootstrap";
import bigStar from '../assets/BigStar.png'
import {useParams} from "react-router-dom";
import {addToBasket, fetchOneDevice} from "../htpp/deviceAPI";

const DevicePage = () => {
    const [device,setDevice]=useState({info:[]})
    const{id}=useParams();
    useEffect(()=>{
        fetchOneDevice(id).then(data=>setDevice(data))
    },[])
    const add = () => {
        const formData = new FormData()
        formData.append('deviceId', id)
        addToBasket(formData).then(()=> alert(`Product ` + device.name + ` has been added to cart!`))
    }
    return (
        <Container className={"mt-3"}>
            <Row>
                <Col md={4}>
                    <Image  thumbnail={"true"} src={process.env.REACT_APP_API_URL + device.img}/>
                </Col>
                <Col md={4}>
                    <Row className={"d-flex flex-column align-items-center"}>
                        <h2>{device.name}</h2>
                        <div className={"d-flex align-items-center justify-content-center"}
                             style={{background:`url(${bigStar}) no-repeat center`,width:240,height:240,backgroundSize:'cover',fontSize:20}}
                        >
                            {device.rating}
                        </div>
                    </Row>
                </Col>
                <Col md={4}>
                <Card
                    className={"d-flex flex-column align-items-center justify-content-around"}
                    style={{width:300,height:300,fontSize:32,border:'5px solid lightgray'}}
                >
                    <h3>{device.price}</h3>
                    <Button variant={"outline-dark"} onClick={add}>Add to cart</Button>
                </Card>
                </Col>
            </Row>
            <div className={"d-flex flex-column m-3"} style={{float:"right",width:"60%"}}>
                <h1 style={{textAlign:"center"}}>Specification</h1>
                {device.info.map((info,index)=>
                    <Row key={info.id} style={{background:index%2===0?'lightgray' : 'transparent ',padding:10}}>
                        {info.title}:{info.description}
                    </Row>
                )}
            </div>
        </Container>
    );
};

export default DevicePage;