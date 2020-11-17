import React, { useState } from 'react'
import { Button, Modal, Row, Col, Container, Spinner } from 'react-bootstrap'

interface Props {

}

const CreateNewRoom = (props: Props) => {
    const [show, setShow] = useState(false)
    const [name, setName] = useState('')
    const [loading, setLoading] = useState(false)

    const onCreateRoom = () => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 3000)
    }

    return (
        <>
            <Button onClick={() => setShow(prevShow => !prevShow)}>CREATE NEW ROOM</Button>
            {loading && <Spinner animation="border" role="status"><span className="sr-only">Loading...</span></Spinner>}
            {show &&
                <Modal.Dialog>
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                            Create new Room
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body className="show-grid">
                        <Container>
                            <Row>
                                <Col xs={12} md={8}>
                                    <label>Name:</label>
                                    <input placeholder="Room name" onChange={e => setName(e.target.value)}></input>
                                </Col>
                                <Col xs={6} md={4}>
                                    Other stuff...
                                </Col>
                            </Row>
                        </Container>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="danger" onClick={() => setShow(prevShow => !prevShow)} >Close</Button>
                        <Button variant="success" onClick={() => onCreateRoom()} disabled={name === ''} >Create</Button>
                    </Modal.Footer>
                </Modal.Dialog>
            }
        </>
    )
}

export default CreateNewRoom