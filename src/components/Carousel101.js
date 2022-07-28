import React, { Component } from 'react'
import { Text, View, Dimensions, StyleSheet,Image } from 'react-native'

import Carousel from 'react-native-snap-carousel' // Version can be specified in package.json

//import { scrollInterpolator, animatedStyles } from './utils/Animations';

const SLIDER_WIDTH = Dimensions.get('window').width
const ITEM_WIDTH = Math.round(SLIDER_WIDTH )
const ITEM_HEIGHT = Math.round(ITEM_WIDTH*1.124)

const DATA = []
for (let i = 0; i < 3; i++) {
    DATA.push(i)
}

export default class App extends Component {
  
    state = {
        index: 0
    }

    constructor(props) {
        super(props)
        this._renderItem = this._renderItem.bind(this)
    }

    _renderItem({ item }) {
        return (
            <View style={styles.itemContainer}>
                <Image style={styles.itemLabel} source={require('../assets/Onboardin101-Carousel2.png')} />
            </View>
        )
    }
  
    render() {
        return (
            <View>
                <Carousel
                    ref={(c) => this.carousel = c}
                    data={DATA}
                    renderItem={this._renderItem}
                    sliderWidth={SLIDER_WIDTH}
                    itemWidth={ITEM_WIDTH}
                    containerCustomStyle={styles.carouselContainer}
                    inactiveSlideShift={0}
                    onSnapToItem={(index) => this.setState({ index })}
                    //scrollInterpolator={scrollInterpolator}
                    //slideInterpolatedStyle={animatedStyles}
                    useScrollView={true}          
                />
                <Text style={styles.counter}
                >
                    {this.state.index+1}
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    carouselContainer: {
        marginTop: '13%',
        height: '59%'
    },
    itemContainer: {
        width: ITEM_WIDTH,
        height: ITEM_HEIGHT,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white'
    },
    itemLabel: {
        color: 'white',
        width: '100%',
        height: '100%',
    },
    counter: {
        marginTop: -35,
        fontSize: 30,
        fontWeight: '500',
        textAlign: 'center',
        color: 'black',
    }
})