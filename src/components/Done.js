import React,{useState} from 'react'

function Done() {
    const [state, setState] = React.useState({
        email: '',
        password: ''
      })
    
      function handleInputChange(e) {
        setState({
          // spread in previous state with object spread operator
          ...state,
          [e.target.name]: e.target.value
        })
      }
      console.log(state)
      return (
        <form>
          <input
            name="email"
            type="email"
            onChange={handleInputChange}
          />
          <input
            name="password"
            type="password"
            onChange={handleInputChange}
          />
          <button type="submit">Submit</button>
        </form>)
}

export default Done;
