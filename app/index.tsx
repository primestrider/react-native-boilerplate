import { useTheme } from "@/hooks/useTheme";
import { BaseText } from "@/shared/components/base/BaseText";
import { Link } from "expo-router";
import { View } from "react-native";

export default function Home() {
  const { colors} = useTheme()
  return (
    <View style={{ padding: 16, backgroundColor: colors.background }}>
      <Link href="/examples/form-example">
        <BaseText variant="title">Go to Form Example</BaseText>
      </Link>
    </View>
  );
}
