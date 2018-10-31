import React, { Component } from 'react';
import ListItem from '../components/ListItem';
import AddItem from '../components/AddItem';
import EditItem from '../components/EditItem';

import './TodoList.css';

class TodoList extends Component {
  state = {
    items: [],
    count: 0,
    edit: false,
    itemToEdit: null
  }

  addItem = (anItem) => {
    this.setState({ items: [...this.state.items, anItem] });
    this.setState({count: this.state.count + 1});
  }

  deleteItem = (itemId) => {
    console.log("Delete called for ", itemId);
    const remainingItems = this.state.items.filter((anItem) => {
      if(anItem.id !== itemId){ 
        return anItem; 
      }else{
        return null;
      }

    });
    // Update state with filter
    this.setState({
      items: remainingItems,
      count: this.state.count - 1});
  }

  editItemBegin = (itemId) => {
    console.log("TodoList.editItemBegin called for ", itemId);
    
    this.setState((prevState, props) => {
      let itemToEdit = prevState.items.find( i => i.id === itemId);
      console.log("TodoList.editItemBegin setState being called");
      return  {edit: true, itemToEdit: itemToEdit}});
  }

  editItemEnd = (item) => {
    console.log("TodoList.editItemEnd called for id=" + item.id + "data=" + item.data);
    let newItems = [];
    for (let ii in this.state.items) {
      if (this.state.items[ii].id === item.id) {
        newItems = [...this.state.items];
        newItems[ii].data = item.data
        break; //Stop this loop, we found it!
      }
    }
    this.setState({items: newItems, edit: false});
  }

  render() {
    console.log("TodoList.render() called");
    return (
      <div >
        <AddItem addItem={(x) => this.addItem(x)}/>
        <div className="List">
          <h5>&nbsp;&nbsp;# of Items: {this.state.count}  </h5>
          <ul>
            {this.state.items.map( itm => 
            <ListItem 
              key={itm.id} 
              id={itm.id}
              anItem={itm.data} 
              deleteItem={(x) => this.deleteItem(x)}
              editItemBegin={(x)=>this.editItemBegin(x)}
              />
              )}
        </ul>
        </div>
        <EditItem 
          editItemEnd={(x) => this.editItemEnd(x)}
          itemToEdit={this.state.itemToEdit}
          edit={this.state.edit}
          />     
      </div>
    );
  } 
}

export default TodoList;
