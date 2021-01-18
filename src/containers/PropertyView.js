import React from 'react'
import { View, Image} from 'react-native'
import PropertyLabel from '../components/PropertyLabel'
const GET_PROPERTY = gql`
  query {
    getProperty(id)
  }
`
const PropertyView = (props) => {
    const data = props.data

    const styles = {
        container: {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'white',
          width: '100%'
        },
        floorplan: {
          width: 200,
          height: 200
        }
      }
    return (
        <View style={styles.container}>
            <PropertyLabel labelName="Unit Name" labelValue={data.name} />
            <PropertyLabel labelName="Address" labelValue={data.address} />
            <PropertyLabel labelName="City" labelValue={data.city} />
            <PropertyLabel labelName="State" labelValue={data.st} />
            <PropertyLabel labelName="Zip" labelValue={data.zip} />
            <PropertyLabel labelName="Bedrooms" labelValue={data.bedrooms} />
            <PropertyLabel labelName="Bathrooms" labelValue={data.bathrooms} />
            <PropertyLabel labelName="Floors" labelValue={data.floors} />
            <PropertyLabel labelName="Rent" labelValue={data.rent} />
            <Image style={styles.floorplan} source={data.floorplan} />
        </View>
    )
}

export default PropertyView