import React, {useEffect} from 'react';
import {useContext} from 'react';
import {Card, Col, Container, Row} from 'react-bootstrap'
import {observer} from 'mobx-react-lite';
import {getBasket} from "../htpp/deviceAPI";
import {Context} from "../index";


const Basket = observer(() => {
    const {device} = useContext(Context)

    useEffect(() => {
        getBasket().then(data => device.setBaskets(data))
    }, [device])

    let prices = 0;
        device.basket.map(device => {
                prices =prices+Number(device.device.price);
            }
        )
    return (
        <Container
            className="d-flex flex-sm-column justify-content-center align-items-center mt-3"
        >
            <h1 className="pb-2">Cart</h1>
            <Card className="d-flex flex-row  p-2 justify-content-between align-items-center mb-2">
                <h1 className="pr-2">Итого:</h1>
                <h3 className="pl-2">{prices}<span className="font-weight-light pl-2">UAN</span></h3>
            </Card>
            {device.basket.map(product =>
                <Card className="d-flex w-100 p-2 justify-content-center mb-2" key={product.id}>
                    <Row className="d-flex w-100">
                        <Col>
                            <div className="d-flex flex-row align-items-center">
                                <img src={process.env.REACT_APP_API_URL + product.device.img} width={50} alt={"Product img"}/>
                                <h1 className="pl-3">{product.device.name}</h1>
                            </div>
                        </Col>
                        <Col>
                            <div className="d-flex h-100 flex-row justify-content-end align-items-center">
                                <h2 className="font-weight-light">{product.device.price} UAN</h2>
                            </div>
                        </Col>
                    </Row>

                </Card>
            )}
        </Container>
    );
});

export default Basket;
