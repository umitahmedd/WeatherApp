import React, { useState } from 'react'
import store from '../store'

const Search = () => {

  const [textValue, setTextValue] = useState('');
  const onSubmit=(e)=>{
      e.preventDefault();
      if(textValue!=""){
          store.dispatch({type: "POST_ACTIVE_CITY", veriler: textValue});
          setTextValue('');
      }
  }
  const onChange = (e) => {
      setTextValue(e.target.value);
  }
    
  return (
    <div className='search' >
         <form onSubmit={onSubmit}>
            <div><input  onChange={onChange}value={textValue} type="text" /></div>
            <div><button type='submit'>Search</button></div>
         </form>
    </div>
  )
}

export default Search
