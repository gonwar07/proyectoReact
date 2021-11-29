import React, { useState } from 'react'
import { Card } from 'react-bootstrap'
import { ItemCount } from '../ItemCount/ItemCount'
import './ItemDetail.scss'
import { useNavigate } from 'react-router'
import { Link } from 'react-router-dom'

export const ItemDetail = ({id, name, price, img, desc, category, stock}) =>{

    const navigate = useNavigate()
    const [cantidad, setCantidad] = useState(0)
    const [agregado, setAgregado] = useState(false)

    const handleVolver = () =>{
        navigate(-1)
    }

    const handleVolverInicio = () =>{
        navigate('/')
    }

    const handleAgregar = () =>{
        console.log('Item agregado: ', {
            id,
            name,
            price,
            cantidad
        })

        setAgregado(true)
    }

    return(
            <Card key={id} className="col-6 tarjetaProd" style={{ width: '18rem' }}>
                <img src={img} className="prodImg" variant="top" alt={name}/>
                <Card.Body>
                    <Card.Title className="prodName">{name}</Card.Title>
                    <p className="prodPrice">Precio $. {price}</p>
                    <Card.Text className="prodDesc">{desc}</Card.Text>
                    <p className="prodCat">{category}</p>

                {
                    !agregado
                    ?   <ItemCount 
                            max={stock}
                            cantidad={cantidad} 
                            setCantidad={setCantidad}
                            onAdd={handleAgregar}
                        />
                    : <Link to="/cart" className="btn btn-success">Terminar mi compra</Link>
                }

                    <button className="btnVolver btn btn-dark" onClick={handleVolver}>Volver</button>
                    <button className="btnVolverInicio btn btn-dark" onClick={handleVolverInicio}>Volver a Inicio</button>
                </Card.Body>
            </Card>
    )
}