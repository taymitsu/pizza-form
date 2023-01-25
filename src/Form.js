import React from 'react';
import './Form.css' 

function Form() {
  return (
    <div className="pizza-order-form">
      <h1>Pizza Order Form</h1>
      <form className="Form">
        <label>
          <input className="Name" type="text" placeholder="Enter Name"/>
        </label>
        <label>
        <input type="checkbox"/>Pepperoni
        </label>
        <label>
        <input type="checkbox"/>Sausage
        </label>
        <label>
        <input type="checkbox"/>Peppers
        </label>
        <label>
        <input type="checkbox"/>Onions
        </label>
        <input className="submit" type="submit" value="Submit"/>
      </form>
    </div>
  )
}

export default Form;