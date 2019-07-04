import styled from 'styled-components/native';
import { TYPINGS, COLORS } from './config';

const { lineHeightOffset } = TYPINGS;

const H1 = styled.Text`
  font-family: 'montserrat-bold';
  font-size: ${ TYPINGS.h1};
  line-height: ${ TYPINGS.h1 + lineHeightOffset};
  color: ${ props => { return props.black ? COLORS.primary : COLORS.white }} 
`;

const H2 = styled.Text`
  font-family: 'aleo-bold';
  font-size: ${ TYPINGS.h2};
  line-height: ${ TYPINGS.h2 + lineHeightOffset};
  color: ${ props => { return props.black ? COLORS.primary : COLORS.white }} 
`;

const H3 = styled.Text`
  font-family: 'aleo-bold';
  font-size: ${ TYPINGS.h3};
  line-height: ${ TYPINGS.h3 + lineHeightOffset};
  color: ${ props => { return props.black ? COLORS.primary : COLORS.white }} 
`;

const Subtitle1 = styled.Text`
  font-family: 'aleo-bold';
  font-size: ${ TYPINGS.subtitle1};
  line-height: ${ TYPINGS.subtitle1 + lineHeightOffset};
  color: ${ props => { return props.black ? COLORS.primary : COLORS.white }} 
`;

const Subtitle2 = styled.Text`
  font-family: 'aleo-bold';
  font-size: ${ TYPINGS.subtitle2};
  line-height: ${ TYPINGS.subtitle2 + lineHeightOffset};
  color: ${ props => { return props.black ? COLORS.primary : COLORS.white }} 
`;

const Body1 = styled.Text`
  font-family: 'montserrat-semibold';
  font-size: ${ TYPINGS.body1};
  line-height: ${ TYPINGS.body1 + lineHeightOffset};
  color: ${ props => { return props.black ? COLORS.primary : COLORS.white }} 
  font-family: ${ props => { return props.bold ? 'montserrat-bold' : 'montserrat-semibold' }} 
`;

const Body2 = styled.Text`
  font-family: 'montserrat-regular';
  font-size: ${ TYPINGS.body2};
  line-height: ${ TYPINGS.body2 + lineHeightOffset};
  color: ${ props => { return props.black ? COLORS.primary : COLORS.white }} 
`;

const Caption = styled.Text`
  font-family: 'montserrat-regular';
  font-size: ${ TYPINGS.caption};
  line-height: ${ TYPINGS.caption + lineHeightOffset};
  color: ${ props => { return props.black ? COLORS.primary : COLORS.white }} 
`;

export { H1, H2, H3, Subtitle1, Subtitle2, Body1, Body2, Caption }