import cardLogo from "../../../images/card-logo.svg";

import "./front-card.styles.scss";

const FrontCard = ({ additionalClass }) => {
  return (
    <div className={"front-card " + additionalClass}>
      <img
        src={require("../../../images/bg-card-front.png")}
        alt="Front Card"
      />

      <div className="front-card-details">
        <div className="front-card-logo">
          <img src={cardLogo} alt="Front Card Logo" />
        </div>
        <div className="top-section">
          <h3>0000 0000 0000 0000</h3>
        </div>
        <div className="lower-section">
          <h3>Sebastian Rios</h3>
          <h3>00/00</h3>
        </div>
      </div>
    </div>
  );
};

export default FrontCard;
