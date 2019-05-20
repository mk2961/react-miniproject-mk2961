import React from 'react';
import { connect } from 'react-redux';
import { addItem } from '../actions/actions';

const Add = props => {

  let currentName;

  return (
    <div>
      add
      <br />
      <input placeholder="name" ref={t => currentName=t} />
      
      <button onClick={() => {
        console.log(currentName.value);
        
          currentName.value ='';
       
      }}>add</button>
    </div>
  )
}
export default connect()(Add);