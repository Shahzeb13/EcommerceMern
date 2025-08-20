import {useState} from 'react';
import axios from 'axios';
import Form from '../Components/Form.jsx'
const Register = () => {
    const [formData , setFormData] = useState({
        username: "",
        email : "",
        password : ""
    });

    const [loading , setLoading] = useState(false);
    const [error , setError] = useState(null);
    const [success , setSuccess] = useState(null);
    
    const handleRegister =async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        setSuccess(null)
        try {
            const response = await axios.post("http://localhost:5000/api/auth/register" , formData ,{
                withCredentials: true
            });


            setSuccess("Data Submitted Successfully");
            console.log(`Response : ${JSON.stringify(response.data , null , 2)}`)
            alert(response.data.message);
        }
        catch(err){
            if(err.response){
                setError(`Error: ${err.response.data.message}`);
                alert(err.response.data.message);
            }
            else if(err.request){
                setError(`No response from the server. Please Try Again later`);
            }

            else{
                setError(`Something Went wrong. Please Try again later`);
            }
        }
        finally{
            setLoading(false);
        }
    }




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

export default Register;