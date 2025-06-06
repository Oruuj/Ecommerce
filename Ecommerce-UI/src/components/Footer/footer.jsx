import React from 'react'
import './footer.scss'
import { BiLogoInstagramAlt } from "react-icons/bi";
import { FaTiktok } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const footer = () => {
    return (
        <div className="footer">
            <div className='footer-container flex flex-col'>
                <div className="footer-text flex flex-col items-center justify-between p-4 white xl:flex-row">
                    <div className="about flex flex-col gap-4">
                        <p className='title text-lg font-bold'>cyber</p>
                        <span>We are a residential interior design firm located in Portland. Our boutique-studio offers more than</span>
                    </div>
                    <div className="services flex flex-col gap-3">
                        <p className='title text-lg font-bold'>Services</p>
                        <p>Bonus program</p>
                        <p>Gift cards</p>
                        <p>Credit and payments</p>
                        <p>Service contracts</p>
                        <p>Non-cash account</p>
                        <p>Payment</p>
                    </div>
                    <div className="assistance flex flex-col gap-3">
                        <p className='title text-lg font-bold'>Assistance to the buyer</p>
                        <p>Find an order</p>
                        <p>Terms of delivery</p>
                        <p>Exchange and return of goods</p>
                        <p>Guarantee</p>
                        <p>Frequently asked questions</p>
                        <p>Terms of use of the site</p>
                    </div>
                </div>
                <div className="icons flex justify-between">
                    <FaSquareXTwitter className='icon'/>
                    <FaFacebookF className='icon' />
                    <FaTiktok className='icon'/>
                    <BiLogoInstagramAlt className='icon'/>
                </div>
            </div>
        </div>

    )
}

export default footer