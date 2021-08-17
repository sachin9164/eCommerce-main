import React, { useState } from 'react'

function AddItem() {
        const[state,setState]=useState({name : "",price : "",vendor : ""})
        const [ item,setItem] = useState([]);
        function handleChange(evt) {
            setState({ ...state,
                [evt.target.name]: evt.target.value});
          }

         
    console.log(state)
    return (
        <div>
         <form>
      <label>
        First name
        <input
          type="text"
          name="name"
          value={state.name}
          onChange={handleChange}
        />
      </label>
      <label>
 Price
        <input
          type="text"
          name="price"
          value={state.price}
          onChange={handleChange}
        />
      </label>

      <label>
Vendor
        <input
          type="text"
          name="vendor"
          value={state.vendor}
          onChange={handleChange}
        />
      </label>
    </form>
    
</div>
  
    )
}

export default AddItem
