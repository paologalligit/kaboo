import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

import { logout } from '../service/auth'
import Header from '../container/Header'
import JoinRoom from './JoinRoom'
import CreateNewRoom from './CreateNewRoom'

const Home = () => {
    const history = useHistory()
    
    return (
        <div>
            <Header logout={logout} text="LOGOUT" />
            <p>THIS IS HOME OF KABOO</p>
            <CreateNewRoom />
            <JoinRoom />
        </div>
    )
}

export default Home