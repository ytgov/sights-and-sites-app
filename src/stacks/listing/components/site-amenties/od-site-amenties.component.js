import React from 'react';
import PropTypes from 'prop-types';
import {Dimensions, FlatList, Image, TouchableOpacity, View} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import {Helpers, Subtitle1} from '../../../../theme/theme';
import {SITE_AMENTIES} from '../../../../config';
import SiteAmentiesStyles, {CAROUSEL_CONFIG} from './site-amenties.styles';

const {width} = Dimensions.get('window');
const sliderWidth = width - CAROUSEL_CONFIG.outerScreenPadding * 2 - CAROUSEL_CONFIG.carouselItemPadding * 2 - CAROUSEL_CONFIG.carouselArrowWidth * 2;
const itemWidth = sliderWidth;
const sliderArrowLeft = require('../../../../../assets/stacks/listing/amenties/arrow-left-icon.png');
const sliderArrowRight = require('../../../../../assets/stacks/listing/amenties/arrow-right-icon.png')

class SiteAmenties extends React.Component {
    carousel = null;

    state = {
        carouselActive: false
    }

    snapToNextSlide() {
        this.carousel.snapToNext();
    }

    snapToPrevSlide() {
        this.carousel.snapToPrev();
    }

    toggleCarousel(index) {
        const {carouselActive} = this.state;
        this.setState({
            carouselActive: !carouselActive
        }, () => {
            if (!this.carousel) {
                return false;
            }
            setTimeout(() => {
                if (this.carousel.currentIndex !== index) {
                    this.carousel.snapToItem(index);
                }
            }, 100);
            return true;
        });
    }

    render() {
        const {items, locale} = this.props;
        const {carouselActive} = this.state;
        const amenties = items.map(amentyID => SITE_AMENTIES[amentyID]);

        return (
            <View>
                <FlatList
                    horizontal
                    style={SiteAmentiesStyles.amenitiesList}
                    data={amenties}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({item, index}) => <TouchableOpacity onPress={() => {
                        this.toggleCarousel(index)
                    }} style={SiteAmentiesStyles.amenitiesListIconBox}>
                        <Image source={item.imageInactive} style={SiteAmentiesStyles.amenitiesListIcon}
                               resizeMode='contain'/>
                    </TouchableOpacity>}
                />
                {carouselActive &&
                <View style={[SiteAmentiesStyles.carouselBox]}>
                    <TouchableOpacity onPress={() => this.snapToPrevSlide()}>
                        <Image source={sliderArrowLeft} style={SiteAmentiesStyles.amenitiesListArrow}
                               resizeMode='contain'/>
                    </TouchableOpacity>
                    <Carousel
                        ref={carousel => {
                            this.carousel = carousel;
                        }}
                        data={amenties}
                        useScrollView
                        style={[Helpers.alignItemsCenter, Helpers.justifyContentCenter]}
                        renderItem={({item}) =>
                            <View style={SiteAmentiesStyles.carouselItem}><View
                                style={[Helpers.alignItemsCenter, Helpers.justifyContentCenter]}>
                                <Image source={item.imageActive} style={SiteAmentiesStyles.carouselItemIcon}
                                       resizeMode='contain'/>
                                <Subtitle1 style={{textAlign: 'center'}}>{item[locale]}</Subtitle1>
                            </View>
                            </View>
                        }
                        removeClippedSubviews={false}
                        sliderWidth={sliderWidth}
                        itemWidth={itemWidth}
                    />
                    <TouchableOpacity onPress={() => this.snapToNextSlide()}>
                        <Image source={sliderArrowRight} style={SiteAmentiesStyles.amenitiesListArrow}
                               resizeMode='contain'/>
                    </TouchableOpacity>
                </View>
                }
            </View>
        )
    }
}

SiteAmenties.propTypes = {
    items: PropTypes.arrayOf(PropTypes.string).isRequired,
    locale: PropTypes.string.isRequired
}

export default SiteAmenties;
