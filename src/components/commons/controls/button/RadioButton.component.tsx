import React, { useState } from 'react';
import { radioButtonProps } from './button.props';
import { Option, RadioContainer, RButtons } from './Button.styles';

const RadioButton = ({ options, activeBgColor = 'rgba(230, 63, 7, 1)' }: radioButtonProps) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
      <RadioContainer>
        <RButtons>
            {options?.map((option) => (
                <Option
                key={option.id}
                onClick={() => setActiveTab(Number(option.id))}
                active={activeTab === Number(option.id)}
                activeBgColor={activeBgColor}
                >
                {option.title}
                </Option>
            ))}
        </RButtons>
    </RadioContainer>
  );
};

export default RadioButton;
