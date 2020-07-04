import React from 'react'
import { render } from 'react-dom'; // virtual dom 

class App extends React.Component{
    // basic stucture
    constructor(){
        super()
        // first executed area
        this.user = "chaitu215"
        this.state = {
            name : "Tom",
            salary : 10000
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(){
        this.setState({name : "Joe"})
        console.log(this.state.name)
    }

    render(){
        // we can give initialise functions/ functions 
        // second area to trigger 
        //this.state.name="Joe" // not a valid way of changing state 
   
        return(
            <div>
                <p>welcome to ReactJS 2</p>
                <button onClick={this.handleClick}>Click</button>
            </div>
        )
    }

}
render(<App /> , document.getElementById('root'))