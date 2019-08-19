import React from 'react';
import PropTypes from 'prop-types';
import { View, FlatList, Image, Dimensions, TouchableOpacity } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { Subtitle1 } from '../../../../theme/theme';
import { SITE_AMENTIES } from '../../../../config';
import SiteAmentiesStyles from './site-amenties.styles';

const { width } = Dimensions.get('window');
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
    const { carouselActive } = this.state;
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
      }, 100)
    });
  }

  // TODO update styles, move and refactor
  render() {
    const { items } = this.props;
    const { carouselActive } = this.state;
    const amenties = items.map(amentyID => SITE_AMENTIES[amentyID]);
    return (
      <View style={{ position: 'relative', zIndex: 1 }}>
        <FlatList
          horizontal
          style={{ marginTop: 16, paddingTop: 16, paddingBottom: 16, borderTopWidth: 1, borderTopColor: '#CBCBCB', borderBottomWidth: 1, borderBottomColor: '#CBCBCB' }}
          data={amenties}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item, index }) => <TouchableOpacity onPress={() => { this.toggleCarousel(index) }} style={{ paddingRight: 8 }}>
            <Image source={item.imageInactive} style={{ width: 40, height: 40 }} resizeMode='contain' />
          </TouchableOpacity>}
        />
        {carouselActive &&
          <View style={[SiteAmentiesStyles.carouselBox]}>
            <TouchableOpacity onPress={() => this.snapToPrevSlide()}>
              <Image source={sliderArrowLeft} style={{ width: 13, height: 22 }} resizeMode='contain' />
            </TouchableOpacity>
            <Carousel
              ref={carousel => { this.carousel = carousel; }}
              data={amenties}
              useScrollView
              renderItem={({ item }) =>
                <View style={{
                  backgroundColor: '#000',
                  paddingTop: 26,
                  paddingBottom: 26,
                  paddingLeft: 20,
                  paddingRight: 20,
                  textAlign: 'center',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}><View style={{ textAlign: 'center', justifyContent: 'center' }}>
                    <Image source={item.imageActive} style={{ alignSelf: 'center', width: 40, height: 40, marginBottom: 14 }} resizeMode='contain' />
                    <Subtitle1 style={{ textAlign: 'center' }}>{item.en}</Subtitle1>
                  </View>
                </View>
              }
              removeClippedSubviews={false}
              sliderWidth={width - 16 * 2 - 20 * 2 - 13 * 2}
              itemWidth={width - 16 * 2 - 20 * 2 - 13 * 2}
            />
            <TouchableOpacity onPress={() => this.snapToNextSlide()}>
              <Image source={sliderArrowRight} style={{ width: 13, height: 22 }} resizeMode='contain' />
            </TouchableOpacity>
          </View>
        }
      </View>
    )
  }
}

SiteAmenties.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default SiteAmenties;