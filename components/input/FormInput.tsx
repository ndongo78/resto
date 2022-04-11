import React from 'react';
import styles from './FormIn.module.css';

interface Props {
    label: string;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    type: string;
    placeholder: string;
}

export const FormInput = ({label,type,placeholder,value,onChange}:Props) => {
  return (
    <div className={styles.search_container} >
        <label 
        style={{
            color:'blueviolet',
            fontWeight:400,
            display: 'flex',
            position: "relative",
            marginRight: "10px",
        }}
        ><span
        style={{
            color:'red',
            position: "absolute",
            right: "-7px",
        }}
        >*</span> {label}
        </label>
        <input type={type} 
         placeholder={placeholder}
         value={value}
         onChange={onChange}
          className={styles.search_input}
          />
    </div>
  )
}
