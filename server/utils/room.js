const rooms = {}

const getRoomId = () => {
    let text = ''
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

    for (let i = 0; i < 5; ++i) {
        text += letters.charAt(Math.floor(Math.random() * letters.length))
    }

    return text
}

const userJoin = (id, name, room) => {
    const user = { id, name }

    if (room in rooms) {
        if (rooms[room].findIndex(user => user.name === name) < 0) {
            rooms[room].push(user)
        }
    } else {
        rooms[room] = [user]
    }

    return user
}

const teamJoin = (id, teams, room) => {
    if (!(room in rooms))
        rooms[room] = teams
}

const getRoomUsers = room => {
    return rooms[room].map(user => user.name)
}

const userLeave = id => {
    let user
    for (const room of Object.keys(rooms)) {
        const result = rooms[room].filter(user => user.id === id)
        if (result.length > 0) {
            user = {
                name: result[0].name,
                room
            }

            rooms[room] = rooms[room].filter(user => user.id !== id)

            break
        }
    }
    return user
}

const getUsersInRoom = roomId => {
    if (rooms[roomId])
        return rooms[roomId]
    else
        throw Error(`No room with ${roomId} id`)
}

const splitTeams = users => {
    const len = users.length
    const newArray = shuffle(users.slice())
    return [newArray.splice(0, len / 2), newArray]
}

const setTeams = (teamOne, teamTwo, id) => {
    rooms[id] = rooms[id].map(user => {
        return {
            ...user,
            team: teamOne.filter(u => u.name === user.name).length > 0 ? 0 : 1
        }
    })

    return rooms[id]
}

const shuffle = array => {
    let currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

const setOnePlayerReady = roomId => {
    const roomEnv = rooms[roomId]

    if (roomEnv.playersReady) {
        roomEnv.playersReady++
    } else {
        roomEnv.playersReady = 1
    }
    console.log('right after set one plauyer: ', rooms[roomId])
    //console.log('accessed room ', roomId, ' with ', roomEnv.playersReady, ' players ready')
}

const roomPlayersAllReady = (roomId, tot) => {
    const len = rooms[roomId].length
    console.log('the room: ', rooms[roomId], ' and the tot: ', tot)
    return len === tot
}

module.exports = {
    getRoomId,
    userJoin,
    getRoomUsers,
    userLeave,
    getUsersInRoom,
    splitTeams,
    setTeams,
    setOnePlayerReady,
    roomPlayersAllReady,
    teamJoin
}