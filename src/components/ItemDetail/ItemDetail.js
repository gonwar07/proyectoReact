import React from 'react'
import { Card } from 'react-bootstrap'
import { ItemCount } from '../ItemCount/ItemCount'
import './ItemDetail.scss'
import { useNavigate } from 'react-router'

export const ItemDetail = ({id, name, price, img, desc, category}) =>{

    const navigate = useNavigate()

    const handleVolver = () =>{
        navigate(-1)
    }

    const handleVolverInicio = () =>{
        navigate('/')
    }

    return(
            <Card key={id} className="col-6 tarjetaProd" style={{ width: '18rem' }}>
                <img src={img} className="prodImg" variant="top" alt={name}/>
                <Card.Body>
                    <Card.Title className="prodName">{name}</Card.Title>
                    <p className="prodPrice">Precio $. {price}</p>
                    <Card.Text className="prodDesc">{desc}</Card.Text>
                    <p className="prodCat">{category}</p>
                    <ItemCount/>
                    <button className="btnVolver btn btn-dark" onClick={handleVolver}>Volver</button>
                    <button className="btnVolverInicio btn btn-dark" onClick={handleVolverInicio}>Volver a Inicio</button>
                </Card.Body>
            </Card>
    )
}