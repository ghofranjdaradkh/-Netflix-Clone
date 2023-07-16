import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
function ModalMovie({ handleShow, handleClose, show, data }) {


    return (
        <>


            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{data.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <img style={{ width: '100%' }} variant="top" src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`} alt={data.title} /></Modal.Body>

                <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlTextarea1"
                >
                    <Form.Label>add a comment</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>

                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalMovie;