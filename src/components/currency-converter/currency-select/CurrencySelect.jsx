import './currencySelect.css'

const CurrencySelect = ({ data, selected, onCurrencyChange }) => {
    const { name, logo } = data
    return (
        <button className={`currency-select-name-logo`} onClick={() => onCurrencyChange([data])}>
            <img src={logo} alt={name} className="currency-select-logo" />
            <div className="currency-select-name">{name}</div>
        </button>
    )
}

export default CurrencySelect