import React, { useRef } from 'react'
import { Animated, Text, View } from 'react-native'
import { useQuery, gql } from '@apollo/client'
import PropertyView from './containers/PropertyView'
const GET_PROPERTIES = gql`
  query {
    getProperties
  }
`
export default function Main() {
  const fadeAnim = useRef(new Animated.Value(0)).current
  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      useNativeDriver: true,
      duration: 1000
    }).start()
  }

  const fadeOut = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      useNativeDriver: true,
      duration: 1000
    }).start()
  }

  const styles = {
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'grey',
      width: '80%'
    },
    fadingContainer: {
      opacity: fadeAnim
    }
  }

  const { loading, error, data } = useQuery(GET_PROPERTY)
  if (loading) return <Text>Loading...</Text>
  if (error) return <Text>Error :(</Text>

  fadeIn()

  return (
    <View style={styles.container}>
      <Animated.View style={styles.fadingContainer}>
       <PropertyView data={data.getProperty}/>
      </Animated.View>
    </View>
  )
}

