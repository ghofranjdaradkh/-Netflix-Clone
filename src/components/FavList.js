// import Button from 'react-bootstrap/Button';/
import Card from 'react-bootstrap/Card';
import { useState, useEffect, useRef } from 'react';
import { Button, Form } from 'react-bootstrap';

function FavList() {

  const [favMovie, setfavMovie] = useState([]);
  const updatedValue = useRef('');
  const [InputVisable, setInputVisable] = useState(false)
  const [X, setX] = useState('')



  async function handleFavMovie() {
    const url = `${process.env.REACT_APP_URL}/movies`;
    let response = await fetch(url);
    let recivedData = await response.json();
    setfavMovie(recivedData);
    // console.log(recivedData);
  }


  async function handleDelete(id) {
    console.log(id);
    const url = `${process.env.REACT_APP_URL}/movies/${id}`;

    let response = await fetch(url, {
      method: 'DELETE',
      headers: {
        "Content-Type": "application/json"
      },
    });
    if (response.status === 204) {
      alert('deleted successfuly')
    }
    handleFavMovie();
  }


  async function handleUpdate(id) {


    setInputVisable(!InputVisable)
    const url = `${process.env.REACT_APP_URL}/movies/${id}`;
    let newComment = {
      comment: updatedValue.current.value
    }
    setX(newComment)
    let response = await fetch(url, {
      method: 'PUT',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newComment)
     

    });

    console.log(newComment)
    const updateData = await response.json()
    
    console.log(updateData, "updateData")

    if (response.status === 204) {
      alert('UPDATED successfuly')
    }
    handleFavMovie();
  }
  useEffect(() => {
    handleFavMovie();
  }, []);



  return (
    <>


      {favMovie.map((object, id) => (
        <div className='fav' key={id}>

          <Card style={{ width: '18rem' }} >
            <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500/${object.poster_path}`} />
            <Card.Body>
              <Card.Title>{object.title}</Card.Title>
              <Card.Text>
                {object.overview} <br />

                <span>{`comment:${object.comment}`}</span>
              </Card.Text>
              <Button onClick={() => handleDelete(object.id)} variant="primary">Delete</Button>
              <Button onClick={() => handleUpdate(object.id)} variant="primary">Update</Button>
              {InputVisable && (
                <input ref={updatedValue} type="text" placeholder="Enter something..." />
              )}






            </Card.Body>


          </Card>
        </div>
      ))}


    </>
  )
}
export default FavList