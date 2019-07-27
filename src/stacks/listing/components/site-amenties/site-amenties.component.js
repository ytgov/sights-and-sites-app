import React from 'react';
import { View, FlatList, Image, Dimensions } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Carousel from 'react-native-snap-carousel';
import { Subtitle1 } from '../../../../theme/theme';


const { width, height } = Dimensions.get('window');
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

  toggleCarousel() {
    const { carouselActive } = this.state;
    this.setState({
      carouselActive: !carouselActive
    });
  }

  render() {
    const { items } = this.props;
    const { carouselActive } = this.state;
    return (
      <View>
        <FlatList
          horizontal
          style={{ marginTop: 16, marginBottom: 16, paddingTop: 16, paddingBottom: 16, borderTopWidth: 1, borderTopColor: '#CBCBCB', borderBottomWidth: 1, borderBottomColor: '#CBCBCB' }}
          data={items}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <TouchableOpacity onPress={() => { this.toggleCarousel() }} style={{ paddingRight: 8 }}>
            <Image source={item.image} style={{ width: 40, height: 40 }} resizeMode='contain' />
          </TouchableOpacity>}
        />
        {
          carouselActive && <View style={{
            flexDirection: 'row', position: 'relative', zIndex: 10, top: 0, alignItems: 'center', justifyContent: 'center',
            backgroundColor: '#000000', paddingLeft: 20, marginBottom: 10,
            paddingRight: 20,
          }}>
            <TouchableOpacity onPress={() => this.snapToPrevSlide()}>
              <Image source={sliderArrowLeft} style={{ width: 13, height: 22 }} resizeMode='contain' />
            </TouchableOpacity>
            <Carousel
              ref={carousel => { this.carousel = carousel; }}
              data={items}
              style={{

              }}
              renderItem={({ item, index }) =>
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
                    <Image source={require('../../../../../assets/stacks/listing/amenties/1active.png')} style={{ alignSelf: 'center', width: 40, height: 40, marginBottom: 14 }} resizeMode='contain' />
                    <Subtitle1 style={{ textAlign: 'center' }}>Bear-proof garbage bins</Subtitle1>
                  </View>
                </View>
              }
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

export default SiteAmenties;