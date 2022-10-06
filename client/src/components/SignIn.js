import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { setValue } from '../redux/user';
import { useNavigate } from 'react-router-dom';
import '../styles/SignIn.css'


const Signin = () => {


    const user = useSelector((state) => state.user.value)
    const dispatch= useDispatch()  


const [form, setForm] = useState({});
const navigate = useNavigate()

let handleSubmit = async (e) => {
        e.preventDefault();
        console.log("form", form);

    let req = await fetch("http://localhost:3000/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accepts": "application/json"
            },
            body: JSON.stringify(form),
        })

       let res = await req.json() 
       
     
        
    localStorage.setItem("jwt", res.token);
    console.log('test',res)
    dispatch(setValue(res))
    navigate('/')
//       setCurrentUser({ 
//         ...currentUser, name: res.currentUser.first_name})
//    console.log(currentUser)
    };
    let updateForm = (e) => {
        setForm(
            {...form, [e.target.name]: e.target.value, });
            console.log("form", form)
    }
    

    return (
        <div id='form-container'>
            {/* <img id='signin-background' src='./photos/signin.jpeg'/> */}
            {/* <img id='signin-background' src='./photos/signin2.jpg'/> */}
            <img id='signin-background' src='./photos/signin3.jpeg'/>
        <Form onSubmit={handleSubmit}>

            
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control 
                name='email'
                type="email" 
                placeholder="Enter email"
                onChange={updateForm} />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control 
                name='password'
                type="password" 
                placeholder="Password"
                onChange={updateForm} />
            </Form.Group>
           
            <Button variant="info" type="submit" >
                Submit
            </Button>
            <br></br>
            <br></br>
            {console.log(user)}
            
        </Form>
        </div>
    );
}

export default Signin;








