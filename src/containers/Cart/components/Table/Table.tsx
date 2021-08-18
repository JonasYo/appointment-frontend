import React from 'react';

import moment from 'moment';
moment.locale('pt-br');

import { Appointment } from '@interfaces/index';

import { useAppointment } from '@hooks/appointment';

import { Container, Thead, Th, Tr, Td, Remove } from './Table.styles';

const Table = () => {
  const {
    data: { appointments },
    persistAppointment,
  } = useAppointment();

  console.log('appointments', appointments);

  const handleRemoveAppointment = (appointment: Appointment) => {
    const newAppointments = appointments.filter(
      (item: Appointment) => item.serviceId !== appointment.serviceId,
    );
    console.log('newAppointments', newAppointments);

    persistAppointment([...(newAppointments || [])]);
  };

  return (
    <Container>
      {/* <Thead>
        <Tr>
          <Th>Data e Horario</Th>
          <Th>Serviço</Th>
          <Th>Preço</Th>
          <Th>Opções</Th>
        </Tr>
      </Thead>

      <tbody>
        {appointments?.length &&
          appointments.map((appointment: Appointment, index) => (
            <Tr key={index}>
              <Td data-label="Data e Horário">
                {moment(appointment.date).format('MM/DD/YYYY')} - {appointment.hour}
              </Td>

              <Td data-label="Serviço">{appointment.name}</Td>

              <Td data-label="Preço">R$ {appointment.price}</Td>

              <Td data-label="Opções">
                <div>
                  <Remove onClick={() => handleRemoveAppointment(appointment)}>Remover</Remove>
                </div>
              </Td>
            </Tr>
          ))}
      </tbody> */}
    </Container>
  );
};

export default Table;
