import '../styles/Footer.css'
const Footer = () => {
    return (
        <div id='footer' >
            <div id='footer-con'>
                {/* <img id="dashboard-img" src="./photos/dashboard.jpg" alt="hero-img" /> */}
                <img src='./photos/logo.png' width="25%"
                    height="25%"  margin-left='25px'alt='.png' />
                <ul id='help'>
                    <h3>Support</h3>
                    <li>Help Center</li>
                    <li>Contact PayFlat Support</li>
                    <li>Privacy settings</li>
                </ul>
             
                <ul id='footer-sell'>
                    <h3>Landlord Tenant Laws</h3>
                    <li>Teams</li>
                    <li>Forums</li>
                    <li>Affiliates</li>
                </ul>
                <ul id='footer-about'>
                    <h3>About</h3>
                    <li>PayFlat, Inc.</li>
                    <li>Policies</li>
                    <li>Investors</li>
                    <li>Careers</li>
 
                </ul>
            </div>
  
        </div>
    )
}

export default Footer