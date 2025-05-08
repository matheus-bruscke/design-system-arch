import { fonts, images } from "@repo/assets";
import { color, fontSizes } from "@repo/design";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import {
  Button,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function App() {
  const [fontsLoaded] = useFonts({
    "body-black": fonts.body.black,
    "body-regular": fonts.body.roman,
    "body-medium": fonts.body.medium,
    "body-bold": fonts.body.bold,
  });

  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }

  return (
    <View style={styles.container}>
      <Image source={images.logo} style={styles.image} />
      <View>
        <View style={styles.headingContainer}>
          <Text style={styles.heading}>Happening now</Text>
          <Text style={styles.subheading}>Join Today</Text>
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color["ds-bg"],
    alignItems: "center",
    justifyContent: "center",
  },
  headingContainer: {
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    marginBottom: 16,
  },
  heading: {
    fontFamily: "body-bold",
    letterSpacing: -0.5,
    fontSize: Number(fontSizes["ds-fs-lg"]),
    color: color["ds-foreground"],
  },
  subheading: {
    fontFamily: "body-regular",
    fontSize: Number(fontSizes["ds-fs-body"]),
    color: color["ds-foreground"],
  },
  image: {
    width: 36,
    height: 36,
    marginBottom: 64,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    backgroundColor: color["ds-primary"],
    borderRadius: 100,
    height: 48,
    paddingHorizontal: 24,
  },
  buttonText: {
    fontFamily: "body-medium",
    fontSize: Number(fontSizes["ds-fs-body"]),
    color: color["ds-bg"],
  },
  googleIcon: {
    width: 20,
    height: 20,
  },
});
