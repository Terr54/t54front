import React, { useState } from 'react';
import classes from './Dropdown.module.css';

interface dropdownProps {
  id?: string;
  heading?: string;
  data?: any;
  handleOption?: (value: any) => void
}

const Dropdown = ({ id = '', data, heading = 'MT', handleOption = () => '' }: dropdownProps) => {
  const [dropdown, setDropdown] = useState(false);
  const [value, setValue] = useState('');
  return (
    <div className={classes.container}>
      <div className={classes.heading} onClick={() => setDropdown(!dropdown)}>
        {value || data[0][id]}
      </div>
      {dropdown && (
        <div className={classes.content}>
          {data.map((item: any) => (
            <div
              className={classes.item}
              onClick={() => {
                setValue(item[id]); setDropdown(false);
                handleOption(item[id])
              }}
              key={item[id]}
            >
              {item[id]}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
