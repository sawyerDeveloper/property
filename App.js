import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Main from './src/Main'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'

import config from 'expo-config'
export default function App() {

  const client = new ApolloClient({
    uri: config.https_server,
    cache: new InMemoryCache()
  })
  const styles = {
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    }
  }
  return (
    <ApolloProvider client={client}>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <Main />
      </View>
    </ApolloProvider>
  )
}
