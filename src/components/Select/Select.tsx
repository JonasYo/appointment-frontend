import React, { useRef, useEffect } from 'react';
import ReactSelect, { OptionTypeBase, Props as SelectProps } from 'react-select';
import { useField } from '@unform/core';

interface Props extends SelectProps<OptionTypeBase> {
  name: string;
  isMulti: boolean;
  placeholder: string;
  options: [
    {
      value: string;
      option: string;
    },
  ];
}

const Select = ({ name, isMulti, placeholder, options, ...rest }: Props) => {
  const selectRef = useRef(null);
  const { fieldName, defaultValue, registerField, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: selectRef.current,
      getValue: (ref: any) => {
        if (isMulti) {
          if (!ref.state.value) {
            return [];
          }
          return ref.state.value.map((option: OptionTypeBase) => option.value);
        }
        if (!ref.state.value) {
          return '';
        }
        return ref.state.value.value;
      },
    });
  }, [fieldName, registerField, isMulti]);

  return (
    <ReactSelect
      defaultValue={defaultValue}
      ref={selectRef}
      classNamePrefix="react-select"
      placeholder={placeholder}
      options={options}
      {...rest}
    />
  );
};

export default Select;
