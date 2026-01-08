import { BaseText } from "@/shared/components/base/BaseText";
import { Link } from "expo-router";
import { View } from "react-native";

export default function Home() {
  return (
    <View style={{ padding: 16 }}>
      <Link href="/examples/form-example">
        <BaseText>Go to Form Example</BaseText>
      </Link>
    </View>
  );
}
