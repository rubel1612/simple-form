import InputComponent from "./component/inputComponent"
import Button from "./component/inputComponent/Button"

const App =() => {

    return (
        <div style = {
            {
                width:  "500px",
                backgroundColor : "#C0C0C0	",
                margin: "25px auto",
                padding: "10px",

            }
        }>
            <div >
                <h2 style={
                    {
                        marginBottom: "0px"
                    }
                }>Sign up form</h2>
                <p style={
                    {
                        marginTop: "0px"
                    }
                }>Lorem ipsum dolor sit amet .</p>
            </div>

            <form>
           <InputComponent
            labelName= "Enter Your Name: " htmlFor = "name" type="text"/>

           <InputComponent
            labelName= "Enter Your email: " htmlFor = "email" type="email"/>

           <InputComponent
            labelName= "Enter Your password: "  htmlFor = "password" type="password"/>

         <div>
            <Button varient= "error" type="cancel" name="cancel" size="small"/>
            <Button varient= "primary" type="submit" name="submit" size="medium"/>
            <Button varient= "warning" type="reset" name="reset" size="large"/>

         </div>
         </form>
        </div>
        
    )
}


export default App 