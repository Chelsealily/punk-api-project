import "./CardList.scss"
import { Beer } from "../../types/Beer"
import Card from "../Card/Card"

type CardListProps = {
    info: Beer[];
}

const CardList = ({ info }: CardListProps) => {
    return (
      <div className="cardlist-container">
        {info.map((card) => (
          <Card
            key={card.id}
            name={card.name}
            image={card.image_url}
            tagline={card.tagline}
          />
        ))}
      </div>
    );
  };
  
  export default CardList;