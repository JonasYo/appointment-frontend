import React, { useState, useEffect } from 'react';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

import moment from 'moment';
moment.locale('pt-br');

import {
  Container,
  MonthWrapper,
  DatesWrapper,
  DayWrapper,
  Weekday,
  DateWrapper,
  Date,
} from './Calendar.styles';

interface Props {
  selectedDate: moment.Moment;
  setSelectedDate: (date: moment.Moment) => void;
}

const Calendar = ({ selectedDate, setSelectedDate }: Props) => {
  const [startDate, setStartDate] = useState(moment().startOf('week'));
  const [dates, setDates] = useState<any>([]);

  useEffect(() => {
    const tempDates = [];
    for (let i = 0; i < 7; i++) {
      tempDates.push(moment(startDate).add(i, 'days'));
    }
    setDates(tempDates);
  }, [startDate]);

  const prevWeek = () => {
    setStartDate(startDate.clone().subtract(7, 'days'));
    setSelectedDate(selectedDate.clone().subtract(7, 'days'));
  };

  const nextWeek = () => {
    setStartDate(startDate.clone().add(7, 'days'));
    setSelectedDate(selectedDate.clone().add(7, 'days'));
  };

  return (
    <Container>
      <MonthWrapper>
        <FaAngleLeft size={20} className="arrow" onClick={prevWeek} />

        <div>{selectedDate.format('MMMM')}</div>

        <FaAngleRight size={20} className="arrow" onClick={nextWeek} />
      </MonthWrapper>

      <DatesWrapper>
        {dates.map((date: any, index: any) => (
          <DayWrapper key={index} onClick={() => setSelectedDate(date)}>
            <Weekday>{date.format('ddd')}</Weekday>

            <DateWrapper className={`${date.isSame(selectedDate, 'day') ? 'selected' : ''}`}>
              <Date>{date.format('D')}</Date>
            </DateWrapper>
          </DayWrapper>
        ))}
      </DatesWrapper>
    </Container>
  );
};

export default Calendar;
