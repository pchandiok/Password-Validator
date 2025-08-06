import { useState } from 'react'
import validator from 'validator'
import './App.css'

function App() {
  const [message, setMessage] = useState('')

  const validate = (value) => {
    if(validator.isStrongPassword(value, {
      minLength: 8,
      minLowercase: 1,
      minUppercase: 1,
      minNumbers: 1,
      minSymbols: 1
    })) {
      setMessage("Is Strong Password");
    }
    else
    {
      setMessage("Is Not Strong Password");
    }
  }

  return (
    // <div style={{marginLeft: '200px'}}>
    <div>
      <h2>Checking password length in ReactJS</h2>
      <span>
        <label htmlFor="password">Password: </label>
        <input type="text" onChange={(e) => validate(e.target.value)} />
      </span> <br />
      {
        message === '' ? null : 
        <span style={{fontWeight: 'bold', color: 'red'}}>
          {message}
        </span>
      }
    </div>
  )
}

export default App
