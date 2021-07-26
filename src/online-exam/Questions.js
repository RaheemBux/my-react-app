import React, { Component } from "react"
import Question from "./Question"
import Input from "../components/Input"
import Result from "./Result"

class Questions extends Component{
    constructor(props){
        super(props)

        this.state = {
            index : 0,
            value : '',
            rightAnswers : 0,
            wrongAnswers : 10,
            totalAttempted : 0,
        }    
    }
    increament = (e) =>{      
        if(this.state.index===10){
            this.setState({
                index:9,
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
        console.log('Valueee ',e.target.value)
        console.log('coreectt ',this.props.questions[this.state.index].correct)    
        if(e.target.value===this.props.questions[this.state.index].correct){
            console.log('Yeahhhhhh Right!!!!!!!!!! ')
            this.setState({
                rightAnswers : this.state.rightAnswers+1,
                wrongAnswers : this.state.wrongAnswers-1,
            })
        }      
       
    } 
    render(){
        if(this.state.index===9){
            return <div>
                <Result totalAttempted={this.state.totalAttempted} rightAnswers={this.state.rightAnswers} wrongAnswers={this.state.wrongAnswers}></Result>
            </div>
        }else{
            return <div>
                <Question question = {this.props.questions[this.state.index]} handleChange = {this.handleChange} value = {this.state.value}></Question>
                <Input onClick={(e)=>this.increament(e)} value="Next" type ="button"></Input>            
            </div>
        }
        
    }   
}
export default Questions