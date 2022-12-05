import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Navigate, useNavigate } from 'react-router-dom';
import Alert from 'react-bootstrap/Alert';


function EditUnit({ landlord, submitProp, patchUnit}) {
    // console.log("patchUnit", patchUnit)
    const navigate = useNavigate()
    const [show, setShow] = useState(false);

    const [formData, setFormData] = useState({
        price: patchUnit.price,
        lease_start_date: patchUnit.lease_start_date,
        lease_end_date: patchUnit.lease_end_date,
        sqft: patchUnit.sqft,
        bed: patchUnit.bed,
        bath: patchUnit.bath,
        vacant: false,
        property_id: patchUnit.property_id,
        tenant_name: patchUnit.tenant_name,
        tenant_phone: patchUnit.tenant_phone,
        apartment_num: patchUnit.apartment_num
    })

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log("FormData", formData);


        let req = await fetch(`http://localhost:3000/units/${patchUnit.id}`, {
            method: 'PATCH',
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
            <img id='wallpaper-img' src='../photos/wallpaper.webp' />
            <Form id='form-prop' onSubmit={handleSubmit}>
              
                <h2>Please provide the new information</h2>



                <Form.Group className="mb-3" controlId="formGridAddress1">
                    <Row>
                        <Col>
                            <Form.Label>Price</Form.Label>
                            <Form.Control
                                placeholder='Amount'
                                type='number'
                                name='price'
                                value={formData.price}
                                onChange={handleChange} />
                        </Col>

                        <Col>
                            <Form.Label>Apartment Number</Form.Label>
                            <Form.Control
                                placeholder=""
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
                                onChange={handleChange} />
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

                                placeholder='Name'
                                name='tenant_name'
                                value={formData.tenant_name}
                                onChange={handleChange} />
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


                
                    <Alert show={show} variant="success">
                        <Alert.Heading>Unit Information Successfully Updated!!</Alert.Heading>
                       
                        <hr />
                        <div className="d-flex justify-content-end">
                            <Button onClick={() => setShow(false)} variant="outline-success">
                                Edit Information
                            </Button>
                            <Button onClick={() => navigate('/dashboard')} variant="outline-success">
                                Go back to Dashboard
                            </Button>
                        </div>
                    </Alert>
                <br></br>
                <Button variant="info" type="submit" >
                    Submit
                </Button>

                    {/* {!show && <Button variant='primary' type='submit' onClick={() => setShow(true)}>Submit</Button>} */}
                
            </Form>
        </div>
    );
}

export default EditUnit;