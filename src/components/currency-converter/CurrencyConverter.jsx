// import { useState } from 'react'
import './currencyConverter.css'
import Notification from '../notification/Notification'
import Converter from './converter-form/Converter'
import Breakdown from '../breakdown/Breakdown'
import Profile from '../profile-pic/Profile'

const CurrencyConverter = () => {
    // const [loading, setLoading] = useState(true)

    // if(loading) return <div>Loading</div>
    return (
        <div className='currency-converter'>
            <Notification />
            <div>
                <div className='currency-converter-header'>Quick Currency Converter</div>
                <Converter text="You Send" placeholder="1,000"/>
                <Breakdown />
                <Converter text="They Receive" placeholder="3,900"/>
                <div className='currency-page-refresh'>This page is refreshed every 60 seconds</div>
                <button className='currency-send-amount'>Send this Amount</button>
                <div className='currency-converter-profile-card-container'>
                    <div className='currency-converter-profile-image-container'>
                        <Profile width="80px" height="80px"/>
                    </div>
                    <div className='currency-converter-profile-name'>Victor Olorunfemi</div>
                    <div className="currency-converter-profile-email">victor@ayomide.com</div>
                    <div className="currency-converter-profile-completion-status">50%  VERIFICATION</div>
                    <button className='currency-converter-profile-completion-button'>Complete Your Profile</button>
                </div>
            </div>
        </div>
    )
}

export default CurrencyConverter