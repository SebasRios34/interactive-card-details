import FrontCard from "../card/front/front-card.component";
import BackCard from "../card/back/back-card.component";

import "./card-container.styles.scss";

const CardContainer = () => {
  const additionalClasses = ["front-cards-container", "back-cards-container"];

  return (
    <div className="cards-container">
      <BackCard additionalClass={additionalClasses[1]}></BackCard>
      <FrontCard additionalClass={additionalClasses[0]}></FrontCard>
    </div>
  );
};

export default CardContainer;
