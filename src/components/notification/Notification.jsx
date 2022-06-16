import Profile from '../profile-pic/Profile'
import './notification.css'
import { Link } from 'react-router-dom'

const Notification = () => {

    return (
        <>
            <div className='notification-container'>
                <div className='notification-icon-wrapper'>
                    <div className='notification-bell-container dropDown' >
                        <div className='dropDown-btn'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-bell" viewBox="0 0 16 16">
                                <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z" />
                            </svg>
                            <div className='notification-sign'></div>
                        </div>
                        <div className='dropDown-content-notification'>
                            <div className='link'>
                                <div className='notification-blue-header'></div>
                                <Link to="/" className="anchor-link">
                                    <div className='notification-link'>
                                        Show Notification
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className='dropDown profile-dropDown'>
                        <div className='profile-name-navDown-container dropDown-btn'>
                            <Profile width="25px" height="25px" />
                            <div className='account-owner-name'>Alexia Hunter</div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-down-fill" viewBox="0 0 16 16">
                                <path d="M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                            </svg>
                        </div>
                        <div className='dropDown-content-profile'>
                            <div className='link user-link'>
                                <Link to="/" className='anchor-link'>
                                    <div className='profile-link'>
                                        Show Profile
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" className="bi bi-text-indent-right" viewBox="0 0 16 16">
                        <path d="M2 3.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm10.646 2.146a.5.5 0 0 1 .708.708L11.707 8l1.647 1.646a.5.5 0 0 1-.708.708l-2-2a.5.5 0 0 1 0-.708l2-2zM2 6.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 3a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z" />
                    </svg>
                </div>
            </div>
        </>
    )
}

export default Notification