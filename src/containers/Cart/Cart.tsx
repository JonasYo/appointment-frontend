import React, { useMemo } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';

import moment from 'moment';
moment.locale('pt-br');

import { Title, Button } from '@components/index';

import { Appointment } from '@interfaces/index';

import { useAppointment } from '@hooks/appointment';

import {
  Container,
  HeaderWrapper,
  Content,
  ButtonWrapper,
  TableWrapper,
  Table,
  Thead,
  Th,
  Tr,
  Td,
  Remove,
  ImageWrapper,
} from './Cart.styles';

const Cart = () => {
  const router = useRouter();

  const {
    data: { appointments },
    persistAppointment,
  } = useAppointment();

  const hasAppointments = useMemo(() => appointments?.length > 0, [appointments]);

  const handleRemoveAppointment = (appointment: Appointment) => {
    const newAppointments = appointments.filter(
      (item: Appointment) => item.serviceId !== appointment.serviceId,
    );
    console.log('newAppointments', newAppointments);

    persistAppointment([...(newAppointments || [])]);
  };

  const handleNewAppointment = () => {
    router.push('/');
  };

  return (
    <Container>
      {hasAppointments && (
        <>
          <HeaderWrapper>
            <Title>Procedimentos para agendamento</Title>
          </HeaderWrapper>

          <Content>
            <TableWrapper>
              <Table>
                <Thead>
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
                            <Remove onClick={() => handleRemoveAppointment(appointment)}>
                              Remover
                            </Remove>
                          </div>
                        </Td>
                      </Tr>
                    ))}
                </tbody>
              </Table>
            </TableWrapper>

            <ButtonWrapper>
              <Button type="submit" onClick={handleNewAppointment}>
                Adicionar outro serviço
              </Button>

              <Button
                primary
                type="submit"
                onClick={handleNewAppointment}
                disabled={!hasAppointments}
              >
                Concluir
              </Button>
            </ButtonWrapper>
          </Content>
        </>
      )}

      {!hasAppointments && (
        <Content>
          <ImageWrapper>
            <Image src="/images/empty.svg" alt="Empty" layout="fill" />
          </ImageWrapper>

          <Title>Nenhum procedimento adicionado</Title>

          <ButtonWrapper>
            <Button primary onClick={handleNewAppointment}>
              Adicionar serviço
            </Button>
          </ButtonWrapper>
        </Content>
      )}
    </Container>
  );
};

export default Cart;
