import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <div className='footerbody'>

<footer className="footer">
        <div className="container">
            <div className="footer-column">
                <h3>SUBSCRIBE TO OUR NEWSLETTER</h3>
                <p>Lorem Ipsum Dolor Sit Amet. Aut Ipsam Illum Et Nostrum Quidem Aut Necesbus Enim</p>
                <input type="email" placeholder="Enter Your Email Address" />
                <button>SUBSCRIBE</button>
            </div>
            <div className="footer-column">
                <h3>ABOUT US</h3>
                <ul>
                    <li>Our Story</li>
                    <li>Blogs</li>
                    <li>Careers</li>
                    <li>Contact Us</li>
                    <li>Help & Support</li>
                </ul>
            </div>
            <div className="footer-column">
                <h3>OUR SERVICES</h3>
                <ul>
                    <li>Book Maali</li>
                    <li>Plant Day Care</li>
                    <li>Rent Plants</li>
                    <li>Plants & Pots</li>
                    <li>Gardening Tools</li>
                </ul>
            </div>
            <div className="footer-column">
                <h3>USEFUL LINKS</h3>
                <ul>
                    <li>My Account</li>
                    <li>Orders & Returns</li>
                    <li>Track Order</li>
                    <li>Terms & Conditions</li>
                    <li>Privacy Policy</li>
                    <li>Return, Refund & Replacement Policy</li>
                </ul>
            </div>
            <div className="footer-column">
                <h3>GET IN TOUCH</h3>
                <p>Address: F-262, First Floor, Sushant Lok Phase-III, Sector-57, Gurgaon, Haryana, India 122003</p>
                <p>Call: +919958287272</p>
                <p>Email: care@chaperoneplants.com</p>
            </div>
        </div>
        <div className="footer-bottom">
            <p>CHAPERONE</p>
            <p className='footersecond-2'>Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum quidem aut necessitatibus enim ut internos accusantium a numquam autem ab rerum omnis. Non molestiae ratione et laborum doloribus aut molestiae voluptates ut porro excepturi sit molestiae obcaecati qui quis beatae est voluptatem eius. Et architecto nihil id labore omnis hic iste deleniti et porro aspernatur.</p>
            <div className="social-icons">
                <i className="instagram"><a href="https://www.instagram.com/chaperoneplants/?utm_source=ig_web_button_share_sheet&igshid=ZDNlZDc0MzIxNw%3D%3D" ><img src="/assets/inst.png" alt='inst.png' /></a> </i>
                <i className="facebook"><a href="https://www.facebook.com/" ><img src="/assets/facebook.png" alt='facebook.png' /></a></i>
                <i className="facebook"><a href="https://www.threads.net/login" ><img src="/assets/otherimg.png" alt='threads.png' /></a></i>
                <i className="youtube"><a href="https://www.youtube.com/" ><img src="/assets/youtube.png" alt='youtube.png' /></a></i>
                <i className="linkedin"><a href="https://www.linkedin.com/company/chaperone-plants/" ><img src="/assets/linked.png" alt='linked.png' /></a></i>
            </div>
            <div className='footer-last-content'>
            <p>© 2023, chaperone.com All rights reserved.</p></div>
        </div>
    </footer>


    </div>
  )
}

export default Footer