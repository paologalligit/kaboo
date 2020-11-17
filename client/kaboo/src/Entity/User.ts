interface User {
    userName: String,
    password: String
}

interface AuthUser {
    userName: String,
    accessToken: String
}

export type {
    User, AuthUser
}