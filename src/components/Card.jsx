import { Card } from "react-bootstrap";
import "../App.css";

function CardComponent({ titulo, text, image }) {
	return (
		<Card>
			<Card.Img
				variant="top"
				src={image}
				className="card-images"
				alt={titulo}
			/>
			<Card.Body>
				<Card.Title className="font-bold">{titulo}</Card.Title>
				<Card.Text className="card-font">{text}</Card.Text>
			</Card.Body>
		</Card>
	);
}

export default CardComponent;
