const Result = (props) => {
    
    const {totalAttempted,rightAnswers,wrongAnswers} = props
    
    return <center><div>
        <h3>Your Result Card</h3>
        <p>Total Attempted Questions : {totalAttempted}</p>
        <p>Total Right Answers : {rightAnswers}</p>
        <p>Total Wrong Answers : {wrongAnswers}</p>
        <p>Total Questions : {10}</p>
    </div></center>
}
export default Result