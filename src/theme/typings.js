/* eslint-disable no-nested-ternary */
import styled from 'styled-components/native';
import {COLORS, TYPINGS} from './config';

const {lineHeightOffset} = TYPINGS;

export const YUKON_FONTS = {
    MONTSERRAT_REGULAR: 'montserrat-regular',
    MONTSERRAT_SEMI_BOLD: 'montserrat-semibold',
    MONTSERRAT_BOLD: 'montserrat-bold'
}

const H1 = styled.Text`
  font-family: ${YUKON_FONTS.MONTSERRAT_BOLD};
  font-size: ${TYPINGS.h1};
  line-height: ${TYPINGS.h1 + lineHeightOffset};
  color: ${props => {
    return props.black ? COLORS.primary : COLORS.white
}} 
`;

const H2 = styled.Text`
  font-family: ${YUKON_FONTS.MONTSERRAT_BOLD};
  font-size: ${TYPINGS.h2};
  line-height: ${TYPINGS.h2 + lineHeightOffset};
  color: ${props => {
    return props.black ? COLORS.primary : COLORS.white
}} 
`;

const H3 = styled.Text`
  font-family: ${YUKON_FONTS.MONTSERRAT_BOLD};
  font-size: ${TYPINGS.h3};
  line-height: ${TYPINGS.h3 + lineHeightOffset};
  color: ${props => {
    return props.black ? COLORS.primary : COLORS.white
}} 
`;

const Subtitle1 = styled.Text`
  font-family: ${YUKON_FONTS.MONTSERRAT_BOLD};
  font-size: ${TYPINGS.subtitle1};
  line-height: ${TYPINGS.subtitle1 + lineHeightOffset};
  color: ${props => {
    return props.black ? COLORS.primary : COLORS.white
}} 
`;

const Subtitle2 = styled.Text`
  font-family: ${YUKON_FONTS.MONTSERRAT_BOLD};
  font-size: ${TYPINGS.subtitle2};
  line-height: ${TYPINGS.subtitle2 + lineHeightOffset};
  color: ${props => {
    return props.black ? COLORS.primary : COLORS.white
}} 
`;

const Body1 = styled.Text`
  font-family: ${YUKON_FONTS.MONTSERRAT_SEMI_BOLD};
  font-size: ${TYPINGS.body1};
  line-height: ${TYPINGS.body1 + lineHeightOffset};
  color: ${props => {
    return props.black ? COLORS.primary : COLORS.white
}} 
  font-family: ${props => {
    return props.bold ? `${YUKON_FONTS.MONTSERRAT_BOLD}` : props.regular ? `${YUKON_FONTS.MONTSERRAT_REGULAR}` : `${YUKON_FONTS.MONTSERRAT_SEMI_BOLD}`
}} 
`;

const Body2 = styled.Text`
  font-family: ${YUKON_FONTS.MONTSERRAT_REGULAR};
  font-family: ${props => {
    return props.bold ? `${YUKON_FONTS.MONTSERRAT_BOLD}` : `${YUKON_FONTS.MONTSERRAT_REGULAR}`
  }}
  font-size: ${TYPINGS.body2};
  line-height: ${TYPINGS.body2 + lineHeightOffset};
  color: ${props => {
    return props.black ? COLORS.primary : COLORS.white
}} 
`;

const Caption = styled.Text`
  font-family: ${YUKON_FONTS.MONTSERRAT_REGULAR};
  font-size: ${TYPINGS.caption};
  line-height: ${TYPINGS.caption + lineHeightOffset};
  color: ${props => {
    return props.black ? COLORS.primary : COLORS.white
}} 
`;

export {H1, H2, H3, Subtitle1, Subtitle2, Body1, Body2, Caption}
