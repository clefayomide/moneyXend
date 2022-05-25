import React from 'react'
import DB from '../db/DB'
import SideNav from '../side-nav/SideNav'
import './base.css'

const Base = () => {
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
                <div className='base-currency-converter'>Currency converter</div>
            </div>
        </div>
    )
}

export default Base