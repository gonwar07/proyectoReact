import React, { useEffect, useState } from 'react'
import {ItemList} from '../ItemList/ItemList'
import { pedirDatos } from '../../helpers/pedirDatos'
import './ItemListContainer.scss'

export const ItemListContainer = ({greeting, usuario}) => {

    const [loading, setLoading] = useState(false)
    const [productos, setProductos] = useState([])


    useEffect(() => {

        setLoading(true)
        pedirDatos()
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
        <div className="divContainer">
            <h2>{greeting}</h2>
            <p>{usuario}</p>
            <>
                {
                loading 
                    ? <h2>Cargando...</h2>
                    : <ItemList productos ={productos}/>
                }
            </>
        </div>
    )
}

export default ItemListContainer