import React from 'react'
import { Nav } from 'react-bootstrap'

interface Props {
    logout: () => void
}

const Header = ({ logout }: Props) => {
    return (
        <>
            <Nav className="justify-content-end" activeKey="/home">
                <Nav.Item>
                    <Nav.Link onClick={() => logout()}>LOGOUT</Nav.Link>
                </Nav.Item>
            </Nav>
        </>
    )
}

export default Header