import '../styles/Dashboard.css'
import Table from 'react-bootstrap/Table';
import UnitTable from './UnitTable'
import { useSelector } from 'react-redux'
import Button from 'react-bootstrap/esm/Button';
import AddProperty from './AddProperty';
import Nav from 'react-bootstrap/Nav'
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';


const Dashboard = ({ property}) => {
    const navigate = useNavigate()
    const [landlord, setLandlord]= useState('')
    const user = useSelector((state) => state.user.value)
    let arr = []
    
    
    useEffect(() => {
        const getLandlord = async () => {
            let req = await fetch(`http://localhost:3000/landlords/${user.landlord.id}`)
            let res = await req.json()
            // console.log("RES", res)
            setLandlord(res)
            
        }
        getLandlord()
    }, [user])
    
    if (!user.first_name) return (<></>)
   

    return (
        <div id="dashboard-container">
         
            <h2>Welcome back {user?.first_name[0].toUpperCase() + user?.first_name.slice(1, user?.first_name.split('').length)}</h2>
            
                <br/>

            <div id='quick-numbers'>
            
                <Table   id='dashboard-table' striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            
                            <th>Rent</th>
                            <th>OverDue</th>
                            <th>Recieved</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            
                            <td>$24,000</td>
                            <td>$1500</td>
                            <td>$22,500</td>
                        </tr>
                        
                    </tbody>
                </Table>
                <UnitTable  landlord={landlord}/>

                {/* <Button onclick={() => navigate('/add-property') } >Add Properties</Button> */}
                <Nav.Link href="/add-property">Add Property</Nav.Link>

            </div>

        </div>
    )
}

 export default Dashboard;