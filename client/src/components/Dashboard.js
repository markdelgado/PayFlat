import '../styles/Dashboard.css'
import Table from 'react-bootstrap/Table';
import UnitTable from './UnitTable'


const Dashboard = ({landlord, property}) => {
 let fname = landlord.user?.first_name.split('')


    return (
        <div id="dashboard-container">
            <h2>Welcome back {landlord.user?.first_name[0].toUpperCase() + landlord.user?.first_name.slice(1, landlord.user?.first_name.split('').length)}</h2>
            <p>{console.log("landlord", landlord)}</p>
            <div id='quick-numbers'>
                <br></br>
            
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
                <UnitTable  property={property}/>
            </div>

        </div>
    )
}

 export default Dashboard;