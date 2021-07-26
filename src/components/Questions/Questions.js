import React, { Component } from "react"
import Question from "../Question/Question"
import Input from "../Input/Input"
import Result from "../Result/Result"
import '../Questions/Questions.css'
import '../Input/Input.css'

class Questions extends Component{
    constructor(props){
        super(props)

        this.state = {
            index : 0,
            value : '',
            rightAnswers : 0,
            wrongAnswers : this.props.questions.length,
            totalAttempted : 0,
            isLast : false,

        }    
    }
    increament = (e) =>{      
        if(this.state.index===this.props.questions.length-1){
            this.setState({
                index:this.props.questions.length-1,
                isLast:true,
            })
        }else{
            this.setState({
                index:this.state.index+1,
            })
        }
    }
    handleChange = (e) =>{
        this.setState({
            value : e.target.value,
            totalAttempted : this.state.totalAttempted+1,
        })
        if(e.target.value===this.props.questions[this.state.index].correct){
            this.setState({
                rightAnswers : this.state.rightAnswers+1,
                wrongAnswers : this.state.wrongAnswers-1,
            })
        }      
       
    } 
    render(){
        if(this.state.isLast){
            return <div>
                <Result totalAttempted={this.state.totalAttempted} rightAnswers={this.state.rightAnswers} wrongAnswers={this.state.wrongAnswers}></Result>
            </div>
        }else{
            return <div>
                <Question question = {this.props.questions[this.state.index]} handleChange = {this.handleChange} value = {this.state.value}></Question>
                <Input onClick={(e)=>this.increament(e)} value="Next" className="inputButton" type ="button"></Input>            
            </div>
        }
        
    }   
}
export default Questions