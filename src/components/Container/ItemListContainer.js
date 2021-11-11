import React from "react"
import './ItemListContainer.scss'

const ItemListContainer = ({greeting, usuario, children}) => {
    return(
        <div className="divContainer">
            <h2>{greeting}</h2>
            <p>{usuario}</p>

            {children}

        </div>
    )
}

export default ItemListContainer