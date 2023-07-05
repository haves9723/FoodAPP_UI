import {
  StyleSheet,
  View,
  Dimensions,
  Image,
  FlatList,
  Animated
} from 'react-native'
import React ,{ useRef } from 'react'

const ITEM_WIDTH = width;
const DOT_SIZE = 8;
const DOT_SPACING = 8;
const DOT_SIZE_INDICATOR = DOT_SIZE + DOT_SPACING;


const data = [
  {
    id: 1,
    imageUri: "https://cdn.grabon.in/gograbon/images/web-images/uploads/1658919135375/swiggy-coupons.jpg"
  },
  {
    id: 2,
    imageUri: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/mfz2zorpe8in1noybhzo",
  },
  {
    id: 3,
    imageUri: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/lhnwo9ezxo7mpkpvtdcy"
  }
];

const { width, height } = Dimensions.get('window');

const Item = ({ imageUri }) => {
  return (
    <View>
      <Image
        style={{ height: 200, width: width }}
        source={{ uri: imageUri }} />
    </View>

  )
}

const Pagination = ({ data, scrollX }) => {
  return (
    <View style={styles.paginationContainer}>
      {data.map((_, i) => {
        return (
          <View style={styles.dots} key={i} />
        )
      })}
      <Animated.View
        style={
          [styles.dotIndicator, {
            transform: [{
              translateX: Animated.divide(scrollX, width * .75 ).interpolate({
                inputRange: [0, 1],
                outputRange: [0, DOT_SIZE_INDICATOR + 2]
              })
            }]
          }]
        }>
      </Animated.View>
    </View>
  )
}

const Carousel = () => {
  const scrollX = useRef(new Animated.Value(0)).current;
  return (
    <View>
      <Animated.FlatList
        data={data}
        renderItem={({ item }) => <Item imageUri={item.imageUri} />}
        keyExtractor={item => item.id}
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        bounces={false}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {useNativeDriver: true}
        )}
        horizontal
      >
      </Animated.FlatList>
      <Pagination data={data} scrollX={scrollX}/>
    </View>
  )
}

export default Carousel

const styles = StyleSheet.create({
  paginationContainer: {
    flexDirection: 'row',
    position: 'absolute',
    left: width * .75 / 2,
    top: 20
  },
  dots: {
    height: DOT_SIZE,
    width: DOT_SIZE,
    backgroundColor: 'red',
    marginHorizontal: DOT_SPACING,
    borderRadius: DOT_SIZE,
    marginBottom: DOT_SPACING,
  },
  dotIndicator: {
    height: DOT_SIZE_INDICATOR,
    width: DOT_SIZE_INDICATOR,
    borderRadius: DOT_SIZE_INDICATOR,
    borderWidth: 2,
    borderColor: 'green',
    position: 'absolute',
    left: DOT_SIZE / 2,
    top: -DOT_SIZE / 2
  }


})