import React from 'react';

const InputVPB = ({ nameClass, place, type, auto, onChangeInput }) => {

  const onKeyUp = (event) => {
    let data = event.target.value;
    onChangeInput(data);
  }
  return (
    <input className={nameClass} placeholder={place} type={type} autoComplete={auto} onKeyUp={(e) => onKeyUp(e)} />
  )
}

export default InputVPB
