export const handleChange =
  (day, employee, schedule, setSchedule) => (event) => {
    setSchedule({
      ...schedule,
      [day]: { ...schedule[day], [employee]: event.target.value },
    });
  };
