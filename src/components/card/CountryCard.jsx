import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const CountryCard = ({ name, population, region, capital, image }) => {
  return (
    <Card>
      <Card.Img variant="top" height={150} src={image} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          <span className="fw-bold">Population</span>: {population}
        </Card.Text>
        <Card.Text>
          {" "}
          <span className="fw-bold">Region</span>: {region}
        </Card.Text>
        <Card.Text>
          {" "}
          <span className="fw-bold">Capital:</span> {capital}
        </Card.Text>
        <Link className="btn btn-primary w-100" to={`country/${name}`}>
          See more
        </Link>
      </Card.Body>
    </Card>
  );
};

CountryCard.propTypes = {
  name: PropTypes.string,
  population: PropTypes.number,
  region: PropTypes.string,
  capital: PropTypes.string,
  image: PropTypes.string,
};

export default CountryCard;
