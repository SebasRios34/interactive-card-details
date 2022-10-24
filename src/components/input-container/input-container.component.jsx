import Input from "../input/input.component";

import "./input-container.styles.scss";

const InputContainer = () => {
  return (
    <div className="input-container">
      <Input
        inputType="text"
        labelName="Cardholder Name"
        placeholder="e.g. Sebastian Rios"
        classType="cardholder-input"
      />
      <Input
        inputType="number"
        labelName="Card Number"
        placeholder="e.g. 1234 5678 9123 0000"
        classType="cardnumber-input"
        maxChar="16"
      />
      <div className="lower-options">
        <div className="label-lower-container">
          <Input
            labelName="EXP. DATE (MM/YY)"
            placeholder="MM"
            classType="month-year-input"
          />
          <Input
            labelName="CVC"
            placeholder="MM"
            classType="month-year-input"
          />
        </div>
        <div className="input-lower-container">
          <Input
            inputType="number"
            placeholder="MM"
            classType="month-year-input"
            maxChar="2"
          />
          <Input
            inputType="number"
            placeholder="YY"
            classType="month-year-input"
            maxChar="2"
          />
          <Input
            inputType="number"
            placeholder="e.g. 123"
            classType="cvc-input"
            maxChar="3"
          />
        </div>
      </div>
    </div>
  );
};

export default InputContainer;
