import React from 'react';
import { useState } from 'react';
import './Form.css' 

function Form() {
  const [name, setName] = useState(" ")
  const [pepperoni, setPepperoni] = useState(false)
  const [Sausage, setSausage] = useState(false)
  const [Peppers, setPeppers] = useState(false)
  const [Onions, setOnions] = useState(false)
  return (
    <div className="pizza-order-form">
      <h1>Pizza Order Form</h1>
      <form className="Form">
        <label>
          <input type="text" placeholder="Enter Name" value={name} onChange={e => setName(e.target.value)}/>
        </label>
        <label>
        <input 
          type="checkbox"
          checked={pepperoni}
          onChange={() => setPepperoni(!pepperoni)}
          />
          Pepperoni
        </label>
        <label>
        <input 
          type="checkbox"
          checked={Sausage}
          onChange={() => setSausage(!Sausage)}
        />
        Sausage
        </label>
        <label>
        <input 
          type="checkbox"
          checked={Peppers}
          onChange={() => setPeppers(!Peppers)}
        />
        Peppers
        </label>
        <label>
        <input 
          type="checkbox"
          checked={Onions}
          onChange={() => setOnions(!Onions)}
          />
          Onions
        </label>
        <input className="submit" type="submit" value="Submit"/>
      </form>

      <div className="results-left">
        <h2>Your Order</h2>
        { name }
        {pepperoni &&<div>Pepperoni</div>}
        {Sausage && <div>Sausage</div>}
        {Peppers && <div>Peppers</div>}
        {Onions && <div>Onions</div>}
      </div>

    </div>
  )
}

export default Form;