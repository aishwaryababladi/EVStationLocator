import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Colors from './../../Utils/'
import { TouchableOpacity } from 'react-native';
import * as WebBrowser from "expo-web-browser";
import { useWarmUpBrowser } from '../../../hooks/useWarmUpBrowser';

WebBrowser.maybeCompleteAuthSession();
export default function LoginScreen() {
    useWarmUpBrowser();
 
    const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });
    const onPress=async ()=>{
        try {
            const { createdSessionId, signIn, signUp, setActive } =
              await startOAuthFlow();
       
            if (createdSessionId) {
              setActive({ session: createdSessionId });
            } else {
              // Use signIn or signUp for next steps such as MFA
            }
          } catch (err) {
            console.error("OAuth error", err);
          }
    }
  return (
    <View style={{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        margin:70

    }}>
        <Image source={require('./../../../assets/images/ev-logo.png')}
            style={styles.logoImage}
        />

        <Image source={require('./../../../assets/images/EV.jpg')}
            style={styles.bgImage}
        />
        <View style={{padding:20}}>
            <Text style={styles.heading}>Rev up your electric journey with the Ultimate EV Charging Station Finder App</Text>
            <Text style={styles.desc}>Unlock the thrill of electric exploration – discover EV charging stations, plan your epic journey, and experience so much more with just one electrifying click.</Text>
            <TouchableOpacity style={styles.buttton}
            onPress={onPress}>
                <Text style={{
                    color:Colors.WHITE,
                    textAlign:'center',
                    fontFamily:'lato',
                    fontSize:17
                }}>Login with Google</Text>
            </TouchableOpacity>

        </View>


    </View>
  )
}

const styles = StyleSheet.create({
    logoImage:{
        width:200,
        height:40,
        objectFit:'contain'
    },
    bgImage:{
        width:'100%',
        height:100,
        marginTop:20,
        objectFit:'cover'
    },
    heading:{
        fontSize:25,
        fontFamily:'lato-b',
        textAlign:'center',
        marginTop:20
    },
    desc:{
        fontSize:17,
        fontFamily:'lato',
        textAlign:'center',
        marginTop:15,
        color:'#000',
        color:Colors.GRAY
    },
    button:{
        backgroundColor:Colors.PRIMARY,
        padding:16,
        display:'flex',
        borderRadius:99,
        marginTop:70
    }
})