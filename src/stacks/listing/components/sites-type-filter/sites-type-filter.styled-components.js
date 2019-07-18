import styled from 'styled-components/native';

const FilterButtton = styled.TouchableOpacity`
  z-index: 1; 
  align-items: center; 
  justify-content: center;
`;

const FilterImageOverlay = styled.Image`
  position: absolute;
  width: 32;
  height: 32;
  top: 4;
  left: 4;
  z-index: 2
`;

const FilterImage = styled.Image`
  width: 40;
  height: 40;
  marginBottom: 5;
  opacity: ${ props => { return props.active ? 0.4 : 1 }} 
`;

export { FilterButtton, FilterImageOverlay, FilterImage };