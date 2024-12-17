import { View , Text , StyleSheet , Image , ActivityIndicator } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters'
import imagePath from '@/src/constants/imagePath'
import ButtonComp from "@/src/components/atoms/BottonComp"
import {  router } from 'expo-router'

const TermsAgree = () => {
  const onAgree = ()=> {
    router.push("/(auth)/login")
  };
    return (
      <>
        <SafeAreaView style={styles.container}>
        <View style={styles.header}>
        <Text style={styles.welcome_text}>Welcome to Whatsapp</Text>
        <Image source={imagePath.welcome} style={styles.image_style} resizeMode='contain' />
        <Text style={styles.description_text}>Read our 
        <Text style={styles.link_text}>Privacy Policy</Text> Tap
        "Agree and containue" to accept the
        <Text style={styles.link_text}>Teams of Service.</Text></Text>
        <View style={{width: moderateScale(300)}}>
        <ButtonComp title="AGREE AND CONTINUE"  onPress={onAgree}/>
        </View>
        </View>
        <View style={styles.footer}>
        <Text style={styles.from_text}>From</Text>
        <Text style={styles.facebook_text}>Facebook</Text>
    </View>
  </SafeAreaView>
      </>
    )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: verticalScale(84),
    paddingHorizontal: scale(30),
  },
  header: {
    alignItems: "center",
  },
  footer: {
    alignItems: "center",
  },
  from_text: {
    fontSize: moderateScale(12),
    color: "#867373",
  },
  facebook_text: {
    fontSize: moderateScale(15),
    color: "#000",
    textTransform: "uppercase",
    fontWeight: "600",
  },
  welcome_text: {
    fontSize: moderateScale(25),
    fontWeight: "bold",
    color: "black",
    marginBottom: verticalScale(10),
  },
  image_style: {
    width: moderateScale(550),
    height: moderateScale(250),
    borderRadius: moderateScale(250),
  },
  description_text: {
    alignItems: "center",
    
    fontSize: moderateScale(13),
    color: "black",
    
  },
  link_text: {
    alignItems: "center",
    color: "#0C42cc",
  }
})

export default TermsAgree