import Input from "../Input/Input"
import '../Question/Question.css'

const Question = (props) => {

    const {question,value,handleChange} = props
    
    return <div className="question">
        <p>{question.question}</p>
        {
            question.options.map(option=>{
            return <div>
                    <Input type="radio" checked={value === option} name="option" onChange={handleChange} className="myInput" value={option}/><label>{option}</label>
                </div>
            })   
        }  
    </div>
}
export default Question