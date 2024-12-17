import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
import ButtonComp from "@/src/components/atoms/BottonComp";
import { AntDesign } from "@expo/vector-icons";
import { router } from "expo-router";
import CountryPicker from 'react-native-country-picker-modal'


const Login = () => {
  const [visible, setVisible] = useState(false);
  const [countryName, setCountryName] = useState("India");
  const [countryCode, setCountryCode] = useState("+ 91");

  const onNextButtonClick = () => {
    router.push("/(auth)/verify_otp");
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.heading_container}>
          <Text style={styles.heading}>Enter your phone number</Text>
          <Text style={styles.description}>
            WhatsApp will need to verify your phone number.
            <Text style={styles.link_description}>What's my number?</Text>
          </Text>
        </View>
        <View style={styles.input_main_container}>
          <TouchableOpacity
            style={styles.dropDown_container}
            onPress={() => setVisible(true)}
          >
            <View />
            <Text style={styles.dropDown_title}>{countryName}</Text>
            <AntDesign
              name="caretdown"
              size={moderateScale(14)}
              color="black"
            />
          </TouchableOpacity>
          <View style={styles.horizontal_line} />
          <View style={styles.input_container}>
            <View style={styles.country_code}>
              <Text style={styles.country_code_text}>{countryCode}</Text>
              <View style={styles.horizontal_line} />
            </View>
            <View style={{ gap: verticalScale(10), flex: 1 }}>
              <TextInput
                style={styles.input}
                placeholder="Enter Your Phone Number"
              />
              <View style={styles.horizontal_line} />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.footer}>
        <ButtonComp
          title="Next"
          style={{ paddingHorizontal: scale(29) }}
          onPress={onNextButtonClick}
        />
      </View>
      {visible && (
        <CountryPicker
          visible={true}
          countryCode="PK"
          onClose={() => setVisible(false)}
          withFilter
          onSelect={(e: any) => {
            setCountryCode(`+${e.callingCode[0]}`);
            setCountryName(e.name);
          }}
        />
       )}
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    paddingVertical: verticalScale(50),
    alignItems: "center",
    paddingHorizontal: scale(50),
  },
  header: {
    gap: verticalScale(50),
  },
  footer: {},
  heading_container: {
    gap: verticalScale(20),
  },
  input_main_container: {},
  input_container: {
    paddingVertical: verticalScale(12),
    flexDirection: "row",
    alignItems: "center",
    gap: scale(20),
  },
  heading: {
    fontSize: moderateScale(20),
    color: "black",
    fontWeight: "bold",
    textAlign: "center",
  },
  description: {
    textAlign: "center",
    fontSize: moderateScale(13),
    color: "black",
    fontWeight: "400",
  },
  link_description: {
    color: "#002AC0",
  },
  horizontal_line: {
    width: "100%",
    height: verticalScale(1),
    backgroundColor: "#05AA82",
  },
  dropDown_container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: verticalScale(10),
    paddingHorizontal: scale(20),
  },
  dropDown_title: {
    fontSize: moderateScale(16),
    fontWeight: "500",
    color: "black",
  },
  input: {
    fontSize: moderateScale(14),
    // marginTop: -20,
  },
  country_code: {
    gap: verticalScale(10),
    fontWeight: "500",
    color: "black",
  },
  country_code_text: {
    fontSize: moderateScale(16),
    fontWeight: "500",
    color: "black",
  },
});