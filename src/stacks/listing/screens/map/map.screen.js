import React from 'react';
import { Image, View, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import { Container, Header, Content, Footer, FooterTab, Button } from 'native-base';
import MapView from 'react-native-maps';
import PropTypes from 'prop-types';

// TODO Separate
import Badge from '../../../where-to/screens/choose-location/choose-location.styled-components';

import { COMMON, Caption } from '../../../../theme/theme';

const whereToIcon = require('../../../../../assets/stacks/tabs/where-to-icon.png');
const siteTypeIcon = require('../../../../../assets/stacks/tabs/site-type-icon.png');
const moreIcon = require('../../../../../assets/stacks/tabs/more-icon.png');

const { width, height } = Dimensions.get('window');

class MapScreen extends React.Component {
  state = {

  }

  render() {
    const { navigation, highwaysFilter, regionsFilter, nearMeFilter, mySitesFilter } = this.props;
    return (<Container>
      <Header style={[COMMON.header, COMMON.headerBlack]} />
      <Content>
        <MapView
          initialRegion={{
            latitude: 63.389423,
            longitude: -136.714739,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          style={{ width, height, flex: 1 }} />
      </Content>
      <Footer>
        <FooterTab style={{ backgroundColor: '#000000' }}>
          <Button vertical onPress={() => { navigation.navigate('WhereTo') }}>
            <View style={{ position: 'relative' }}>
              {!!(highwaysFilter.length || regionsFilter.length || nearMeFilter || mySitesFilter) && (<Badge style={{ top: 0, right: -1 }} />)}
              <Image style={{ width: 24, height: 24 }} resizeMode='contain' source={whereToIcon} />
            </View>
            <Caption style={{ color: '#FFFFFF' }}>Where to?</Caption>
          </Button>
          <Button vertical>
            <Image style={{ width: 24, height: 24 }} resizeMode='contain' source={siteTypeIcon} />
            <Caption style={{ color: '#FFFFFF' }}>Site type</Caption>
          </Button>
          <Button badge vertical>
            {/* <Badge ><Text>51</Text></Badge> */}
            <Image style={{ width: 24, height: 24 }} resizeMode='contain' source={moreIcon} />
            <Caption style={{ color: '#FFFFFF' }}>More</Caption>
          </Button>
        </FooterTab>
      </Footer>
    </Container>)
  }
}

MapScreen.propTypes = {
  nearMeFilter: PropTypes.bool.isRequired,
  mySitesFilter: PropTypes.bool.isRequired,
  highwaysFilter: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number])).isRequired,
  regionsFilter: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number])).isRequired
}

const mapStateToProps = (state) => {
  return {
    nearMeFilter: state.filtersStore.nearMeFilter,
    mySitesFilter: state.filtersStore.mySitesFilter,
    highwaysFilter: state.filtersStore.highwaysFilter,
    regionsFilter: state.filtersStore.regionsFilter
  };
};

const mapDispatchToProps = () => {
  return {

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MapScreen);
