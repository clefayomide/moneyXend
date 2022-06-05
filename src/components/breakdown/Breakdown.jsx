import './breakdown.css'

const Breakdown = () => {
    return (
        <div className='breakdown-container'>
            <div className='breakdown'>
                <div>
                    <div className='breakdown-arithmetic-symbol-container'>
                        <div className='breakdown-arithmetic-symbol'>-</div>
                    </div>
                    <div className='breakdown-arithmetic-symbol-container'>
                        <div className='breakdown-arithmetic-symbol'>=</div>
                    </div>
                    <div className='breakdown-arithmetic-symbol-container'>
                        <div className='breakdown-arithmetic-symbol'>÷</div>
                    </div>
                </div>

                <div>
                    <div className='breakdown-arithmetic-text-container'>
                        <div className='breakdown-arithmetic-text'>20.20 CAD <span className='breakdown-arithmetic-span-text'>Fee (Including IOF)</span></div>
                    </div>
                    <div className='breakdown-arithmetic-text-container'>
                        <div className='breakdown-arithmetic-text'>970.80 CAD <span className='breakdown-arithmetic-span-text'>Amount we'll convert</span></div>
                    </div>
                    <div className='breakdown-arithmetic-text-container'>
                        <div className='breakdown-arithmetic-text'>2,27361 <span className='breakdown-arithmetic-span-text'>Commercial rate (144 hrs)</span></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Breakdown