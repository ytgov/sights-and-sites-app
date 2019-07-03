import styled from 'styled-components/native';
import { TYPINGS, COLORS } from './config';


const H1 = styled.Text`
  font-family: 'montserrat-bold';
  font-size: ${ TYPINGS.h1};
  color: ${ props => { return props.black ? COLORS.primary : COLORS.white }} 
`;

const H2 = styled.Text`
  font-family: 'aleo-bold';
  font-size: ${ TYPINGS.h2};
  color: ${ props => { return props.black ? COLORS.primary : COLORS.white }} 
`;

const H3 = styled.Text`
  font-family: 'aleo-bold';
  font-size: ${ TYPINGS.h3};
  color: ${ props => { return props.black ? COLORS.primary : COLORS.white }} 
`;

const Subtitle1 = styled.Text`
  font-family: 'aleo-bold';
  font-size: ${ TYPINGS.subtitle1};
  color: ${ props => { return props.black ? COLORS.primary : COLORS.white }} 
`;

const Subtitle2 = styled.Text`
  font-family: 'aleo-bold';
  font-size: ${ TYPINGS.subtitle2};
  color: ${ props => { return props.black ? COLORS.primary : COLORS.white }} 
`;

const Body1 = styled.Text`
  font-family: 'montserrat-semibold';
  font-size: ${ TYPINGS.body1};
  color: ${ props => { return props.black ? COLORS.primary : COLORS.white }} 
`;

const Body2 = styled.Text`
  font-family: 'montserrat-regular';
  font-size: ${ TYPINGS.body2};
  color: ${ props => { return props.black ? COLORS.primary : COLORS.white }} 
`;

const Caption = styled.Text`
  font-family: 'montserrat-regular';
  font-size: ${ TYPINGS.caption};
  color: ${ props => { return props.black ? COLORS.primary : COLORS.white }} 
`;

export { H1, H2, H3, Subtitle1, Subtitle2, Body1, Body2, Caption }