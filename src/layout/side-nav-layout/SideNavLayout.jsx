import './sideNavLayout.css'

const SideNavLayout = ({ children }) => {
    return (
        <div className='side-nav-layout'>
            <div className='side-nav-inner-layout'>
                {children}
            </div>
        </div>
    )
}

export default SideNavLayout