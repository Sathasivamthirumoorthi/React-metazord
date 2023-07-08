import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Admin(props){
    console.log(props)
    return(
        <div className='container'>
            <Card style={{ width: '18rem' }}>
                
            <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/commons/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg" />
            <Card.Body>
                <Card.Title>I am Admin</Card.Title> 

                {/* <Card.Title>{props.admin.name}</Card.Title>  */}
                <Button variant="primary"> click me</Button>
            </Card.Body>
            </Card>
        </div>
    )
}

export default Admin