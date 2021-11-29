import React from 'react'
import './ItemCount.scss'

export const ItemCount = ( {max, setCantidad, cantidad, onAdd} ) => {

    const sumarProd = () => {
        cantidad < max && setCantidad(cantidad + 1)
    }

    const restarProd = () => {
        cantidad > 1 && setCantidad(cantidad - 1)
    }

    return(
        <div className="contenedorCardProd">
            <div className="divContadorProd">
                <button className="btnRestaProd btn btn-dark" onClick={restarProd}>-</button>
                <p className="numProd"> {cantidad} </p>
                <button className="btnSumaProd btn btn-dark" onClick={sumarProd}>+</button>
            </div>
            <button className="btnAgregarProd btn btn-dark" onClick={onAdd}>Agregar al carrito</button>
        </div>
    )
}