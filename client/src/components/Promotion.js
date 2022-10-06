import '../styles/Promotion.css'
import Button from 'react-bootstrap/esm/Button'
import { useNavigate } from 'react-router-dom'
const Promotion = () => {
    const navigate = useNavigate()
    return(
        <div id="promotion-container">
            <img id="promotion1-img" src="./photos/promotion1.jpg" alt="hero-img" />
           <div id='text-container'>
            <h2>Made to be Simple</h2>
            <p>Designed for independant landlords, 
                No hidden fees, No minimum number of units
                <br/>
                Our intuitive landlord dashboard make it very easy to 
                view all properties and set data for each unit.
                </p>   
                <Button onClick={() => navigate('/sign-in')} id='get-started' variant='info'>Get Started</Button>
           </div>

        </div>
    )
}

export default Promotion