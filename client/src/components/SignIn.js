import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useEffect } from 'react';


const Signin = () => {
const [user, setUser] = useState({ name: "" });
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
      setUser({ 
        ...user, name: res.user.first_name})
   
    };
    let updateForm = (e) => {
        setForm(
            {...form, [e.target.name]: e.target.value, });
            console.log("form", form)
    }
    useEffect(() => {
        let token = localStorage.getItem("jwt");
        if (token && !user.name) {
            fetch("http://127.0.0.1:3000/profile", {
                headers: {
                    token: token,
                    "Content-Type": "application/json",
                },
            })
                .then((res) => res.json())
                .then((data) => {
                    setUser({
                        name: data.first_name,
                    });
                });
        }
    }, []);

    return (
        <Form onSubmit={handleSubmit}>
            <h1>{!user.name ? "USER" : user.name}</h1>
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
            <Button
                onClick={() => {
                    localStorage.clear();
                    setUser({
                        name: "",
                    });
                }}
            >
                LOG OUT
            </Button>
        </Form>
    );
}

export default Signin;








