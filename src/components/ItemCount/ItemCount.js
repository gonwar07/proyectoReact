import React, { useState } from 'react'
import './ItemCount.scss'

export const ItemCount = () => {

    const [clicks, setClicks] = useState(0)
    const stock = 10

    const sumarProd = () => {
        if(clicks >= stock){
            console.log('No hay stock del producto seleccionado')
        }else{
            setClicks(clicks + 1)
        }
    }

    const restarProd = () => {
        if(clicks <= 0){
            console.log('0 es el mínimo de productos permitidos')
        }else{
            setClicks(clicks - 1)
        }
    }

    const agregaProd = () => {
        if(clicks == 0){
            alert('Debes indicar la catidad de productos deseada')
        }else{
            alert('Has agregado tus productos al carrito!')
                window.location.reload(true);
        }
    }

    return(
        <div className="contenedorCardProd">
            <h3 className="nombreProd">Producto</h3>
            <div className="divContadorProd">
                <button className="btnRestaProd" onClick={restarProd}>-</button>
                <p className="numProd"> {clicks} </p>
                <button className="btnSumaProd" onClick={sumarProd}>+</button>
            </div>
            <button className="btnAgregarProd" onClick={agregaProd}>Agregar al carrito</button>
        </div>
    )
}