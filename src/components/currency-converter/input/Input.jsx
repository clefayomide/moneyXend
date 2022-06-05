import './input.css'

const Input = ({ value, valueOnChange, placeholder }) => {
    return (
        <div className='converter-input-container'>
            <input className='converter-input' placeholder={placeholder} value={value} onChange={(e) => valueOnChange(e.target.value)} required />
        </div>
    )
}

export default Input