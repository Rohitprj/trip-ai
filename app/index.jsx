import { useRouter, useFocusEffect } from "expo-router";

export default function MyScreen() {
  const router = useRouter();

  useFocusEffect(() => {
    // router.replace('/home');
    router.replace('/home2');
    // router.replace('/home3');
    // router.replace("/explorer");
  });
}
