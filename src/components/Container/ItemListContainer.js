import React from "react"
import './ItemListContainer.scss'
import {ItemList} from '../ItemList/ItemList'

const ItemListContainer = ({greeting, usuario}) => {
    return(
        <div className="divContainer">
            <h2>{greeting}</h2>
            <p>{usuario}</p>
            <ItemList/>
        </div>
    )
}

export default ItemListContainer