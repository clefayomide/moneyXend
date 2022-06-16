import './mobileMenu.css'
import Logo from '../logo/Logo'
import Notification from '../notification/Notification'

const MobileMenu = () => {
    return (
        <div className='mobile-menu-container'>
            <div className='hamburger-menu-logo-container'>
                <div className="hamburger-container">
                    <div className='hamburger-bar'></div>
                </div>
                <div className='menu-logo-container'>
                    <Logo />
                </div>
            </div>
            <div className='menu-notification-container'>
                <Notification />
            </div>
        </div>
    )
}

export default MobileMenu