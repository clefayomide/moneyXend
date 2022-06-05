import React from 'react'
import SideNav from '../../components/side-nav/SideNav'
import DB from '../../components/db/DB'
import CurrencyConverter from '../../components/currency-converter/CurrencyConverter'
import './dashboard.css'

const Dashboard = () => {
    return (
        <div className="base">
            <div className='base-side-nav'>
                <SideNav />
            </div>
            <div className='db-curr-converter'>
                <div className='base-db'>
                    <h4 className='db-header'>DASHBOARD</h4>
                    <DB />
                </div>
                <div className='base-currency-converter'><CurrencyConverter /></div>
            </div>
        </div>
    )
}

export default Dashboard