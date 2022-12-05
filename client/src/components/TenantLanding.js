import React, { Component } from 'react'
import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import {Card} from 'react-bootstrap'
import  '../styles/TenantLanding.css'

const TenantLanding = () => {
    const [tenant, setTenant]= useState('')
    
    useEffect(() => {
        const getTenant = async () => {
            let req = await fetch(`http://localhost:3000/tenants/1`)
            let res = await req.json()
            
            setTenant(res)
        }
        getTenant()
    },[])
     console.log("tenant",tenant)
    //  console.log("test", tenant.user.first_name)

    return(
        <div>
            {/* <h2>Welcome Back {tenant.user?.first_name[0].toUpperCase() + tenant.user?.first_name.slice(1, tenant.user?.first_name.split('').length)}</h2>
            <p>Rent Due ${tenant.unit?.price}</p> */}
            {/* <a href="https://buy.stripe.com/test_00g6p9133eiO0XS6oo" target="_blank" rel="noreferrer">
                <button>My custom button</button>
                </a> */}
            {/* <button >Pay</button> */}
            <Card className="text-center">
                <Card.Header>Welcome Back {tenant.user?.first_name[0].toUpperCase() + tenant.user?.first_name.slice(1, tenant.user?.first_name.split('').length)}</Card.Header>
                <Card.Body>
                    <Card.Title>Rent Due ${tenant.unit?.price}</Card.Title>
                    <Card.Text>
                        With supporting text below as a natural lead-in to additional content.
                    </Card.Text>
                    <Button variant="primary" href='https://buy.stripe.com/test_00g6p9133eiO0XS6oo'>Pay</Button>
                </Card.Body>
                {/* <Card.Footer className="text-muted">2 days ago</Card.Footer> */}
            </Card>
          

        </div>
    )
}

export default TenantLanding;
