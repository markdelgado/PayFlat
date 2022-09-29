import React, {useEffect} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../styles/Login.css'

export default function Login() {
  
  useEffect(() => {
    const loginUser = async () => {
        let req = await fetch('http://localhost:300/login')
        let res = await req.json()
    }
  },[])
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    let req = await fetch('http:localhost:3000/login', {
        
    })
  }
  
    return (
    <div id='login-container'>
            <Form id='login-form' onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
   
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        
    </div>
  )
}
