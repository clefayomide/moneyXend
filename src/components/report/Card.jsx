import CardLayout from '../../layout/db-card-layout/CardLayout'
import './card.css'

const Card = ({ icon, header, text }) => {
    return (
        <CardLayout>
            <div className='card-container'>
                {/* <Profile icon={icon} containerWidth="55px" iconWidth="50%"/> */}
                <div className='card-icon-container'>
                    <div className='card-icon'>{icon}</div>
                </div>
                <div className='card-header-text-container'>
                    <p className='card-header-text'>{header}</p>
                    <p className='card-text'>{text}</p>
                </div>
            </div>
        </CardLayout>
    )
}

export default Card