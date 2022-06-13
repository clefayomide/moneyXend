import Btn from '../btn/db-send-money/Btn'
import CardLayout from '../../layout/db-card-layout/CardLayout'
import Card from '../report/Card'
import './db.css'
import Recent from '../recent-transaction/Recent'
import Profile from '../profile-pic/Profile'

const DB = () => {
    return (
        <>
            <CardLayout>
                <div className='card'>
                    <h3 className='card-header'>Send Again</h3>
                    <div className='card-info'>
                        <div className='profile-image-receiver-details-container'>
                            <div className='profile'>
                                <Profile width="60px" height="50px" />
                                {/* flag here */}
                            </div>
                            <div className='receiver-details'>
                                <div className='name'>Alex Hunter</div>
                                <small className='gmail'>Alexhunter@gmail.com</small>
                            </div>
                        </div>

                        <div className='amount-send-btn-container'>
                            <div className='amount'>
                                <div>
                                    <div className='amount-container'>
                                        <div className='sent'>1000 CAD</div>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-right-fill" viewBox="0 0 16 16">
                                            <path d="M12.14 8.753l-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                                        </svg>
                                        <div className='received'>3900 BRL</div>
                                    </div>
                                    <small className='last-transaction'>Last Transaction</small>
                                </div>
                            </div>
                            <div className='btn-container'>
                                <Btn />
                            </div>
                        </div>
                    </div>
                </div>
            </CardLayout>

            <div className='aval-credit-total-transaction'>
                <div className='aval-credit'>
                    <Card text="13,750.00 NGN" header="AVAILABLE CREDIT" icon={[<svg key={Math.random()} xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-wallet2 wallet" viewBox="0 0 16 16">
                        <path d="M12.136.326A1.5 1.5 0 0 1 14 1.78V3h.5A1.5 1.5 0 0 1 16 4.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 13.5v-9a1.5 1.5 0 0 1 1.432-1.499L12.136.326zM5.562 3H13V1.78a.5.5 0 0 0-.621-.484L5.562 3zM1.5 4a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-13z" />
                    </svg>]} />
                </div>

                <div className='total-transaction'>
                    <Card text="1,133,750.00 NGN" header="TOTAL TRANSACTIONS" icon={[<svg key="clock" xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-clock-history" viewBox="0 0 16 16">
                        <path d="M8.515 1.019A7 7 0 0 0 8 1V0a8 8 0 0 1 .589.022l-.074.997zm2.004.45a7.003 7.003 0 0 0-.985-.299l.219-.976c.383.086.76.2 1.126.342l-.36.933zm1.37.71a7.01 7.01 0 0 0-.439-.27l.493-.87a8.025 8.025 0 0 1 .979.654l-.615.789a6.996 6.996 0 0 0-.418-.302zm1.834 1.79a6.99 6.99 0 0 0-.653-.796l.724-.69c.27.285.52.59.747.91l-.818.576zm.744 1.352a7.08 7.08 0 0 0-.214-.468l.893-.45a7.976 7.976 0 0 1 .45 1.088l-.95.313a7.023 7.023 0 0 0-.179-.483zm.53 2.507a6.991 6.991 0 0 0-.1-1.025l.985-.17c.067.386.106.778.116 1.17l-1 .025zm-.131 1.538c.033-.17.06-.339.081-.51l.993.123a7.957 7.957 0 0 1-.23 1.155l-.964-.267c.046-.165.086-.332.12-.501zm-.952 2.379c.184-.29.346-.594.486-.908l.914.405c-.16.36-.345.706-.555 1.038l-.845-.535zm-.964 1.205c.122-.122.239-.248.35-.378l.758.653a8.073 8.073 0 0 1-.401.432l-.707-.707z" />
                        <path d="M8 1a7 7 0 1 0 4.95 11.95l.707.707A8.001 8.001 0 1 1 8 0v1z" />
                        <path d="M7.5 3a.5.5 0 0 1 .5.5v5.21l3.248 1.856a.5.5 0 0 1-.496.868l-3.5-2A.5.5 0 0 1 7 9V3.5a.5.5 0 0 1 .5-.5z" />
                    </svg>]} />
                </div>
            </div>

            <div className='recent-transactions-container'>
                <Recent />
            </div>
        </>
    )
}

export default DB