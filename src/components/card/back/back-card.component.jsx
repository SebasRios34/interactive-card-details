import "./back-card.styles.scss";

const BackCard = ({ additionalClass }) => {
  return (
    <div className={"back-card " + additionalClass}>
      <img src={require("../../../images/bg-card-back.png")} alt="Back Card" />

      <div className="back-card-details">
        <div className="cvc-container">
          <h3>000</h3>
        </div>
      </div>
    </div>
  );
};

export default BackCard;
