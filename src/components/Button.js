const Button = (props) =>{
    const {name,className,text,onClick,width,height} = props
    return (
        <button
        className = {className}
        name = {name}
        onClick = {onClick}
        height = {height}
        width = {width}
        type = "button">
        {text}
    </button>
    )
};
export default Button