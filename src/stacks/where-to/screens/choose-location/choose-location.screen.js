import React from 'react';
import { ImageBackground, View, Image, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { Ionicons } from '@expo/vector-icons';
import PropTypes from 'prop-types';
import { Container, Header, Content, Footer, FooterTab, Button } from 'native-base';
import i18n from '../../../../locale/locale';
import { Helpers, COMMON, Caption, H2, Subtitle1 } from '../../../../theme/theme';
import ChooseLocationStyles from './choose-location.styles';
import { success } from '../../../../shared/services/notify';
import Badge from './choose-location.styled-components';
import { resetFilters, setNearMeFilters, setMySitesFilters } from '../../../../store/actions/filters';
import NavigationBackButton from '../../../../shared/components/navigation/back-button';

const chooseLocationBackground = require('../../../../../assets/common/common-background.jpg');
const nearMeIcon = require('../../../../../assets/stacks/where-to/near-me-icon.png');
const byHighwayIcon = require('../../../../../assets/stacks/where-to/by-highway-icon.png');
const byRegionIcon = require('../../../../../assets/stacks/where-to/by-region-icon.png');
const mySitesIcon = require('../../../../../assets/stacks/where-to/my-sites-icon.png');

class IntroStepFourScreen extends React.Component {
  state = {
  }

  componentDidMount() {
  }

  toggleNearMeFilter() {
    const { setNearMeFiltersDispatch } = this.props;
    setNearMeFiltersDispatch(true);
    success(i18n.t('notifications.onFiltersUpdate'));
  }

  toggleMySitesFilter() {
    const { setMySitesFiltersDispatch } = this.props;
    setMySitesFiltersDispatch(true);
    success(i18n.t('notifications.onFiltersUpdate'));
  }

  resetFilters() {
    const { resetFiltersDispatch } = this.props;
    resetFiltersDispatch();
    success(i18n.t('notifications.onFiltersClear'));
  }

  render() {
    const { navigation, nearMeFilter, mySitesFilter, highwaysFilter, regionsFilter } = this.props;
    return (
      <Container>
        <ImageBackground source={chooseLocationBackground} style={{ width: '100%', height: '100%' }}>
          <Header style={COMMON.header} iosBarStyle="light-content">
            <NavigationBackButton navigation={navigation} />
          </Header>

          <Content>
            <View style={[Helpers.flexCenter]}>
              <H2>{i18n.t('chooseLocation.title')}</H2>
              <TouchableOpacity onPress={() => { this.toggleNearMeFilter() }} style={[ChooseLocationStyles.btnBox, Helpers.justifyContentCenter, Helpers.alignItemsCenter]}>
                <View style={{ position: 'relative' }}>
                  {!!nearMeFilter && (<Badge />)}
                  <Image source={nearMeIcon} resizeMode='contain' style={{ width: 40, height: 40 }} />
                </View>
                <Subtitle1 style={[ChooseLocationStyles.btnText, Helpers.textAlignCenter]}>{
                  i18n.t('chooseLocation.nearMe')}</Subtitle1>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => { navigation.navigate('ChooseHighway') }} style={[ChooseLocationStyles.btnBox, Helpers.justifyContentCenter, Helpers.alignItemsCenter]}>
                <View style={{ position: 'relative' }}>
                  {!!highwaysFilter.length && (<Badge />)}
                  <Image source={byHighwayIcon} resizeMode='contain' style={{ width: 40, height: 40 }} />
                </View>

                <Subtitle1 style={[ChooseLocationStyles.btnText, Helpers.textAlignCenter]}>{
                  i18n.t('chooseLocation.byHighway')}</Subtitle1>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => { navigation.navigate('ChooseRegion') }} style={[ChooseLocationStyles.btnBox, Helpers.justifyContentCenter, Helpers.alignItemsCenter]}>
                <View style={{ position: 'relative' }}>
                  {!!regionsFilter.length && (<Badge />)}
                  <Image source={byRegionIcon} resizeMode='contain' style={{ width: 40, height: 40 }} />
                </View>
                <Subtitle1 style={[ChooseLocationStyles.btnText, Helpers.textAlignCenter]}>{
                  i18n.t('chooseLocation.byRegion')}</Subtitle1>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => { this.toggleMySitesFilter() }} style={[ChooseLocationStyles.btnBox, Helpers.justifyContentCenter, Helpers.alignItemsCenter]}>
                <View style={{ position: 'relative' }}>
                  {!!mySitesFilter && (<Badge />)}
                  <Image source={mySitesIcon} resizeMode='contain' style={{ width: 40, height: 40 }} />
                </View>
                <Subtitle1 style={[ChooseLocationStyles.btnText, Helpers.textAlignCenter]}>{i18n.t('chooseLocation.mySites')}</Subtitle1>
              </TouchableOpacity>
            </View >
          </Content >
          <Footer style={COMMON.footer}>
            <FooterTab style={COMMON.footer}>
              <Button badge vertical onPress={() => { this.resetFilters() }}>
                <Ionicons name="ios-close" size={30} color="#FFF" style={[Helpers.justifyContentCenter, Helpers.alignItemsCenter, Helpers.textAlignCenter]} />
                <Caption style={{ color: '#FFFFFF' }}>{i18n.t('actionClearAll')}</Caption>
              </Button>
            </FooterTab>
          </Footer>
        </ImageBackground>
      </Container>
    );
  }
}

IntroStepFourScreen.propTypes = {
  nearMeFilter: PropTypes.bool.isRequired,
  mySitesFilter: PropTypes.bool.isRequired,
  highwaysFilter: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number])).isRequired,
  regionsFilter: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number])).isRequired,
  setNearMeFiltersDispatch: PropTypes.func.isRequired,
  setMySitesFiltersDispatch: PropTypes.func.isRequired,
  resetFiltersDispatch: PropTypes.func.isRequired
}

const mapStateToProps = state => {
  return {
    nearMeFilter: state.filtersStore.nearMeFilter,
    mySitesFilter: state.filtersStore.mySitesFilter,
    highwaysFilter: state.filtersStore.highwaysFilter,
    regionsFilter: state.filtersStore.regionsFilter
  };
};

const mapDispatchToProps = dispatch => {
  return {
    resetFiltersDispatch: () => dispatch(resetFilters()),
    setNearMeFiltersDispatch: value => dispatch(setNearMeFilters(value)),
    setMySitesFiltersDispatch: value => dispatch(setMySitesFilters(value))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(IntroStepFourScreen);
