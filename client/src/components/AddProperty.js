import '../styles/AddProperty.css'
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';


function AddProperty({landlord}) {

    const [formData, setFormData]=useState({
        name: '',
        address: '',
        landlord_id: '',
        unit_count: ''
    })

    const handleSubmit = (e) =>{
        e.preventDefault()
         console.log("FormData", formData)

    }
    // if (landlord) {
    //     console.log("landlord test", landlord)
    // }

    useEffect(() => {
        if (landlord){
            console.log(landlord.id)
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


