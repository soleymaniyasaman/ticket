import React from 'react'

import { Routes, Route } from 'react-router-dom'
import { ADDTICKETTING, TICKETING } from './CONSTANTS'

//pages
import Ticketing from '../pages/ticketing'
import AddTicket from '../pages/ticketing/add-ticket'
import DashboardLayout from '../pages/layout'


const RouterConfig = () => {

    return (

        <div className="routLayout">
            <DashboardLayout>
                <Routes>
                    <Route path={TICKETING} element={<Ticketing />} />
                    <Route path={ADDTICKETTING} element={<AddTicket />} />
                </Routes>
            </DashboardLayout>
        </div>
    )

}

export default RouterConfig;