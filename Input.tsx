import * as React from 'react';
import './style.css';

interface InputProps {
  day: string;
  employee: string;
  schedule: any;
}

const Input: React.FC<InputProps> = ({ day, employee, schedule }) => {
  const value = schedule[day] ? schedule[day][employee] : '';

  return (
    <div
      className="slot"
      style={{ backgroundColor: value === 'green' ? 'lightgreen' : 'red' }}
    >
      {value === 'green' ? value : ''}
    </div>
  );
};

export default Input;
