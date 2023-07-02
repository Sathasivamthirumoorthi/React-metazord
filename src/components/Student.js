import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Student(props){
    console.log(props)
    return(
        <div className='container'>
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/commons/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg" />
            <Card.Body>
                <Card.Title>{props.student.name}</Card.Title>
                <Card.Text>
                i am a student of rolnumber : {props.student.rol}
                </Card.Text>
                
                <Button variant="primary"> click me</Button>
            </Card.Body>
            </Card>
        </div>
    )
}

export default Student