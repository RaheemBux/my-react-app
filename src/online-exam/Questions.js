import React, { Component } from "react"
import Question from "./Question"
import Input from "../components/Input"

class Questions extends Component{
    constructor(props){
        super(props)

        this.state = {
            index : 0,
            name : 'radio',
            isChecked : null,
        }
      
    }
    increment = (e) =>{
        this.setState({
            index:this.state.index+1,
            name :this.state.name+this.state.index,
            isChecked : null,
        })
    }  
    render(){
        return <div>
            <Question checked = {this.isChecked} question = {this.props.questions[this.state.index]} name={this.state.name}></Question>
            <Input onClick={(e)=>this.increment(e)} value="Next" type ="button"></Input>    
        </div>
    }   
}
export default Questions