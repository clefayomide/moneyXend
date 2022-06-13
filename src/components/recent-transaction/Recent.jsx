import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import CardLayout from '../../layout/db-card-layout/CardLayout'
import Profile from '../profile-pic/Profile'
import canada from '../../assets/canada-flag.svg'
import brazil from '../../assets/brazil-flag.svg'
import './recent.css'

const Recent = () => {
  const [activeIndex, setActiveIndex] = useState()
  const location = useLocation()
  // eslint-disable-next-line
  const [recentTransactions, setRecentTransactions] = useState([
    {
      name: "Jessica Hunter",
      transaction: [
        {
          sent: "1000 CAD",
          received: "3900 BRL",
        }
      ],
      date: "24/5/2022",
      status: "completed",
      exchangeRate: "5.90",
      amountBeforeFee: "970 CAD",
      amountAfterFee: "970 CAD"
    },

    {
      name: "Jessica Hunter",
      transaction: [
        {
          sent: "1000 CAD",
          received: "3900 BRL",
        }
      ],
      date: "24/5/2022",
      status: "completed",
      exchangeRate: "4.90",
      amountBeforeFee: "970 CAD",
      amountAfterFee: "970 CAD"
    },

    {
      name: "Jessica Hunter",
      transaction: [
        {
          sent: "1000 CAD",
          received: "3900 BRL",
        }
      ],
      date: "24/5/2022",
      status: "pending",
      exchangeRate: "6.90",
      amountBeforeFee: "970 CAD",
      amountAfterFee: "970 CAD"
    },
  ])

  const handleOnclick = (value) => {
    if (activeIndex === value) return setActiveIndex()
    setActiveIndex(value)
  }

  return (
    <CardLayout>
      <div className='recent-transaction-view-all-container'>
        <h3 className='recent-transaction-header'>{location.pathname !== "transactions" ? "Recent Transactions" : `Your Transactions (${recentTransactions.length})`}</h3>
        {location.pathname !== "transactions" && <div className="recent-transaction-view-all">View all</div>}
      </div>

      <div className='recent-transaction-scroller-container'>
        <div className="recent-transaction-scroller">
          {location.pathname !== "transactions" && <div className='recent-transaction-title'>
            <div className='recent-transaction-recipient'>RECIPIENT</div>
            <div className='recent-transaction-transaction'>TRANSACTION</div>
            <div className='recent-transaction-date'>DATE</div>
            <div className='recent-transaction-status'>STATUS</div>
          </div>}

          {recentTransactions.map(({ name, transaction, date, status, exchangeRate, amountBeforeFee, amountAfterFee }, index) => (<div className='transactions-container' key={Math.random()} style={{ backgroundColor: `${index === activeIndex ? 'rgb(237,242,252)' : ''}`, boxShadow: `${index === activeIndex ? '' : 'rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgb(217, 222, 235) 0px 0px 0px 1px'}` }}>
            <div className="transactions" style={{ marginTop: `${index === 0 ? '20px' : '10px'}` }}>
              <div className='transactions-profile-name-container'>
                <Profile width="30px" height="30px" />
                <div className='transaction-recipent-name'>
                  {name}
                </div>
              </div>
              <div className='transactions-sent-received-container'>
                {transaction.map(({ sent, received }) => <div className='transactions-sent-received' key={Math.random()}>
                  <div className="sent-text">{sent}</div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-right-fill" viewBox="0 0 16 16">
                    <path d="M12.14 8.753l-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                  </svg>
                  <div className="received-text">{received}</div>
                </div>
                )}
              </div>
              <div className='transactions-date-container'>
                <p className="transactions-date">
                  {date}
                </p>
              </div>
              <div className='transactions-status-accordion-btn-container'>
                <div className='transactions-status-accordion'>
                  <div className='transactions-status' style={{ border: `${status === 'completed' ? '1px solid rgb(15,197,120)' : '1px solid rgb(253,192,8)'}`, color: `${status === 'completed' ? 'rgb(18,157,118)' : 'rgb(221,182,125)'}`, backgroundColor: `${status === 'completed' ? 'rgb(207,244,228)' : 'rgb(255,243,205)'}` }}>
                    {status.toUpperCase()}
                  </div>
                  <button className='transaction-accordion-btn' onClick={() => handleOnclick(index)}>
                    {
                      index === activeIndex ? <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-up-fill" viewBox="0 0 16 16">
                        <path d="M7.247 4.86l-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z" />
                      </svg> :
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi transactions-bi-caret-down-fill" viewBox="0 0 16 16">
                          <path d="M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                        </svg>
                    }
                  </button>
                </div>
              </div>
            </div>
            {index === activeIndex && <div className='transactions-accordion-details'>
              <div className="transactions-country-logo">
                <img src={canada} alt="canadian flag" />
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-right-fill" viewBox="0 0 16 16">
                  <path d="M12.14 8.753l-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                </svg>
                <img src={brazil} alt="brazillian flag" />
              </div>

              <div className='transactions-ex-rate'>
                <small>Exchange Rate</small>
                <div>{exchangeRate}</div>
              </div>

              <div className="transactions-amount-before-fee">
                <small>Amount (Before Fee)</small>
                <div>{amountBeforeFee}</div>
              </div>

              <div className="transactions-amount-after-fee">
                <small>Amount (After Fee)</small>
                <div>{amountAfterFee}</div>
              </div>
            </div>}
          </div>))
          }
        </div>
      </div>
      {/* </div> */}
    </CardLayout >
  )
}

export default Recent