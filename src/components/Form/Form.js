import React from "react";
import PropTypes from "prop-types";
import "./Form.css";

function Form(props) {
  const { form, onSubmit, onChange } = props;

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    onChange(name, value);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    onSubmit();
  };

  return (
    <form className='step-add-form' onSubmit={handleSubmit}>
      <div className='step-add-form-date'>
        <label htmlFor='date'>{"Дата (ДД.ММ.ГГ)"}</label>
        <input
          id='date'
          name='date'
          type='date'
          value={form.date}
          onChange={handleChange}
        />
      </div>
      <div className='step-add-form-distance'>
        <label htmlFor='distance'>{"Пройдено км"}</label>
        <input
          id='distance'
          name='distance'
          type='number'
          value={form.distance}
          onChange={handleChange}
        />
      </div>
      <button type='submit'>Ok</button>
    </form>
  );
}

export default Form;

Form.propTypes = {
  form: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};