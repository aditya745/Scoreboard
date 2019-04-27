import React from "react";
import { Field, reduxForm } from "redux-form";
const validate = values => {
  const errors = {};
  if (!values.playerName) {
    errors.playerName = "Required";
  }

  if (isNaN(Number(values.score))) {
    errors.age = "Must be a number";
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
      <input {...input} placeholder={label} type={type} />
      {touched &&
        ((error && <span>{error}</span>) ||
          (warning && <span>{warning}</span>))}
    </div>
  </div>
);

const AddPlayer = props => {
  const { handleSubmit, pristine, submitting } = props;
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
        </div>
        <div>
          <button
            type="submit"
            disabled={pristine || submitting}
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
