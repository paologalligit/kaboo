import React from 'react'
import { BrowserHistory } from 'history'

import { logout } from '../service/auth'
import Header from '../container/Header'
import JoinRoom from './JoinRoom'
import CreateNewRoom from './CreateNewRoom'

interface Props {
    history: BrowserHistory
}

const Home = ({ history }: Props) => {
    return (
        <div>
            <Header logout={logout} />
            <p>THIS IS HOME OF KABOO</p>
            <CreateNewRoom />
            <JoinRoom />
        </div>
    )
}

export default Home