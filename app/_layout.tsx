import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>

      {/* this is the default  screen which is index. */}
      
      <Stack.Screen name="index" options={{
        headerShown:false
      }} />

      {/* we change it for some time  */}
      {/* <Stack.Screen name="tabs">

      </Stack.Screen> */}



    </Stack>
  );
}
