const Input = (props) =>{
    const {type,className,name,value,onClick,onChange,radioGroup,checked} = props
    return (
        <>
        <input
            type = {type}
            name = {name}
            className = {className}
            value = {value}
            onChange = {onChange} 
            onClick = {onClick}
            radioGroup = {radioGroup}
            checked = {checked}
        > 
        </input>
    </>
    )
};
export default Input