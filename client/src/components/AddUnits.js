

import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Navigate, useNavigate } from 'react-router-dom';


function AddUnits({ landlord }) {
    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        price: '',
        lease_start_date: '',
        lease_end_date: '',
        sqft: '',
        bed: '',
        bath: '',
        vacant:''
    })

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log("FormData", formData);


        let req = await fetch('http://localhost:3000/properties', {
            method: 'POST',
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(formData)
        })
        let res = await req.json()

        navigate('/add-units')


        console.log(res)

    }
    // if (landlord) {
    //     console.log("landlord test", landlord)
    // }

    useEffect(() => {
        if (landlord) {
            console.log(landlord.id)
            setFormData({
                ...formData, landlord_id: landlord.id
            })

        }

    }, [landlord])

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });

    };

    return (
        <div id='form-container'>
            {/* <p>{console.log("form", formData)}</p> */}
            {/* <p>{console.log("landlord", landlord.id)}</p> */}
            <Form id='form-prop' onSubmit={handleSubmit}>
                <div>Add Units to the recently added property</div>



                <Form.Group className="mb-3" controlId="formGridAddress1">
                    <Form.Label>Price</Form.Label>
                    <Form.Control
                        placeholder="Amount"
                        type='number'
                        name='price'
                        value={formData.price}
                        onChange={handleChange} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGridAddress2">
                    <Row>
                    <Col>
                    <Form.Label>Bed </Form.Label>
                    <Form.Control
                        name='bed'
                        placeholder=""
                        type='number'
                        value={formData.bed}
                        onChange={handleChange}/>
                    </Col>

                     <Col>   
                        <Form.Label>Bath </Form.Label>
                        <Form.Control
                            name='bath'
                            placeholder=""
                            type='number'
                            value={formData.bath}
                            onChange={handleChange}
                        />
                    </Col>
                    </Row>
                </Form.Group>

                <Form.Group>
                    <Row>
                        <Col>
                            <Form.Label>Lease Start Date </Form.Label>
                            <Form.Control
                                name='lease_start_date'
                                
                                type='date'
                                value={formData.lease_start_date}
                                onChange={handleChange} />
                        </Col>

                        <Col>
                            <Form.Label>Lease End Date </Form.Label>
                            <Form.Control
                                name='lease_end_date'

                                type='date'
                                value={formData.lease_end_date}
                                onChange={handleChange}
                            />
                        </Col>
                    </Row>
                </Form.Group>
                <Form.Group>
                    <Form.Label></Form.Label>
                    <Form.Control
                    type='true'></Form.Control>
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
}

export default AddUnits;