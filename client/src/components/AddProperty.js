import '../styles/AddProperty.css'
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Navigate, useNavigate } from 'react-router-dom';


function AddProperty({landlord, setSubmitProp, submitProp}) {
    const navigate = useNavigate()
  

    const [formData, setFormData]=useState({
        name: '',
        address: '',
        landlord_id: '',
        unit_count: ''
    })

    const handleSubmit = async (e) => {
        e.preventDefault()
         console.log("FormData", formData);


        let req = await fetch('http://localhost:3000/properties', {
            method:'POST',
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(formData)
        })
         let res = await req.json()
        
         setSubmitProp(res)
         navigate('/add-units' )
        console.log('res', res)
        

    }
    // if (landlord) {
    //     console.log("landlord test", landlord)
    // }

    useEffect(() => {
        if (landlord){
            //console.log(landlord.id)
            setFormData({
                ...formData, landlord_id: landlord.id
            })

        }
        
    },[landlord])

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
       
    };

    return (
        <div id='form-container'>
            {/* <p>{console.log("form", formData)}</p> */}
            {/* <p>{console.log("landlord", landlord.id)}</p> */}
        <Form id='form-prop' onSubmit={handleSubmit}>
            <div>Add A New Property</div>
            <p>{`${submitProp.id}`}!!!!</p>

            <Form.Group className="mb-3" controlId="formGridAddress1">
                <Form.Label>Property Name</Form.Label>
                <Form.Control
                 placeholder="Flatiron Building" 
                 name='name'
                 value={formData.name} 
                 onChange={handleChange}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGridAddress2">
                <Form.Label>Address </Form.Label>
                <Form.Control 
                name='address' 
                placeholder="123 Main st, New York NY 10001"
                value={formData.address} 
                onChange={handleChange}
                />
            </Form.Group>

           <Form.Group>
            <Form.Control 
            name='unit_count' 
            type='number'
            placeholder='How many units'
            value={formData.unit_count}
            onChange={handleChange}/>
           </Form.Group>

            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
        </div>
    );
}


export default AddProperty;


