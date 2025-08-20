import Form from "../Components/Form";
import {useState} from 'react'
const Login =() => {

return (

    <>
        
        <Form
        Title = "Register Now!"
        buttonText = "Register"
        onSubmit ={handleRegister}
        formData = {formData}
        setFormData={setFormData}
        />
        
    </>


)


   
}


export default Login;