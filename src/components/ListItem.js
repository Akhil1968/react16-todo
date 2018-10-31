import React from 'react';
import "./ListItem.css";

const ListItem = (props) =>  
    <li className="TextControl">
        &nbsp; &nbsp; {props.anItem} &nbsp; 
        <button 
            className="ListButton"
            onClick={() => props.deleteItem(props.id)}>
        Delete
        </button>
        <button 
            className="ListButton"
            onClick={() => props.editItemBegin(props.id)}>
        Edit
        </button>
    </li>   

export default ListItem;