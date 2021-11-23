import React, { useState } from 'react'
import './ItemCount.scss'
import { useNavigate } from 'react-router'

export const ItemCount = () => {

    const [clicks, setClicks] = useState(1)
    const stock = 10

    const navigate = useNavigate()

    const sumarProd = () => {
        if(clicks >= stock){
            console.log('No hay stock del producto seleccionado')
        }else{
            setClicks(clicks + 1)
        }
    }

    const restarProd = () => {
        if(clicks <= 1){
            console.log('1 es el mínimo de productos permitidos')
        }else{
            setClicks(clicks - 1)
        }
    }

    const agregaProd = () => {
        if(clicks === 0){
            alert('Debes indicar la catidad de productos deseada')
        }else{
            alert('Has agregado tus productos al carrito!')
                // window.location.reload(true);
                navigate('/')
        }
    }

    return(
        <div className="contenedorCardProd">
            <div className="divContadorProd">
                <button className="btnRestaProd btn btn-dark" onClick={restarProd}>-</button>
                <p className="numProd"> {clicks} </p>
                <button className="btnSumaProd btn btn-dark" onClick={sumarProd}>+</button>
            </div>
            <button className="btnAgregarProd btn btn-dark" onClick={agregaProd}>Agregar al carrito</button>
        </div>
    )
}