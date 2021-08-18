import React, { useState, useEffect } from 'react';

import { Title, Card, ListCategories } from '@components/index';

import { getAllServices } from '@services/services';

import { Category } from '@interfaces/index';

import { Container, Content, CardsWrapper } from './Home.styles';

const Home = () => {
  const [services, setServices] = useState<Category[]>([]);
  const [categorySelected, setCategorySelected] = useState<Category>();

  useEffect(() => {
    handlerGetServices();
  }, []);

  const handlerGetServices = async () => {
    try {
      const { data } = await getAllServices();

      setServices(data);
      setCategorySelected(data[0]);

      console.log('response.data', data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container>
      <Content>
        <Title>Escolha um serviço</Title>

        <ListCategories
          listCategories={services}
          categorySelected={categorySelected}
          setCategorySelected={setCategorySelected}
        />
      </Content>

      <CardsWrapper>
        {categorySelected?.items?.map((item, index) => (
          <Card key={index} service={item} />
        ))}
      </CardsWrapper>
    </Container>
  );
};

export default Home;
