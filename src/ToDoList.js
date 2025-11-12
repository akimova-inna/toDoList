import { Component } from 'react';
import check from './check.jpg'

export class ToDoList extends Component {
    state = {
        userInput: "",
        toDoList: []
    }


    onChangeEvent(e) {
        this.setState({userInput: e})
        console.log(e)
    }

    addItem(input) {
        if (input === '') {
            alert('Please enter an item') 
        }  else {
        let listArray = this.state.toDoList;
        listArray.push(input);
        this.setState({toDoList: listArray, userInput: ''})
    }
}
    
    crossedWord(event) {
        const li = event.target;
        li.classList.toggle('crossed');
    }

    deleteItem() {
        let listArray = this.state.toDoList;
        listArray = [];
        this.setState({toDoList: listArray})
    }

    onFormSubmit(e) {
        e.preventDefault()
    }

    render() {
        return (
        
        <form onSubmit={this.onFormSubmit}>
            <div className='container'>
                
                <input type='text'
                placeholder='What would you like to do...'
                onChange={(e) => {this.onChangeEvent(e.target.value)}}
                value={this.state.userInput} />
            </div>
            <div className='container'>
                <button onClick={() => this.addItem(this.state.userInput)} className='btn add'>
                    ADD
                </button>
            </div>
                <ul>
                    {this.state.toDoList.map((item,index) => (
                        <li onClick={this.crossedWord} key={index}>
                            <img src={check} width='40px'alt='check'/> 
                            {item}
                        </li>
                    ))}
                </ul>
            <div className='container'>
                <button onClick={() => this.deleteItem()} className='btn delete' >
                    Delete
                </button>
            </div>
        </form>     
        )
    }
}