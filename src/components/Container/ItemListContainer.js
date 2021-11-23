import React, { useEffect, useState } from 'react'
import {ItemList} from '../ItemList/ItemList'
import { pedirDatos } from '../../helpers/pedirDatos'
import './ItemListContainer.scss'
import { useParams } from 'react-router'

export const ItemListContainer = ({greeting, usuario}) => {

    const [loading, setLoading] = useState(false)
    const [productos, setProductos] = useState([])

    const { catId } = useParams()
    console.log(catId)

    useEffect(() => {

        setLoading(true)
        pedirDatos()
            .then((resp) => {

                if (!catId) {
                    setProductos(resp)
                } else{
                    setProductos(resp.filter(prod => prod.category === catId))
                }
            })
            .catch((error) => {
                console.log(error)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [catId])


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