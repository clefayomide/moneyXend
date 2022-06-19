import './mobileMenu.css'
import Logo from '../logo/Logo'
import Notification from '../notification/Notification'
import SideNav from '../side-nav/SideNav'
import SideNavLayout from '../../layout/side-nav-layout/SideNavLayout'

const MobileMenu = ({ isMenuOpen, setIsMenuOpen }) => {
    const handleMenu = () => {
        setIsMenuOpen(true)
    }

    return (
        <div className="mobile-menu-outer-container">
            <div className='mobile-menu-container'>
                <div className='hamburger-menu-logo-container'>
                    <div className="hamburger-container" onClick={handleMenu}>
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

            <div className="mobile-nav-slider-container" style={{ right: `${isMenuOpen ? '50%' : '100%'}` }}>
                <SideNavLayout>
                    <SideNav />
                </SideNavLayout>
            </div>
        </div>
    )
}

export default MobileMenu