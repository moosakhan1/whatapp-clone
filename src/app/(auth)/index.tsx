import { View , Text , StyleSheet , Image , ActivityIndicator } from 'react-native'
import React , {useEffect , useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import imagePath from '@/src/constants/imagePath'
import { moderateScale, verticalScale } from 'react-native-size-matters'
import { router } from 'expo-router'

const Auth = () => {
  const [ isLoading , setIsLoading ] = useState(false);

  let navigate_to_welcome = () =>{
    router.push("/(auth)/terms_agree");
  };

  let loading_timeout = () =>{
    setIsLoading(true);
    setTimeout(navigate_to_welcome, 3000) 
  }

  useEffect(() =>{
    const timeout = setTimeout(loading_timeout, 2000)
    
    return () =>{
      clearTimeout(timeout)
    }
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}></View>
      <View style={styles.body}>
        <Image source={imagePath.logo} style={styles.logo_style} resizeMode='contain' />
        <Text style={styles.whapsapp_text}>Whatsapp</Text>
        </View>
      <View style={styles.footer}>
        {isLoading ? (
          <>
          <ActivityIndicator size={moderateScale(48)} color={"#0ccc83"} />
          <Text style={styles.loading_text}>Loading...</Text>
          </>
        ) : (
          <>
          <Text style={styles.from_text}>From</Text>
          <Text style={styles.facebook_text}>Facebook</Text>
          </>
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: verticalScale(50),
  },
  header: {},
  body: {
    alignItems: "center",
    gap: verticalScale(10),
  },
  footer: {
    alignItems: "center",
    height: verticalScale(80),
    justifyContent: "flex-end",
  },
  from_text: {
    fontSize: moderateScale(12),
    color: "#867373",
  },
  facebook_text: {
    fontSize: moderateScale(15),
    color: "#000000",
  },
  logo_style: {
    width: moderateScale(60),
    height: moderateScale(70),
    borderRadius: 20,
  },
  whapsapp_text: {
    fontSize: moderateScale(35),
    color: "#000000",
    fontWeight: "bold",
  },
  loading_text: {
    fontSize: moderateScale(20),
    color: "#00A884",
    fontWeight: "bold",
    marginTop: verticalScale(15),
  }
})

export default Auth