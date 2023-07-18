
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import ModalMovie from './ModalMovie'

function Movie(props) {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);



    return (
        <>


            <Card style={{ width: '18rem', backgroundColor: '#FAF0D7' }}>
                <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500/${props.data.poster_path}`} />
                <Card.Body>
                    <Card.Title>{props.data.title}</Card.Title>
                    <Card.Text>
                        {props.data.overview}
                    </Card.Text>
                    <Button style={{ backgroundColor: 'green' }} onClick={handleShow} variant="primary">add to the favorite list</Button>
                </Card.Body>
            </Card>





            <ModalMovie handleShow={handleShow} handleClose={handleClose} show={show} data={props.data}  CommentHandler={props.CommentHandler}/>


        </>



    )
}
export default Movie