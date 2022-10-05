import '../styles/UnitTable.css'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import {Link, Routes, Route, useNavigate} from 'react-router-dom';
import { useSelector } from 'react-redux'
import { useState } from 'react';





const UnitTable = ({property, landlord}) => {
//console.log('property', property)
const [selected, setSelected]= useState({

})

const user = useSelector((state) => state.user.value)


const handleChange = (e) => {
    e.preventDefault()
    setSelected(e.target.value)
}
console.log("selected", selected)
   


    return(
        <div id='unit'>
            <Form.Select value={selected} onChange={handleChange} aria-label="Default select example" id='prop-select'>
                <option>Select Properties</option>
                {/* <option value="1">{property.address}</option> */}
               
            </Form.Select>
                {landlord.properties?.map(property => {
                    // console.log(property)
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
                        <th>Vacant</th>
                        <th></th>
                    </tr>
                </thead>
                 <tbody>
                   
                      {property.units?.map(unit => (<tr> 
                        <td>{unit.tenant_id}</td>
                        <td>{unit.price}</td>
                        <td>Tenant</td>
                        <td>{unit.vacant.toString()}</td>
                        <td>
                        <Button variant="outline-info">View</Button>
                        </td>
                        {console.log('Unit', unit)}
                     </tr>))} 
                    
                    </tbody> 
                    
                
            </Table>

                        
                    )
                })}

        </div>
    )
}

export default UnitTable;