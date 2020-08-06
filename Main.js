import React, { useRef } from 'react'
import { Animated, Button, Text, View } from 'react-native'
import { useQuery, gql } from '@apollo/client'
const HELLO = gql`
  query {
    hello
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
            flex: .5,
            justifyContent: 'center',
            alignItems: 'center',
            width: 400,
            height: 400,
            backgroundColor: 'red'
        }
    }

    const { loading, error, data } = useQuery(HELLO)
    if (loading) return <Text>Loading...</Text>
    if (error) return <Text>Error :(</Text>
  
  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.fadingContainer,
          {
            opacity: fadeAnim // Bind opacity to animated value
          }
        ]}
      >
        <Text style={styles.fadingText}>Fading View!</Text>
      </Animated.View>
      <Text>{data.hello}</Text>
      <View style={styles.buttonRow}>
        <Button title="Fade In" onPress={fadeIn} />
        <Button title="Fade Out" onPress={fadeOut} />
      </View>
    </View>
  )
}

