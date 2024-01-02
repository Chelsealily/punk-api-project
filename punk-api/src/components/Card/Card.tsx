import "./Card.scss";

type CardProps = {
  name: string;
  image: string;
  tagline: string;
};

const Card = ({ name, image, tagline }: CardProps) => {
 
  return (
    
    <div className="beer-card">
      <img className="beer-card__pic" src={image} alt={name} />
      <h1 className="beer-card__name">{name}</h1>
      <p className="beer-card__tag">{tagline}</p>
    </div>
  );
};
export default Card;