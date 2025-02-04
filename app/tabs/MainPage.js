import { View, Text, ScrollView, Dimensions } from 'react-native'
import Header from './Header'; // Importing Header
import HorizontalSection from './HorizontalSection';
import React from 'react'
import DueSection from './DueSection';

const { width } = Dimensions.get('window');

export default function MainPage() {
  return (
    <ScrollView
    style={{
      // margin:30,
      paddingRight:width>786? '2%': 0,
      paddingLeft:width>786? '2%': 0,
      paddingTop:width>786? 0: 0,

    }}
    >
      <ScrollView >
      {/* Header */}
      <Header />
      
      <DueSection />

      {/* Issued Documents (Horizontal Scroll Section) */}
      <HorizontalSection />

      {/* Utility Section */}
      {/* <UtilitySection /> */}
      
    </ScrollView>
    </ScrollView>
  )
}