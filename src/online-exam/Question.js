import Input from "../components/Input"

const Question = (props) => {

    const {question,value,handleChange} = props
    
    return <div className="exam">
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