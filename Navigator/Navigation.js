import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SplashScreen from "../Screens/SplashScreen";
import Register from "../Screens/Login/Register";
import LoginScreen from "../Screens/Login/LoginScreen";
import SignUpScreen from "../Screens/Login/SignUpScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { KeyboardAvoidingView, TouchableOpacity, View } from "react-native";
import HomeScreen from "../Screens/Login/Home/HomeScreen";
import Client from "../Screens/Clients/Client";
import Project from "../Screens/Projects/Project";
import Setting from "../Screens/Settings/Setting";
import Ionicons from 'react-native-vector-icons/Ionicons';
import Allinvoices from "../Screens/Invoices/Allinvoices";
import CreateInvoice from "../Screens/Invoices/CreateInvoice";
import ShareInvoice from "../Screens/Invoices/ShareInvoice";
import OnBoarding from "../Screens/ProfileSubs/OnBoarding";
import ProfileSummary from "../Screens/ProfileSubs/ProfileSummary";
import ModalActionSheet from "../Components/ModalActionSheet";
import NewInvoice from "../Screens/Invoices/NewInvoice";
import PreviewInvoice from "../Screens/Invoices/PreviewInvoice";
import OnBoardingInvoice from "../Screens/OnBoard/OnBoardingInvoice";
import CreatedInvoices from "../Screens/OnBoard/CreatedInvoices";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function MyTabs() {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalIsOpen, setIsOpen] = useState(false);
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}>
      <View style={{ flex: 1, backgroundColor:"white"}}>
      {
        setIsOpen && (
          <Tab.Navigator screenOptions={{ headerShown: false, tabBarActiveTintColor: "#FA4A0C", tabBarInactiveTintColor: "#101010" }} >
          <Tab.Screen
            name="Home"
            component={HomeScreen}
            options={{
              tabBarIcon: ({ color, size }) => {
                return (<Ionicons name="home-outline" size={size} color={color} />)
              },
            }}
          />
          <Tab.Screen
            name="Clients"
            component={Client}
            options={{

              tabBarIcon: ({ color, size }) => {
                return (<Ionicons name="people-outline" size={size} color={color} />)
              },
            }} />
          <Tab.Screen
            name="Add"
            component={() => null} 
            options={{
              tabBarIcon: ({ focused }) => (
                <TouchableOpacity
                  onPress={() => setModalVisible(true)}
                  activeOpacity={0.8}
                  style={{
                    backgroundColor: "#00386D",
                    width: 60,
                    height: 60,
                    borderRadius: 30,
                    justifyContent: "center",
                    alignItems: "center",
                    bottom: 25,
                    borderWidth: 4,
                    borderColor: "white",
                  }}
                >
                  <Ionicons name="add" size={32} color="white" />
                </TouchableOpacity>
              ),
              tabBarLabel: () => null,
            }}
            listeners={{
              tabPress: (e) => {
                e.preventDefault(); // Prevent tab press from navigating
                setModalVisible(true);
              },
            }}
          />
          <Tab.Screen
            name="Project"
            component={Project}
            options={{
              tabBarIcon: ({ color, size }) => {
                return (<Ionicons
                  name="document-text-outline"
                  size={size}
                  color={color}
                />)
              },
            }} />
          <Tab.Screen
            name="Settings"
            component={Setting}
            options={{
              tabBarIcon: ({ color, size }) => {
                return (<Ionicons name="settings-outline" size={size} color={color} />)
              },
            }} />
        </Tab.Navigator>
        )
      }
        <ModalActionSheet
          visible={modalVisible}
          onClose={() => setModalVisible(false)}
        />
      </View>
    </KeyboardAvoidingView>
  );
};

function StackScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="SplashScreen" component={SplashScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Register" component={Register} options={{ headerShown: false }} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false }} />
      <Stack.Screen name="SignUpScreen" component={SignUpScreen} options={{ headerShown: false }} />
      <Stack.Screen name='MyTabs' component={MyTabs} options={{ headerShown: false }} />
      <Stack.Screen name='Allinvoices' component={Allinvoices} options={{ headerShown: false }} />
      <Stack.Screen name='CreateInvoice' component={CreateInvoice} options={{ headerShown: false }} />
      <Stack.Screen name='ShareInvoice' component={ShareInvoice} options={{ headerShown: false }} />
      <Stack.Screen name='OnBoarding' component={OnBoarding} options={{ headerShown: false }} />
      <Stack.Screen name='ProfileSummary' component={ProfileSummary} options={{ headerShown: false }} />
      <Stack.Screen name='NewInvoice' component={NewInvoice} options={{ headerShown: false }} />
      <Stack.Screen name='PreviewInvoice' component={PreviewInvoice} options={{ headerShown: false }} />
      <Stack.Screen name='OnBoardingInvoice' component={OnBoardingInvoice} options={{ headerShown: false }} />
      <Stack.Screen name='CreatedInvoices' component={CreatedInvoices} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};

const Navigation = () => {

  return <StackScreen />
};

export default Navigation;