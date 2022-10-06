import '../styles/UnitTable.css'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import {Link, Routes, Route, useNavigate} from 'react-router-dom';
import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';





const UnitTable = ({ setPatchUnit, landlord, setArrSum, setAddUnit, setSubmitProp }) => {
//console.log('property', property)
const navigate = useNavigate()
const [selected, setSelected]= useState({
})

let arr = []
let sum = 0

useEffect(() => {

    
    for (let i = 0; i < arr.length; i++){
        sum += arr[i] 
        setArrSum(sum)
    }
    
},[arr])



const user = useSelector((state) => state.user.value)


   
    return(
        <div id='unit'>
            
                {landlord.properties?.map(property => {
                    
                    const handleClick = (e) => {
                        e.preventDefault()
                        console.log('prop', property)
                        setSubmitProp(property)
                        navigate('/add-units')
                    }
                    return(
                    
            <Table  striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th colSpan={5}>{property.address}</th>
                    </tr>
                    <tr>
                        <th>Unit #</th>
                        <th>Price</th>
                        <th>Tenant</th>
                        <th>Tenant Phone Number</th>
                        <th></th>
                    </tr>
                </thead>
                 <tbody>
                   
                      {property.units?.map(unit => {
                        arr.push(parseInt(unit.price))
    
                        const handleClick= (e) => {
                            e.preventDefault()
                            
                            setPatchUnit(unit)
                            navigate('/edit-unit')
                            
                        }
                          const popover = (
                              <Popover id="popover-basic">
                                  <Popover.Header as="h3">Apartment Information</Popover.Header>
                                  <Popover.Body>
                                     <p>bed:{unit.bed}</p>
                                     <p>bath:{unit.bath}</p>
                                     <p>sqft:{unit.sqft}</p>
                                     <p>Lease Start Date:{unit.lease_start_date}</p>
                                     <p>Lease End Date:{unit.lease_end_date}</p>
                                     <p>vacant:{unit.vacant.toString()}</p>
                                  </Popover.Body>
                              </Popover>
                          );
                          return( 
                              <tr> 
                        <td>{unit.apartment_num}</td>
                        <td>{unit.price}</td>
                        <td>{unit.tenant_name}</td>
                        {/* <td>{unit.vacant.toString()}</td> */}
                        <td>{unit.tenant_phone}</td>
                        <td>
                          {/* {console.log('unit', unit)} */}
                        <Button  onClick={handleClick} variant="outline-info">Edit</Button>
                         <OverlayTrigger trigger="click" placement="right" overlay={popover}>
                            <Button variant="outline-info">View</Button>
                         </OverlayTrigger>
                        </td>
                        {/* {console.log('Unit', unit)} */}
                     </tr>
                     
                     )}
                     )} 
                     <tr>
                    <th colSpan={5}>


                     <Button id='add-button' variant='outline-info' onClick={handleClick}>Add Units</Button>
                        </th>
                     </tr>
                    
                    </tbody> 
                    
                
            </Table>

                        
                    )
                })}

        </div>
    )
}

export default UnitTable;