import React from 'react'
import { Card } from 'react-bootstrap'
import { ItemCount } from '../ItemCount/ItemCount'

export const Item = ({prod}) =>{

    return(

        <Card className="col-6 tarjetaProd" style={{ width: '18rem' }}>
            <Card.Img className="prodImg" variant="top" src={prod.img} />
            <Card.Body>
                <Card.Title className="prodName">{prod.name}</Card.Title>
                <p className="prodPrice">Precio $. {prod.price}</p>
                <Card.Text className="prodDesc">{prod.desc}</Card.Text>
                <ItemCount />
            </Card.Body>
        </Card>
    )
}