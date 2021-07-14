import { Component } from "react"

class Question extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return <div className="exam">
        <p>{this.props.question.question}</p>
        {
            this.props.question.options.map(option=>{
               return <div>
                   <input type="radio" name="options" value={option}/><label>{option}</label>
                </div>
            })   
        }  
    </div>

    }
}
export default Question