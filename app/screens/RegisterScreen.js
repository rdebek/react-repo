import React from "react";
import {
  Text,
  TextInput,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import { styles } from "../styles/RegisterScreenStyles";
import { footer } from "../components/Footer";
import { post } from "../components/Api";

function RegisterScreen({ navigation }) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [passwordConfirm, setPasswordConfirm] = React.useState("");

  return (
    <SafeAreaView style={styles.container}>
      {footer}
      <View style={styles.containerJustify}>
        <Text style={styles.textDescriptors}>E-mail address</Text>
        <TextInput
          keyboardType="email-address"
          autoCorrect={false}
          spellCheck={false}
          autoCapitalize="none"
          selectionColor="black"
          style={styles.formInput}
          value={email}
          onChangeText={setEmail}
        />
        <Text style={styles.textDescriptors}>Password</Text>
        <TextInput
          autoCorrect={false}
          spellCheck={false}
          autoCapitalize="none"
          selectionColor="black"
          style={styles.formInput}
          value={password}
          secureTextEntry={true}
          onChangeText={setPassword}
        />
        <Text style={styles.textDescriptors}>Confirm password</Text>
        <TextInput
          autoCorrect={false}
          spellCheck={false}
          autoCapitalize="none"
          selectionColor="black"
          style={styles.formInput}
          value={passwordConfirm}
          secureTextEntry={true}
          onChangeText={setPasswordConfirm}
        />

        <View style={{ alignItems: "center" }}>
          <TouchableOpacity onPress={handleRegister}>
            <View style={styles.register}>
              <Text style={styles.registerText}>REGISTER</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
  function handleRegister() {
    if (password != passwordConfirm) {
      return Alert.alert("Passwords aren't the same.");
    }
    if (!email) {
      return Alert.alert("Please enter your email address.");
    }

    post("https://no-fomo-backend.herokuapp.com/register", {
      auth: "fcdfa1d2961404557b54eeada355ddfc57469792d290a557f81544b8587d6a21",
      email: email,
      password: password,
    });

    // if register is successfull:
    // navigation.navigate("EmailScreen", { emailAddress: email });
    // send email with verification code
    console.log(
      `email: ${email}\n pass: ${password}\n pass_conf: ${passwordConfirm}`
    );
  }
}

export default RegisterScreen;
