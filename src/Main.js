import React, { useRef } from 'react'
import { Animated, Image, Text, View } from 'react-native'
import { useQuery, gql } from '@apollo/client'
import PropertyLabel from './components/PropertyLabel'
const GET_PROPERTY = gql`
  query {
    getProperty
  }
`
export default function Main() {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const fadeIn = () => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(fadeAnim, {
      toValue: 1,
      useNativeDriver: true,
      duration: 1000
    }).start();
  };

  const fadeOut = () => {
    // Will change fadeAnim value to 0 in 5 seconds
    Animated.timing(fadeAnim, {
      toValue: 0,
      useNativeDriver: true,
      duration: 1000
    }).start();
  };
  const styles = {
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'grey',
      width: '100%'
    },
    floorplan: {
      width: 200,
      height: 200
    }
  }

  const { loading, error, data } = useQuery(GET_PROPERTY)
  if (loading) return <Text>Loading...</Text>
  if (error) return <Text>Error :(</Text>
  fadeIn()
  const property = data.getProperty
  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.fadingContainer,
          {
            opacity: fadeAnim

          }
        ]}
      >
        <PropertyLabel labelName="Address" labelValue={property.address} />
        <PropertyLabel labelName="City" labelValue={property.city} />
        <PropertyLabel labelName="State" labelValue={property.st} />
        <PropertyLabel labelName="Zip" labelValue={property.zip} />
        <PropertyLabel labelName="Bedrooms" labelValue={property.bedrooms} />
        <PropertyLabel labelName="Bathrooms" labelValue={property.bathrooms} />
        <PropertyLabel labelName="Floors" labelValue={property.floors} />
        <PropertyLabel labelName="Rent" labelValue={property.rent} />
        <Image style={styles.floorplan} source={property.floorplan} />
      </Animated.View>
    </View>
  )
}

