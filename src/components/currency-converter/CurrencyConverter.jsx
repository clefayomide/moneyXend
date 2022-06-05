// import { useState } from 'react'
import './currencyConverter.css'
import Notification from '../notification/Notification'
import Converter from './converter-form/Converter'
import Breakdown from '../breakdown/Breakdown'

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
            </div>
        </div>
    )
}

export default CurrencyConverter