import '../styles/Promotion.css'
import Button from 'react-bootstrap/esm/Button'
import { useNavigate } from 'react-router-dom'
const Promotion = () => {
    const navigate = useNavigate()
    return (
        <div id="promotion-container">
            <img id="promotion1-img" src="./photos/promotion3.jpg" alt="hero-img" />
            <div id='text-container'>
                <h2>Time is money</h2>
                <p>You can even require renters to have a recurring scheduled payment.

                    No more picking up cash or checks, waiting for the mail, or trips to the bank. Our property management software can handle it all, so you don’t have to.
                </p>
                <Button onClick={() => navigate('/sign-in')} id='get-started' variant='info'>Get Started</Button>
            </div>

        </div>
    )
}

export default Promotion