import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { setValue } from '../redux/user';


const Signin = () => {

    const user = useSelector((state) => state.user.value)
    const dispatch= useDispatch()  


const [form, setForm] = useState({});


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
        <Form onSubmit={handleSubmit}>
            <h1>{!user.first_name ? "USER" : user.first_name}</h1>
            
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
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
            <br></br>
            <br></br>
            {console.log(user)}
            <Button
                onClick={() => {
                    localStorage.clear();
                    dispatch(setValue({})) 
                    
                }}
            >
                LOG OUT
            </Button>
        </Form>
    );
}

export default Signin;








