import React, {Component} from 'react';
import "./AddItem.css";

class AddItem extends Component {
    state = {
        whatToAdd: ''
    }

    changeHandler = (event) => {
        //event.preventDefault();
        //console.log("changeHandler called");
        this.setState({
            whatToAdd: event.target.value
        }
        );
    }
    render(){
        console.log("AddItem.render() called");
        return (
            <div>
                <input type="text" 
                    className="InputControl"
                    onChange={this.changeHandler} 
                    value={this.state.whatToAdd}
                />
                <button 
                    className="button"
                    onClick={() => {
                        this.props.addItem({id: Math.random(), data: this.state.whatToAdd});
                        //console.log("cleaning the state");
                        this.setState({whatToAdd: ''});
                    }
                }> Add</button>
            </div>
        );
    }
}
export default AddItem;