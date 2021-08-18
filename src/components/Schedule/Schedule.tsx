import React from 'react';

import { Container, TextWrapper, HoursWrapper, HourWrapper } from './Schedule.styles';

interface Props {
  title: String;
  schedules: Schedules[];
  selectedHour?: String;
  setSelectedHour: (value: String) => void;
}

interface Schedules {
  id: String;
  value: String;
}

const Schedule = ({ title, schedules, selectedHour, setSelectedHour }: Props) => {
  return (
    <Container>
      <TextWrapper>
        <div>{title}</div>
      </TextWrapper>

      <HoursWrapper className="dates-row">
        {schedules.map(({ value }, index) => (
          <HourWrapper
            key={index}
            className={`${value === selectedHour ? 'selected' : ''}`}
            onClick={() => setSelectedHour(value)}
          >
            <div className="date">{value}</div>
          </HourWrapper>
        ))}
      </HoursWrapper>
    </Container>
  );
};

export default Schedule;
