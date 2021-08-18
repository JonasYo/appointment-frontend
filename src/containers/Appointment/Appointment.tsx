import React, { useState } from 'react';
import { useRouter } from 'next/router';

import moment from 'moment';
moment.locale('pt-br');

import { useAppointment } from '@hooks/appointment';

import { Title, Calendar, Button, Schedule } from '@components/index';

import {
  Container,
  Content,
  CalendarWrapper,
  ScheduleWrapper,
  ButtonWrapper,
} from './Appointment.styles';

const Appointment = () => {
  const router = useRouter();
  const {
    data: { service, appointments },
    persistAppointment,
  } = useAppointment();

  const [selectedDate, setSelectedDate] = useState(moment());
  const [selectedHour, setSelectedHour] = useState<String>();

  const handleAppointment = () => {
    persistAppointment([
      ...(appointments || []),
      { ...service, date: selectedDate, hour: selectedHour },
    ]);
    router.push('/cart');
  };

  const handleGoBack = () => {
    router.push('/');
  };

  return (
    <Container>
      <Title>Escolha a Data &amp; Horario</Title>

      <Content>
        <CalendarWrapper>
          <Calendar selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
        </CalendarWrapper>

        <>
          <ScheduleWrapper>
            <Schedule
              title="Manhã"
              selectedHour={selectedHour}
              setSelectedHour={setSelectedHour}
              schedules={[
                { id: '1', value: '09:00' },
                { id: '2', value: '09:30' },
                { id: '3', value: '10:00' },
                { id: '4', value: '10:30' },
                { id: '5', value: '11:00' },
                { id: '6', value: '11:30' },
                { id: '7', value: '12:00' },
                { id: '8', value: '12:30' },
              ]}
            />
          </ScheduleWrapper>

          <ScheduleWrapper>
            <Schedule
              title="Tarde"
              selectedHour={selectedHour}
              setSelectedHour={setSelectedHour}
              schedules={[
                { id: '10', value: '14:00' },
                { id: '11', value: '14:30' },
              ]}
            />
          </ScheduleWrapper>

          <ScheduleWrapper>
            <Schedule
              title="Noite"
              selectedHour={selectedHour}
              setSelectedHour={setSelectedHour}
              schedules={[
                { id: '12', value: '18:00' },
                { id: '13', value: '18:30' },
              ]}
            />
          </ScheduleWrapper>
        </>

        <ButtonWrapper>
          <Button type="submit" onClick={handleGoBack}>
            Voltar
          </Button>

          <Button
            primary
            type="submit"
            onClick={handleAppointment}
            disabled={!selectedDate || !selectedHour}
          >
            Continuar
          </Button>
        </ButtonWrapper>
      </Content>
    </Container>
  );
};

export default Appointment;
