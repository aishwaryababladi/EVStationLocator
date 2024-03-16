import { View, Text } from 'react-native'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

export default function SearchBar() {
    return (
        <View>
            <GooglePlacesAutocomplete
      placeholder='Search EV Charging station'
      onPress={(data, details = null) => {
        // 'details' is provided when fetchDetails = true
        console.log(data, details);
      }}
      query={{
        key: 'YOUR API KEY',
        language: 'en',
      }}
    />
            </View>
    )
}