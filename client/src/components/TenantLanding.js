import React, { Component } from 'react'
import { useEffect, useState } from 'react';
import { Button } from 'bootstrap';

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
            <h2>Welcome Back {tenant.user?.first_name[0].toUpperCase() + tenant.user?.first_name.slice(1, tenant.user?.first_name.split('').length)}</h2>
            <p>Rent Due ${tenant.unit?.price}</p>
            <button>Pay</button>

        </div>
    )
}

export default TenantLanding;
