import styled from 'styled-components/native';
import { COLORS } from '../../../../theme/config';

const Badge = styled.View`
  width: 9;
  height: 9;
  border-radius: 4;
  background-color: ${COLORS.accent};
  position: absolute;
  top: 2;
  right: 2;
  z-index: 2
`;

export default Badge;