import styled from 'styled-components/native';
import {Body2} from '../../../theme/theme';

const HighwayBoxSpacer = styled.View`
  padding-left: 5;
  padding-right: 5;
  margin-top: 5;
  margin-bottom: 5;
`;

const HighwayBox = styled.View`
  border-width: 1;
  border-color: rgba(255,255,255,0.2) ;
  padding-top: 10;
  padding-right: 10;
  padding-bottom: 10;
  padding-left: 10;
`;

const HighwayBadgeText = styled(Body2)`
  font-family: 'montserrat-bold';
  font-size: 12;
  position: absolute;
  left: 0; 
  right: 0; 
  margin: auto;
  text-align: center;
`;

export {
    HighwayBoxSpacer,
    HighwayBox,
    HighwayBadgeText
}
