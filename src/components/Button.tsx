import { Icon } from './Icon';

import '../styles/button.scss';
import { ButtonHTMLAttributes } from 'react';
import { memo } from 'react';


interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  iconName: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  selected: boolean;
}

export function ButtonComponent({ iconName, title, selected, ...rest }: ButtonProps) {
  
  { console.log('selectd', selected)}
  
  return (
    <button type="button" {...(selected && { className: 'selected' })} {...rest}>
      <Icon name={iconName} color={selected ? '#FAE800' : '#FBFBFB'} />
      {title}
    </button>
  );
}

export const Button =  memo(ButtonComponent,(prevProps, nextProps)=>{
  return prevProps.selected === nextProps.selected
})