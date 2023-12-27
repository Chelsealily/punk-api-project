import "./CardList.scss";
import Card from "../Card/Card";

type CardListProps = {
  name: string;
  image_url: string;
  tagline: string;
};

const CardList = ({ name, image_url, tagline }: CardListProps) => {
  return (
    <div className="cardlist-container">
      <Card name={name} image={image_url} tagline={tagline} />
    </div>
  );
};

export default CardList;
