// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import ReceptionistTab from './ReceptionistPage';
// import PatientTab from './PatientTab';
// import PatientMgmt from './PatientMgmt';
// import DocMgmt from './DocMgmt';
// import SignIn from './sign-in/SignIn';
// import SignUp from './sign-up/SignUp';
// const Stack = createNativeStackNavigator();

// const App = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="SignIn">
//       <Stack.Screen
//           name="SignIn"
//           component={SignIn}
//           options={{ title: 'SignIn', headerShown: false }} 
//         />
//         <Stack.Screen
//           name="SignUp"
//           component={SignUp}
//           options={{ title: 'SignUp', headerShown: false }} 
//         />
//         <Stack.Screen
//           name="ReceptionistPage"
//           component={ReceptionistTab}
//           options={{ title: 'Receptionist', headerShown: false }} 
//         />
//         <Stack.Screen
//           name="PatientTab"
//           component={PatientTab}
//           options={{ title: 'Patient', headerShown: false }} 
//         />
//         <Stack.Screen  
//           name="PatientMgmt" 
//           component={PatientMgmt}
//           options={{ title: 'Patient', headerShown: false }}
//           />
//         <Stack.Screen  
//           name="DocMgmt" 
//           component={DocMgmt}
//           options={{ title: 'Doctor', headerShown: false }}
//           />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// export default App;
