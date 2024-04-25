import Card from 'react-bootstrap/Card';
import Tags from './Tags';



const Cards = ({ image, name, description, color, raza }) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img className='p-4 rounded' variant="top" src={image} />
      <Card.Body>
        <Card.Title className='text-center'>{name}</Card.Title>
        <Card.Text className='text-center'>
          {description}
        </Card.Text>
        <Tags color={color} raza={raza} />
      </Card.Body>
    </Card>
  );
}

export default Cards;