import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'

interface Props {

}

const JoinRoom = (props: Props) => {
    const [show, setShow] = useState(false)
    const [code, setCode] = useState('')

    console.log(code)

    return (
        <>
            <Button onClick={() => setShow(prevShow => !prevShow)}>JOIN ROOM</Button>
            {show && <Modal.Dialog aria-labelledby="contained-modal-title-vcenter">
                <Modal.Header closeButton>
                    <Modal.Title>Join an existing room</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <div style={{ display: 'flex', justifyContent: 'center'}}>
                        <label>Insert code: </label>
                        <input onChange={e => setCode(e.target.value)} />
                    </div>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShow(false)}>Close</Button>
                    <Button variant="primary">Join Room</Button>
                </Modal.Footer>
            </Modal.Dialog>}

        </>
    )
}

export default JoinRoom