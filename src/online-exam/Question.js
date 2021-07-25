import { Component } from "react"
import Input from "../components/Input"

const Question = (props) => {

    const handleChange = (e) =>{
        console.log('Valueee ',e.target.value)
        console.log(props.name)
    }

    return <div className="exam">
    <p>{props.question.question}</p>
    {
        props.question.options.map(option=>{
           return <div>
               <Input type="radio" checked ={props.isChecked} name = {props.name} onChange = {handleChange} className="myInput" value={option}/><label>{option}</label>
            </div>
        })   
    }  
    </div>
} 
export default Question