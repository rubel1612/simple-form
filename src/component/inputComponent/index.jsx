
const InputComponent = (props) => {

    return (
        <div style={
            {
                display: "flex",
                flexDirection: "column",
                gap:"10px",
                marginBottom: "10px"

            }
        }>
    <label htmlFor={props.htmlFor} style={
            {
                fontFamily: "Arial",
                fontSize:"20px",
                color: "#008080"
            }
        }>
           {props.labelName}
        </label>
    <input type={props.type} id={props.htmlFor}
    style={
        {
            fontFamily: "Arial",
            fontSize:"20px",
            padding: "4px 20px",
            outline: "none",
            border: "3px solid black",
            borderRadius: "5px"
        }
    }
    />
 </div>
    )

}


export default InputComponent