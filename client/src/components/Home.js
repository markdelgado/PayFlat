import '../styles/Home.css'
import { useNavigate } from 'react-router-dom'
import Promotion from './Promotion'
import Footer from './Footer'
import Button from 'react-bootstrap/esm/Button'
import PromotionSecond from './PromotionSecond'
import PromotionThird from './PromotionThird'

const Home = () => {
    const navigate = useNavigate()

    return(
        <div id="Hero">
            <div id="hero-container">
                <div id="hero-img-contaner">
                    <img id="hero-img" src="./photos/hero.jpg" alt="hero-img"/>
                </div>
                    <h2 >The Best Way to Collect Rent</h2>
                    <Button  variant='info' onClick={() => navigate('/sign-in')}>Sign In</Button>
            </div>
                <div>
                    <Promotion />
                    <PromotionSecond/>
                    <PromotionThird/>

                </div>
                <Footer/>
        </div>
    )
}

export default Home