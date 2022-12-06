import React, { Component } from 'react'
import { useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';
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

    return(
        <div>
           
            <img id='wallpaper-img' src='../photos/wallpaper.webp' />
            <Card className="text-center">
                <Card.Header className='header-tenant'>
                    Welcome Back {tenant.user?.first_name[0].toUpperCase() + tenant.user?.first_name.slice(1, tenant.user?.first_name.split('').length)}
                </Card.Header>
                <Card.Body>
                    <Card.Title>Rent Due: ${tenant.unit?.price}</Card.Title>
                    <Card.Text>
                        Not including upcoming charges and credits
                    </Card.Text>
                    <Button variant="primary" href='https://buy.stripe.com/test_00g6p9133eiO0XS6oo'>Pay</Button>
                </Card.Body>

            </Card>
                <br/>
            <Card className="text-center">
                
                <Card.Body className='header-transactions'>
                   Acccount Transactions
                </Card.Body>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                           
                            <th>Date</th>
                            <th>Type</th>
                            <th>Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            
                            <td>09-01-2022</td>
                            <td>Rent</td>
                            <td>$2500</td>
                        </tr>
                        <tr>
                           
                            <td>08-01-2022</td>
                            <td>Rent</td>
                            <td>$2500</td>
                        </tr>
                        <tr>
                            <td>07-01-2022</td>
                            <td>Credit</td>
                            <td>$500</td>
                        </tr>

                        <tr>
                            <td>06-01-2022</td>
                            <td>Security deopsit</td>
                            <td>$2500</td>
                        </tr>
                    </tbody>
                </Table>
            </Card>
          

        </div>
    )
}

export default TenantLanding;
