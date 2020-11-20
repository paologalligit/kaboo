import React from 'react'
import { useHistory, RouteComponentProps } from 'react-router-dom'
import qs from 'qs'
import Header from '../container/Header'

interface Props {
    socket: SocketIOClient.Socket,
    router: RouteComponentProps<Room>
}

interface TeamMember {
    id: string, name: string, team: Number
}

interface Room {
    id: string
}

const PlayRoom = ({ socket, router: { location: { search, state: { users } }, match } }: Props) => {
    const history = useHistory()
    const { roomId, user } = qs.parse(search.substr(1, search.length - 1))

    const team = users.filter((u: TeamMember) => u.name === user)[0].team

    const getPartners = () => {
        return (
            users
                .filter((u: TeamMember) => u.team === team && u.name !== user)
                .map((u: TeamMember) => {
                    return <ul key={u.id} style={{ color: 'blue' }}>{u.name}</ul>
                })
        )
    }

    const getOpponents = () => {
        console.log('team: ', team, ' users. ', users)
        return (
            users
                .filter((u: TeamMember) => u.team !== team)
                .map((u: TeamMember) => {
                    return <ul key={u.id} style={{ color: 'red' }}>{u.name}</ul>
                })
        )
    }

    const onLeaveGameClick = () => {
        const leave = window.confirm('Do you really want to leave the game?')

        if (leave) {
            socket.disconnect()
            history.push('/home')
            window.location.reload()
        }
    }

    return (
        <div>
            <Header text="LEAVE GAME" logout={() => onLeaveGameClick()} />
                PLAY ROOM
            <p>PLAYER: {user}</p>
            <div>PARTNERS:
                    {getPartners()}
            </div>
            <div>OPPONENTS:
                    {getOpponents()}
            </div>
        </div>
    )
}

export default PlayRoom