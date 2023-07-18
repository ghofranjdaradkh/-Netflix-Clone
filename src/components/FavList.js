// import Button from 'react-bootstrap/Button';/
import Card from 'react-bootstrap/Card';

function favList() {

  const [favMovie, setfavMovie] = useState([]);
  async function handleFavMovie() {
    const url = `${process.env.REACT_APP_SERVER_URL}/favList`;
    let response = await fetch(url);
    let recivedData = await response.json();
    setFavRecipe(recivedData);
//   }
  async function handleDelete(id){
    const url = `${process.env.REACT_APP_SERVER_URL}/movies${id}`;
    let response = await fetch(url, {
      method: 'DELETE',
      headers: {
        "Content-Type": "application/json"
      },
    });
    if(response.status === 204){
      alert('deleted successfuly')
    }
    handleFavMovie();
  }
  useEffect(() => {
    handleFavMovie();
  }, []);

    
  
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
  }

export default favList;