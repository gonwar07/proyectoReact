import React, { useEffect, useState } from 'react'
import { Card } from 'react-bootstrap'
import {stock} from '../Item/Item'
import { ItemCount } from '../ItemCount/ItemCount'
import './ItemList.scss'

export const ItemList = () => {

    const [loading, setLoading] = useState(false)
    const [productos, setProductos] = useState([])

    let productosJSX = productos.map((prod) => (
        <>
            <Card className="col-6 tarjetaProd" style={{ width: '18rem' }}>
                <Card.Img className="prodImg" variant="top" src={prod.img} />
                <Card.Body>
                    <Card.Title className="prodName">{prod.name}</Card.Title>
                    <p className="prodPrice">Precio $. {prod.price}</p>
                    <Card.Text className="prodDesc">{prod.desc}</Card.Text>
                    <ItemCount/>
                </Card.Body>
            </Card>
        </>
    ))

    const PedirDatos = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(stock)
            }, 2000)
        })
    }

    useEffect(() => {

        setLoading(true)
        PedirDatos()
            .then((resp) => {
                setProductos(resp)
            })
            .catch((error) => {
                console.log(error)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [])

    return(
        <div>
            {
                loading ? <h2>Cargando...</h2>
                        : <>
                            {[
                                <section className="contenedorProductos">
                                    {productosJSX}
                                </section>
                            ]}                        
                          </>
            }
        </div>
    )
}
