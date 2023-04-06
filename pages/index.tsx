import React, { useEffect, useState } from 'react';
import { Htag, Button, P, Tag, Rating } from '../components';
import { Layout } from '../layout/Layout';

export default function Home(): JSX.Element {
  const [rating, setRating] = useState<number>(4);

  return (
    <Layout>
      <Htag tag='h1'>Заголовок</Htag>
      <Button appearance={'primary'} arrow='right'>
        Кнопка
      </Button>
      <Button appearance={'ghost'} arrow='down'>
        Кнопка
      </Button>
      <P size='l'>Большой</P>
      <P>Средний</P>
      <P size='s'>Маленький</P>
      <Tag size='s' color='ghost'>
        Ghost
      </Tag>
      <Tag size='s' color='red'>
        Red
      </Tag>
      <Tag size='m' color='green'>
        Green
      </Tag>
      <Tag size='m' color='grey'>
        Grey
      </Tag>
      <Tag color='primary'>Primary</Tag>
      <Rating rating={rating} isEditable setRating={setRating}/>
    </Layout>
  );
}
