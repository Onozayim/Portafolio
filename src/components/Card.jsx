import { Container, Card, Col, Row } from "react-bootstrap";
import "../App.css";

function CardComponent({titulo, text, image}) {
	return (
		<Card>
			<Card.Img variant="top" src={image} className="card-images" alt={titulo} />
			<Card.Body>
				<Card.Title>{titulo}</Card.Title>
				<Card.Text>
					{text}
				</Card.Text>
			</Card.Body>
		</Card>
	);
}

export default CardComponent;
