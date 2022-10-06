import '../styles/Dashboard.css'
import Table from 'react-bootstrap/Table';
import UnitTable from './UnitTable'
import { useSelector } from 'react-redux'
import Button from 'react-bootstrap/esm/Button';
import AddProperty from './AddProperty';
import Nav from 'react-bootstrap/Nav'
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Badge from 'react-bootstrap/Badge';


const Dashboard = ({ property, setPatchUnit, setAddUnit , setSubmitProp}) => {
    const navigate = useNavigate()
    const [landlord, setLandlord]= useState('')
    const [arrSum, setArrSum] = useState()
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
            
            <h2>Welcome, {user?.first_name[0].toUpperCase() + user?.first_name.slice(1, user?.first_name.split('').length)}</h2>
                <img id="dashboard-img" src="./photos/dashboard.jpg" alt="hero-img" />
                <br/>

            <div id='quick-numbers'>
            
                <Table   id='dashboard-table' striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            
                            <th>
                                <h5>Rent</h5>
                            </th>
                            <th>
                                <h5>OverDue</h5>
                            </th><th>
                                <h5>Recieved</h5>
                            </th>
                           
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            
                            <td>
                                <h4>
                                <Badge bg="info">${arrSum}</Badge>
                        </h4>
                                </td>
                            <td >
                                <h4>
                                <Badge  bg="danger">$2500</Badge>
                                </h4>
                            </td>
                            <td>
                                <h4>
                                    <Badge bg="success">$17500</Badge> 
                                </h4>
                            </td>
                        </tr>
                        
                    </tbody>
                </Table>
                <UnitTable setPatchUnit={setPatchUnit} landlord={landlord} setArrSum={setArrSum} setAddUnit={setAddUnit} setSubmitProp={setSubmitProp} />

                <Nav.Link href="/add-property">Add Property</Nav.Link>

                {/* <Button id='add-prop-btn' variant='success' onclick={() => navigate('/add-property') } >Add Properties</Button> */}
            </div>

        </div>
    )
}

 export default Dashboard;