import React from 'react';
import { ImageBackground, View, Image, TouchableOpacity } from 'react-native';
import { Root, Container, Header, Content } from 'native-base';
import i18n from '../../../../locale/locale';
import { Helpers, COMMON, H2, Subtitle1 } from '../../../../theme/theme';
import MoreStyles from './more.styles';
import NavigationBackButton from '../../../../shared/components/navigation/back-button';

const moreBakcground = require('../../../../../assets/common/common-background.jpg');
const currentConditionsIcon = require('../../../../../assets/stacks/more/current-conditions-icon.png');
const traditionalTerritoriesIcon = require('../../../../../assets/stacks/more/traditional-territories-icon.png');
const travelTripsIcon = require('../../../../../assets/stacks/more/travel-trips-icon.png');
const appInformationIcon = require('../../../../../assets/stacks/more/app-information-icon.png');

class MoreScreen extends React.Component {
  state = {

  }

  render() {
    const { navigation } = this.props;
    return (
      <Root>
        <Container>
          <ImageBackground source={moreBakcground} style={{ width: '100%', height: '100%' }}>
            <Header style={COMMON.header} iosBarStyle="light-content">
              <NavigationBackButton navigation={navigation} />
            </Header>

            <Content>
              <View style={[Helpers.flexCenter]}>
                <H2>{i18n.t('more.title')}</H2>
                <TouchableOpacity onPress={() => { navigation.navigate('CurrentConditions') }} style={[MoreStyles.btnBox, Helpers.justifyContentCenter, Helpers.alignItemsCenter]}>
                  <View style={{ position: 'relative' }}>
                    <Image source={currentConditionsIcon} resizeMode='contain' style={{ width: 40, height: 40 }} />
                  </View>
                  <Subtitle1 style={[MoreStyles.btnText, Helpers.textAlignCenter]}>{i18n.t('currentConditions.title')}</Subtitle1>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => { navigation.navigate('TraditionalTerritories') }} style={[MoreStyles.btnBox, Helpers.justifyContentCenter, Helpers.alignItemsCenter]}>
                  <View style={{ position: 'relative' }}>
                    <Image source={traditionalTerritoriesIcon} resizeMode='contain' style={{ width: 40, height: 40 }} />
                  </View>

                  <Subtitle1 style={[MoreStyles.btnText, Helpers.textAlignCenter]}>{i18n.t('traditionalTerritories.title')}</Subtitle1>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => { navigation.navigate('TravelTrips') }} style={[MoreStyles.btnBox, Helpers.justifyContentCenter, Helpers.alignItemsCenter]}>
                  <View style={{ position: 'relative' }}>
                    <Image source={travelTripsIcon} resizeMode='contain' style={{ width: 40, height: 40 }} />
                  </View>
                  <Subtitle1 style={[MoreStyles.btnText, Helpers.textAlignCenter]}>{i18n.t('travelTrips.title')}</Subtitle1>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => { navigation.navigate('AppInformation') }} style={[MoreStyles.btnBox, Helpers.justifyContentCenter, Helpers.alignItemsCenter]}>
                  <View style={{ position: 'relative' }}>
                    <Image source={appInformationIcon} resizeMode='contain' style={{ width: 40, height: 40 }} />
                  </View>
                  <Subtitle1 style={[MoreStyles.btnText, Helpers.textAlignCenter]}>{i18n.t('appInformation.title')}</Subtitle1>
                </TouchableOpacity>
              </View >
            </Content >
          </ImageBackground>
        </Container>
      </Root>
    );
  }
}

export default MoreScreen;