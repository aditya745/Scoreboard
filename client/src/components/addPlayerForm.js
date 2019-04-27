import React from "react";
import { Field, reduxForm } from "redux-form";
const validate = values => {
  const errors = {};
  if (!values.playerName) {
    errors.playerName = "Required";
  }

  if (!values.score) {
    errors.score = "Required";
  } else if (isNaN(Number(values.score))) {
    errors.score = "Must be a number";
  }
  return errors;
};

const renderField = ({
  input,
  label,
  type,
  meta: { touched, error, warning }
}) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} type={type} />
      {touched &&
        ((error && <span>{error}</span>) ||
          (warning && <span>{warning}</span>))}
    </div>
  </div>
);

const AddPlayer = props => {
  const { handleSubmit, submitting, error } = props;
  return (
    <div>
      <form onSubmit={handleSubmit} className="form-container">
        <div>
          <label>Player Name</label>
          <div>
            <Field
              name="playerName"
              component={renderField}
              type="text"
              placeholder="Aditya"
            />
          </div>
          {error && <strong>{error}</strong>}
        </div>
        <div>
          <label>Scores</label>
          <div>
            <Field
              name="score"
              component={renderField}
              type="number"
              placeholder="E.g: 470"
            />
          </div>
          {error && <strong>{error}</strong>}
        </div>
        <div>
          <button
            type="submit"
            disabled={submitting}
            className="button-primary"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};
export default reduxForm({
  form: "addPlayer",
  validate,
  enableReinitialize: true
})(AddPlayer);
