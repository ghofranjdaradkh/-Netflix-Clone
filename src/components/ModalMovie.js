import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useRef, useState } from 'react';
import FavList from './FavList';

function ModalMovie({ handleShow, handleClose, show, data, CommentHandler }) {
    const [Comment, setComment] = useState('')
    const commentInput = useRef('')

    function handleSubmit(e) {
        e.preventDefault()
        const userComment = commentInput.current.value
        setComment(userComment)// to re render 
        // console.log(data);
        const NewMovie = { ...data, userComment }
        CommentHandler(NewMovie, data.id)//this is function inside the home  
        console.log(NewMovie)
    }


    async function handleAddFav(e) {
        e.preventDefault();
        let url = `${process.env.REACT_APP_SERVER_URL}/movies`;//send request
        let newData = {
            title: data.title,
            overview: data.overview,
            poster_path: data.poster_path,
            comment: data.comment
        }
        let response = await fetch(url, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newData)
        })
        let favoriteMov = await response.json();
        console.log('favoriteMov', favoriteMov);
        if (response.status === 201) {
          alert('added successfuly')
        
         

    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{data.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <img style={{ width: '100%' }} variant="top" src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`} alt={data.title} /></Modal.Body>

                <Form.Group onSubmit={(e) => handleSubmit(e)}
                    className="mb-3"
                    controlId="exampleForm.ControlTextarea1"
                >
                    <Form.Label>add comment</Form.Label>
                    <Form.Control as="textarea" rows={1} ref={commentInput} />
                    <Button type="submit" onClick={handleSubmit} variant="success">submit</Button>{' '}
                    <Button type='submit' onClick={(e) => handleAddFav(e)} variant="warning">add to FavList</Button>{' '}
                </Form.Group>
                {data.userComment ? data.userComment : 'No comment'}
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
            {/* <FavList /> */}
        </>
    );
}}

export default ModalMovie;