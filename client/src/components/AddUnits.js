

import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Navigate, useNavigate } from 'react-router-dom';


function AddUnits({ landlord, submitProp, addUnit}) {
    const navigate = useNavigate()
console.log("test",submitProp)
    const [formData, setFormData] = useState({
        price: '',
        lease_start_date: '',
        lease_end_date: '',
        sqft: '',
        bed: '',
        bath: '',
        vacant:false,
        property_id: submitProp.id,
        tenant_name: '',
        tenant_phone: '',
        apartment_num: ''
    })

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log("FormData", formData);


        let req = await fetch('http://localhost:3000/units', {
            method: 'POST',
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(formData)
        })
        let res = await req.json()
        navigate('/dashboard')

       


        console.log(res)

    }
   

    // useEffect(() => {
    //     if (landlord) {
    //         console.log(landlord.id)
    //         setFormData({
    //             ...formData, landlord_id: landlord.id
    //         })

    //     }

    // }, [landlord])

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });

    };

    return (
        <div id='form-container'>
            <p>{console.log("form", formData)}</p> 
            {/* <p>{console.log("landlord", landlord.id)}</p> */}
            <Form id='form-prop' onSubmit={handleSubmit}>
                {/* <p>{submitProp.id}!!!!</p> */}
                <p>Please Add Unit Information</p>
                <div>Add Units to the recently added property</div>



                <Form.Group className="mb-3" controlId="formGridAddress1">
                    <Row>
                        <Col>
                    <Form.Label>Price</Form.Label>
                    <Form.Control
                        placeholder="Amount"
                        type='number'
                        name='price'
                        value={formData.price}
                        onChange={handleChange} />
                        </Col>

                        <Col>
                            <Form.Label>Apartment Number</Form.Label>
                            <Form.Control
                                placeholder="#"
                                name='apartment_num'
                                value={formData.apartment_num}
                                onChange={handleChange} />
                        </Col>

                    </Row>
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
                        <Col>
                            <Form.Label>Sqft </Form.Label>
                            <Form.Control
                                name='sqft'
                                placeholder=""
                                type='number'
                                value={formData.sqft}
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
                    <br></br>
                    <Form.Group>
                    <Row>
                        <Col>
                        <Col>
                        <Form.Label>Tenant Information</Form.Label>
                            </Col>
                        <Form.Control
        
                        placeholder='name'
                        name='tenant_name'
                        value={formData.tenant_name}
                        onChange={handleChange}/>
                        </Col>
                
                        <Col>
                            <Form.Label>Phone Number</Form.Label>
                        <Form.Control
                            placeholder='(888)888-8888'
                            name='tenant_phone'
                            value={formData.tenant_phone}
                            onChange={handleChange} />
                        </Col>
                    </Row>
                    </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
}

export default AddUnits;