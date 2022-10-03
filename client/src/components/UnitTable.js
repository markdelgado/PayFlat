import '../styles/UnitTable.css'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'



const UnitTable = ({property}) => {
console.log('property', property)





    return(
        <div id='unit'>
            <Form.Select aria-label="Default select example" id='prop-select'>
                <option>All Properties</option>
                <option value="1">{property.address}</option>
               
            </Form.Select>
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
                    {/* <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr> */}
                    {property.units?.map(unit => (<tr> 
                        <td>{unit.tenant_id}</td>
                        <td>{unit.price}</td>
                        <td>Tenant</td>
                        <td>{unit.vacant.toString()}</td>
                        <td>
                            <Button variant="outline-info">View</Button>
                        </td>
                        {console.log('Unit', unit.vacant)}
                    </tr>))}
                </tbody>
            </Table>

        </div>
    )
}

export default UnitTable;