import React from 'react';

import { Container, Ul, Li, CircleItem, Description } from './ListCategories.styles';

interface Props {
  listCategories: any;
  categorySelected: any;
  setCategorySelected: any;
}

const Categories = ({ listCategories, categorySelected, setCategorySelected }: Props) => {
  return (
    <Container>
      <Ul>
        {listCategories.map((item, index) => (
          <Li
            key={index}
            onClick={() => setCategorySelected(item)}
            isSelected={item?.category === categorySelected?.category}
          >
            <CircleItem />
            <Description>{item.category}</Description>
          </Li>
        ))}
      </Ul>
    </Container>
  );
};

export default Categories;
