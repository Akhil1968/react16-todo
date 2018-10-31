import React, {Component} from 'react';
import './EditItem.css';

class EditItem extends Component {
    state = {
        editable:  '',
        itemToEdit: null
    }

    componentWillReceiveProps = (nextprops) =>{
        console.log("EditItem.componentWillReceiveProps() edit=" + nextprops.edit)
        if (nextprops.edit === true){
            this.setState(  {
                editable: nextprops.itemToEdit.data,
                itemToEdit: nextprops.itemToEdit
            });
        }
    }

    changeHandler = (event) => {
        this.setState({
            editable: event.target.value
        });
    }
    render(){
        console.log("EditItem.render() called");
                         
        if (this.props.edit === true){
            return (
            <div >
                <input 
                    className="InputControl"
                    type="text" 
                    onChange={this.changeHandler} 
                    value={this.state.editable}
                />
                <button 
                        className="button"
                        onClick={() => {
                            this.setState({
                                editable: null
                            });
                            this.props.editItemEnd({
                                id: this.state.itemToEdit.id, 
                                data: this.state.editable
                            });
                        }
                }> Submit</button>
            </div>
                );
        }else{
            return "";
        }
            
            
       
    }
}
export default EditItem;