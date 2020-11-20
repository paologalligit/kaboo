import React from 'react'
import { Nav } from 'react-bootstrap'

interface Props {
    logout: () => void, 
    text: string
}

const Header = ({ logout, text }: Props) => {
    return (
        <>
            <Nav className="justify-content-end" activeKey="/home">
                <Nav.Item>
                    <Nav.Link onClick={() => logout()}>{text}</Nav.Link>
                </Nav.Item>
            </Nav>
        </>
    )
}

export default Header