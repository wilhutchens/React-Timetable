import * as React from 'react';
import './style.css';
import { days } from "./days";
import { employees } from "./employees";
import { handleChange } from "./handleChange";
import Input from "./Input";

interface InputProps {
  day: string;
  employee: string;
  schedule: {};
  handleChange: (day: string, employee: string, schedule: {}, setSchedule: React.Dispatch<React.SetStateAction<{}>>) => (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Timetable = () => {
  const [schedule, setSchedule] = React.useState({});

  return (
    <table>
      <thead>
        <tr>
          <th></th>
          {days.map(day => (
            <th key={day}>{day}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {employees.map(employee => (
          <tr key={employee}>
            <td>{employee}</td>
            {days.map(day => (
              <td key={day}>
                <Input day={day} employee={employee} schedule={schedule} handleChange={handleChange} />
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Timetable;
