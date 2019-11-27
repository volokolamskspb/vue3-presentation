// Import React
import React from 'react';
import './main.css';
// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  Image,
  CodePane,
  List,
  Quote,
  Slide,
  Text
} from 'spectacle';

// Import theme
import createTheme from 'spectacle/lib/themes/default';
import myImage from './evan.jpeg';
import Code from './code.png';
// Require CSS
require('normalize.css');

const theme = createTheme(
  {
    primary: 'white',
    dark: '#2d2d2d',
    tertiary: '#03A9FC',
    quaternary: '#CECECE',
    white: 'white'
  },
  {
    primary: 'Optima, sans-serif',
    secondary: 'Optima, sans-serif',
  }
);
let code = `<template>
  <ul id='list'>
    <li class='text'>Lorem upsum</li>
    <li class='text'>Lorem upsum</li>
    <li class='text'>{{dynamic}}</li> 
    <li class='text'>Lorem upsum</li>
  </ul>
</template>`
export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={['fade', 'slide']}
        transitionDuration={500}
        theme={theme}
      >
        <Slide transition={['fade']}>
            <Heading lineHeight={1} textColor="dark" style="font-size: 60px; padding-bottom: 20px;">
              Чего ожидать от Vue 3
            </Heading>
            <List bulletStyle="greenCheck" textColor="dark">
              <ListItem>Компактно</ListItem>
              <ListItem>Быстро</ListItem>
              <ListItem>Поддерживаемо</ListItem>
              <ListItem>Просто</ListItem>
            </List>
            <Image 
                src={myImage} 
                style="position: absolute;
                right: 0;
                bottom: 0;"/>
        </Slide>
        <Slide transition={['fade']}>
          <Heading size={6} textColor="dark" style="padding-bottom: 20px;">
            Бутылочное горлышко традиционного Virtual DOM
          </Heading>
            <Image src={Code} />
          <Text className='desclaimer' textColor="dark">Скорость работы традиционного виртуального дома определяется размером шаблона, а не количеством динамического контента</Text>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>Example Quote</Quote>
            <Cite>Author</Cite>
          </BlockQuote>
        </Slide>
      </Deck>
    );
  }
}
