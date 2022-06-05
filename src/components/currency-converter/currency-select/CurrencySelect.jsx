import './currencySelect.css'

const CurrencySelect = ({ data, selected, onCurrencyChange }) => {
    // const { name: selectedCountryName } = selected
    // console.log(selectedCountryName)
    const { name, logo } = data
    // console.log(selected)
    return (
        <button className={`currency-select-name-logo`} onClick={() => onCurrencyChange([data])}>
            <img src={logo} alt={name} className="currency-select-logo" />
            <div className="currency-select-name">{name}</div>
        </button>
    )
}

export default CurrencySelect