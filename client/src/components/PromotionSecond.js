import '../styles/PromotionSecond.css'
import Button from 'react-bootstrap/esm/Button'
import { Navigate, useNavigate } from 'react-router-dom'
const Promotion = () => {
    const navigate = useNavigate()
    return (
        <div id="promotion2-container">
            <div id='text-container'>

                <h2>Safe and Secure</h2>
                <p>A secure way to accept electronic rent payments while maintaining 
                    privacy and safety. Accept credit cards or bank transfers from any U.S-based bank or 
                    credit union without giving away any personal information to tenants.
                    <br />
                   
                </p>
                <Button  onClick={() => navigate('/sign-in')} id='get-started' variant='info'>Get Started</Button>
            </div>
            <img id="promotion2-img" src="./photos/promotion2.jpg" alt="hero-img" />

        </div>
    )
}

export default Promotion