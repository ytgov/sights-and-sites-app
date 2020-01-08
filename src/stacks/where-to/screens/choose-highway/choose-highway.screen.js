import React from 'react';
import {FlatList, Image, ImageBackground, TouchableOpacity, View} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import {connect} from 'react-redux';
import {Col, Container, Content, Footer, FooterTab, Header, Row} from 'native-base';
import {cloneDeep} from 'lodash';
import PropTypes from 'prop-types';
import i18n from '../../../../locale/locale';
import {Caption, COMMON, H2, Helpers, Subtitle1} from '../../../../theme/theme';
import ChooseHighwayStyles from './choose-highway.styles';
import {HighwayBadgeText, HighwayBox, HighwayBoxSpacer} from './choose-highway.styled-components';
import {resetHighways, setHighwayFilters} from '../../../../store/actions/filters';
import {success} from '../../../../shared/services/notify';
import NavigationBackButton from '../../../../shared/components/navigation/back-button';

const highwayIcon = require('../../../../../assets/stacks/where-to/highway-number-background.png');

const chooseHighwayBackground = require('../../../../../assets/common/common-background.jpg');

class ChooseHighwayScreen extends React.Component {
    state = {
        selectedHighways: []
    }

    componentDidMount() {
        const {highwaysFilter, resetHighwaysDispatch} = this.props;
        resetHighwaysDispatch();
        const selectedHighways = cloneDeep(highwaysFilter);
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
        const {navigation, setHighwayFiltersDispatch} = this.props;
        console.info('setHighwayFilters ==>', selectedHighways)
        setHighwayFiltersDispatch(selectedHighways);
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
                    <HighwayBox>
                        <TouchableOpacity style={{flexDirection: 'row', minHeight: 70}} onPress={() => {
                            this.toggleHighway(highway.name)
                        }}>
                            <View style={{paddingRight: 10}}>
                                {
                                    (selectedHighways.indexOf(highway.name) >= 0) ?
                                        <Ionicons
                                            style={[ChooseHighwayStyles.toggleIcon, ChooseHighwayStyles.toggleIconActive]}
                                            name="ios-checkmark" size={24} color="#FFF"/>
                                        :
                                        <Ionicons style={ChooseHighwayStyles.toggleIcon} name="ios-add" size={24}
                                                  color="#FFF"/>
                                }
                                <View style={{position: 'relative', width: 18, marginTop: 10}}>
                                    <Image source={highwayIcon} resizeMode='contain' style={{width: 18, height: 19}}/>
                                    <HighwayBadgeText black>{highway.roadNumber}</HighwayBadgeText>
                                </View>
                            </View>

                            <Subtitle1 style={[
                                ChooseHighwayStyles.highwayName,
                                {
                                    maxWidth: '80%'
                                }
                            ]}>{highway.name}</Subtitle1>

                        </TouchableOpacity>
                    </HighwayBox>
                </HighwayBoxSpacer>
            </Col>
        )
    }

    render() {
        const {navigation, highways} = this.props;
        const {selectedHighways} = this.state;
        return (
            <Container>
                <ImageBackground source={chooseHighwayBackground} style={{width: '100%', height: '100%'}}>
                    {/* Move to separate component */}
                    <Header style={COMMON.header} iosBarStyle="light-content">
                        <NavigationBackButton navigation={navigation}/>
                    </Header>
                    <Content>
                        <View>
                            <View><H2 style={Helpers.textAlignCenter}>{i18n.t('chooseHighway.title')}</H2></View>
                            <View style={ChooseHighwayStyles.highwaysBox}>
                                <Row style={{flexWrap: 'wrap'}}>
                                    <FlatList
                                        data={highways}
                                        extraData={selectedHighways}
                                        keyExtractor={item => item.id.toString()}
                                        numColumns={2}
                                        renderItem={({item}) => this.renderItem(item)}
                                    />
                                </Row>
                            </View>
                        </View>
                    </Content>
                    {/* Move to separate component */}
                    <Footer style={COMMON.footer}>
                        <FooterTab style={COMMON.footer}>
                            <View
                                style={[Helpers.flexDirectionRow, Helpers.alignItemsCenter, Helpers.justifyContentCenter, Helpers.fullWidth]}>
                                <TouchableOpacity style={[ChooseHighwayStyles.footerButton]} onPress={() => {
                                    this.applySelection()
                                }}>
                                    <Ionicons style={[ChooseHighwayStyles.footerToggleIcon]} name="ios-checkmark"
                                              size={30} color="#FFF"/>
                                    <Caption style={{color: '#FFFFFF'}}>{i18n.t('actionApply')}</Caption>
                                </TouchableOpacity>
                                <TouchableOpacity style={ChooseHighwayStyles.footerButton} onPress={() => {
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

ChooseHighwayScreen.propTypes = {
    highways: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object])).isRequired,
    highwaysFilter: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number])).isRequired,
    setHighwayFiltersDispatch: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
    return {
        highways: state.highwaysStore.highways,
        highwaysFilter: state.filtersStore.highwaysFilter
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setHighwayFiltersDispatch: value => dispatch(setHighwayFilters(value)),
        resetHighwaysDispatch: value => dispatch(resetHighways(value))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ChooseHighwayScreen);
