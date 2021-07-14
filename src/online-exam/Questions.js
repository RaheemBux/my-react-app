import React, { Component } from "react"
import Question from "./Question"

class Questions extends Component{
    constructor(props){
        super(props)

        this.state = {
            index : 0,
        }
      
    }
    increment = () =>{
        this.setState({
            index:this.state.index+1,
        })
    }  
    render(){
        return <React.Fragment>
            <Question question = {this.props.questions[this.state.index]}></Question>     
            <button onClick={()=>this.increment()}>Next</button>
        </React.Fragment>
    }
    
    
}
export default Questions