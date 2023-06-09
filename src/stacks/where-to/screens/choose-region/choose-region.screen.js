import React from 'react';
import {FlatList, Image, ImageBackground, TouchableOpacity, View} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import {connect} from 'react-redux';
import {Col, Container, Content, Footer, FooterTab, Header, Row} from 'native-base';
import {cloneDeep} from 'lodash';
import PropTypes from 'prop-types';
import i18n from '../../../../locale/locale';
import {Caption, COMMON, H2, Helpers, Subtitle1} from '../../../../theme/theme';
import ChooseRegionStyles from './choose-region.styles';
import {HighwayBox, HighwayBoxSpacer} from './choose-region.styled-components';
import {resetRegions, setRegionFilters} from '../../../../store/actions/filters';
import {success} from '../../../../shared/services/notify';
import NavigationBackButton from '../../../../shared/components/navigation/back-button';

const chooseHighwayBackground = require('../../../../../assets/common/common-background.jpg');

class ChooseRegionScreen extends React.Component {
    state = {
        selectedHighways: []
    }

    componentDidMount() {
        const {regionsFilter, resetRegionsDispatch} = this.props;
        resetRegionsDispatch()
        const selectedHighways = cloneDeep(regionsFilter);
        this.setState({selectedHighways});
    }

    toggleHighway(id) {
        const {selectedHighways} = this.state;
        const selectedHighwaysCopy = cloneDeep(selectedHighways);
        const matchIndex = selectedHighwaysCopy.indexOf(id);
        if (matchIndex >= 0) {
            selectedHighwaysCopy.splice(matchIndex, 1);
        } else {
            selectedHighwaysCopy.push(id);
        }
        this.setState({selectedHighways: selectedHighwaysCopy});
    }

    applySelection() {
        const {selectedHighways} = this.state;
        const {navigation, setRegionsFiltersDispatch} = this.props;
        setRegionsFiltersDispatch(selectedHighways);
        success(i18n.t('notifications.onFiltersUpdate'));
        navigation.goBack();
    }

    clearSelection() {
        this.setState({selectedHighways: []})
    }

    renderItem(highway) {
        const {selectedHighways} = this.state;
        return (
            <Col style={{width: '50%'}} key={`${highway.id}`}>
                <HighwayBoxSpacer>
                    <HighwayBox style={{height: 100}}>
                        <TouchableOpacity style={{height: 100, position: 'relative'}} onPress={() => {
                            this.toggleHighway(highway.name)
                        }}>
                            {
                                (selectedHighways.indexOf(highway.name) >= 0) ?
                                    <Ionicons
                                        style={[ChooseRegionStyles.toggleIcon, ChooseRegionStyles.toggleIconActive]}
                                        name="ios-checkmark" size={24} color="#FFF"/>
                                    :
                                    <Ionicons style={ChooseRegionStyles.toggleIcon} name="ios-add" size={24}
                                              color="#FFF"/>
                            }
                            <Subtitle1 style={ChooseRegionStyles.highwayName}
                                       numberOfLines={1}>{i18n.language === 'en' ? highway.name : highway.fr_name}</Subtitle1>
                            <Image source={highway.image} resizeMode='contain'
                                   style={{position: 'absolute', height: 80, width: 64, right: -10}}/>
                        </TouchableOpacity>
                    </HighwayBox>
                </HighwayBoxSpacer>
            </Col>
        )
    }

    render() {
        const {navigation, regions} = this.props;
        const {selectedHighways} = this.state;
        return (
            <Container>
                <ImageBackground source={chooseHighwayBackground} style={{width: '100%', height: '100%'}}>
                    <Header style={COMMON.header} iosBarStyle="light-content">
                        <NavigationBackButton navigation={navigation}/>
                    </Header>
                    <Content>
                        <View>
                            <View><H2 style={Helpers.textAlignCenter}>{i18n.t('chooseRegion.title')}</H2></View>
                            <View style={ChooseRegionStyles.highwaysBox}>
                                <Row style={{flexWrap: 'wrap'}}>
                                    {
                                        <FlatList
                                            data={regions}
                                            extraData={selectedHighways}
                                            keyExtractor={item => item.id.toString()}
                                            numColumns={2}
                                            renderItem={({item, index}) => this.renderItem(item, index)}
                                        />
                                    }
                                </Row>
                            </View>
                        </View>
                    </Content>
                    {/* Move to separate component */}
                    <Footer style={COMMON.footer}>
                        <FooterTab style={COMMON.footer}>
                            <View
                                style={[Helpers.flexDirectionRow, Helpers.alignItemsCenter, Helpers.justifyContentCenter, Helpers.fullWidth]}>
                                <TouchableOpacity style={ChooseRegionStyles.footerButton} onPress={() => {
                                    this.applySelection()
                                }}>
                                    <Ionicons style={[ChooseRegionStyles.footerToggleIcon]} name="ios-checkmark"
                                              size={30} color="#FFF"/>
                                    <Caption style={{color: '#FFFFFF'}}>{i18n.t('actionApply')}</Caption>
                                </TouchableOpacity>
                                <TouchableOpacity style={ChooseRegionStyles.footerButton} onPress={() => {
                                    this.clearSelection()
                                }}>
                                    <Ionicons name="ios-close" size={30} color="#FFF"
                                              style={[Helpers.justifyContentCenter, Helpers.alignItemsCenter, Helpers.textAlignCenter]}/>
                                    <Caption style={{color: '#FFFFFF'}}>{i18n.t('actionClearAll')}</Caption>
                                </TouchableOpacity>
                            </View>
                        </FooterTab>
                    </Footer>
                </ImageBackground>
            </Container>
        );
    }
}

ChooseRegionScreen.propTypes = {
    regions: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object])).isRequired,
    regionsFilter: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number])).isRequired,
    setRegionsFiltersDispatch: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
    return {
        regions: state.regionsStore.regions,
        regionsFilter: state.filtersStore.regionsFilter
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setRegionsFiltersDispatch: value => dispatch(setRegionFilters(value)),
        resetRegionsDispatch: () => dispatch(resetRegions())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ChooseRegionScreen);
