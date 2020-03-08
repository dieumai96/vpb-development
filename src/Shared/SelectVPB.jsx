import React from 'react'
import Select from 'react-select';

const SelectVPB = ({ options, placeholder, onChangeSelect }) => {
  const customStyles = {
    control: base => ({
      ...base,
      minHeight: 30
    }),
    dropdownIndicator: base => ({
      ...base,
      padding: 4
    }),
    clearIndicator: base => ({
      ...base,
      padding: 4
    }),
    multiValue: base => ({
      ...base,
    }),
    valueContainer: base => ({
      ...base,
      padding: '0px 6px'
    }),
    input: base => ({
      ...base,
      margin: 0,
      padding: 0
    })
  };

  const onChange = (value) => {
    onChangeSelect(value);
  }
  return (
    <Select options={options} styles={customStyles} onChange={(value) => onChange(value)} placeholder={placeholder} />
  )
}

export default SelectVPB
