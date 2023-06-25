import React from 'react';
import { useSelector } from 'react-redux';

const Loading =()=> {

  let loading = useSelector(state=> state.loading);
  if(loading===true){
    return (
      <div className='loading-p-primary'>
        <div className='loading-bordertaskinlik'>
        <div className="loading-primary">
            <div><p>Loading</p></div>
         </div>
        </div>
      </div>
    )
  }
}

export default Loading
