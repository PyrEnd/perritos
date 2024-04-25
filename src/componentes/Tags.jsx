import Badge from 'react-bootstrap/Badge'

const Tags = ({ color, raza }) => {
  return (
    <div>
      <Badge className='d-flex justify-content-center' bg={color}> {raza} </Badge>
    </div>
  )
}

export default Tags
