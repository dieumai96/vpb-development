import React, { useEffect } from 'react';

const SupportNowHasSegement = ({ segementType }) => {
  useEffect(() => {
    console.log(segementType);
  }, [segementType]);
  return (
    <div>Has type</div>
  )
}

export default SupportNowHasSegement
