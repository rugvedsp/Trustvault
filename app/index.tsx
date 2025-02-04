import { Text, View } from "react-native";
import Login from './../components/Login';
import Header from './tabs/Header';
import MainPage from './tabs/MainPage';
import HealthCare from './DomainTabs/HealthCare'
import FormTemplate from './FormTabs/FormTemplate'
import PrescriptionTemplate from "./FormTabs/prescriptionTemplate";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
      }}
    >
    {/* <Login /> */}
    {/* <FormTemplate /> */}
    {/* <PrescriptionTemplate /> */}
    {/* <PrescriptionForm /> */}
    <MainPage />
    {/* <HealthCare /> */}

    
    </View>
  );
}
