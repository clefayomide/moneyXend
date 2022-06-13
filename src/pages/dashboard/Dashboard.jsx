import React from 'react'
import DB from '../../components/db/DB'
import CurrencyConverter from '../../components/currency-converter/CurrencyConverter'
import './dashboard.css'
import ContentAreaLayout from '../../layout/content-area-layout/ContentAreaLayout'

const Dashboard = () => {
    return (
        <ContentAreaLayout>
            <div className='base-db'>
                <h4 className='db-header'>DASHBOARD</h4>
                <DB />
            </div>
            <div className='base-currency-converter'><CurrencyConverter /></div>
        </ContentAreaLayout>
    )
}

export default Dashboard