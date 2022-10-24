import { Fragment } from "react";

import "./input.styles.scss";

const Input = ({
  inputType,
  labelName,
  placeholder,
  classType,
  errorMessage,
  maxChar,
}) => {
  return (
    <Fragment>
      {labelName !== undefined ? (
        <label className="label" htmlFor="">
          {labelName.toUpperCase()}
        </label>
      ) : null}

      {inputType !== undefined ? (
        <input
          className={"input " + classType}
          type={inputType}
          placeholder={placeholder}
          maxLength={maxChar !== undefined ? maxChar : null}
        />
      ) : null}

      {errorMessage !== undefined ? (
        <label className="error-message" htmlFor="">
          {errorMessage}
        </label>
      ) : null}
    </Fragment>
  );
};

export default Input;
