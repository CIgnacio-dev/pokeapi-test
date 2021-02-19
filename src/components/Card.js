import React, { useState } from 'react';
import { ListGroup, ListGroupItem, Card, CardImg, Col, Row, CardDeck, Button, Modal } from 'react-bootstrap'



function Cards({ pokemon }) {
    const [smShow, setSmShow] = useState(false);
    return (
        <Row  style={{display: "inline-grid"}}>
            <Col  style={{ width: '19rem' }}>
                <CardDeck>
                    <Card style={{ textAlign: "center" }}>
                        <Card.Title  style={{ textAlign: "center" }}>{pokemon.name}</Card.Title>
                        <CardImg img src={pokemon.sprites.front_default} alt={pokemon.name} />
                        <ListGroup >    
                        <ListGroupItem>Tipo : {pokemon.types[0].type.name}</ListGroupItem>
                        <ListGroupItem>Número en la Pokedex: {pokemon.id}</ListGroupItem>
                        <ListGroupItem>Habilidad: {pokemon.abilities[0].ability.name}</ListGroupItem>
                        <Button variant="danger" onClick={() => setSmShow(true)}>Ver versión Shiny/Variocolor</Button>{' '}
                        <Modal size="sm" show={smShow} onHide={() => setSmShow(false)} aria-labelledby="example-modal-sizes-title-sm">
                        <CardImg img src={pokemon.sprites.front_shiny} alt={pokemon.name} /></Modal>
                        </ListGroup>
                    </Card>
                </CardDeck>
            </Col>
        </Row>
    )
}

export default Cards;