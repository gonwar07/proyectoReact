import React from "react"

const ItemListContainer = ({greeting, usuario}) => {
    return(
        <div className="divContainer">
            <h2>{greeting}</h2>
            <p>{usuario}</p>
        </div>
    )
}

export default ItemListContainer