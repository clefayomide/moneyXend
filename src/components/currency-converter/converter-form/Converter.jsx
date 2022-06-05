import { useState } from 'react'
import Input from '../input/Input'
import './converter.css'
import canada from '../../../assets/canada-flag.svg'
import brazil from '../../../assets/brazil-flag.svg'
import CurrencySelect from '../currency-select/CurrencySelect'


const Converter = ({ text, placeholder }) => {
    const [sendAmount, setSendAmount] = useState("")
    const [selectedCurrency, setSelectedCurrency] = useState([{
        name: "CAD",
        logo: canada,
    }])
    // eslint-disable-next-line
    const [currencies, setCurrencies] = useState([
        {
            name: "CAD",
            logo: canada,
        },
        {
            name: "BRL",
            logo: brazil,
        }
    ])
    return (
        <div className='converter-box-form' style={{ marginTop: `${placeholder === '3,900' ? '-1px' : ''}` }}>
            <div className="converter-box-send">
                <div className="converter-box-send-text">{text}</div>
                <Input value={sendAmount} valueOnChange={setSendAmount} placeholder={placeholder} />
            </div>

            <div className='converter-box-currency'>
                {selectedCurrency.map(({ name, logo }) => <div className='currency-flag-name-container' key={Math.random()}>
                    <img src={logo} alt={name} className="currency-flag" />
                    <div className="currency-name">{name}</div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi currency-bi-caret-down-fill" viewBox="0 0 16 16">
                        <path d="M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                    </svg>
                </div>)}
                <div className='currency-select'>
                    {currencies.map((currency) => <CurrencySelect data={currency} key={Math.random()} selected={selectedCurrency} onCurrencyChange={setSelectedCurrency} />)}
                </div>
            </div>
        </div >
    )
}

export default Converter