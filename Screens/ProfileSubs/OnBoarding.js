import React, { useState, useRef, useMemo } from 'react';
import {
    ScrollView,
    Text,
    View,
    TouchableOpacity,
    Image,
    StyleSheet,
    TextInput, KeyboardAvoidingView
} from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import { Switch, FlatList } from 'react-native';
import Icons from "react-native-vector-icons/AntDesign";
import Icon from "react-native-vector-icons/AntDesign";

const OnBoarding = (props) => {
    const [email, setEmail] = useState('');
    const [cardName, setCardName] = useState('');
    const [expiry, setExpiry] = useState('');
    const [cvv, setCvv] = useState('');
    const bottomSheetRef = useRef(null);
    const [isYearly, setIsYearly] = useState(false);
    const snapPoints = useMemo(() => ['89%'], []);

    const togglePlan = () => setIsYearly(prev => !prev);
    const openBottomSheet = () => bottomSheetRef.current?.expand();

    const price = isYearly ? '86.40' : '9';
    const period = isYearly ? 'Year' : 'Month';

    const features = [
        '1 User',
        '1 Company',
        'Up to 100 Customers',
        'Unlimited Estimates',
        'Unlimited Invoices',
        'Unlimited Recurring Invoices',
        'Payments',
        'Expenses',
        'Reports',
        'Unlimited Templates',
        'No Watermark',
        'Stripe, Paypal',
        'Priority support',
      ];

    const planData = [
        {
          id: '1',
          name: 'Pro',
          price: '9',
          period: 'Month',
          features: features,
          backgroundColor: '#12153A',
          checkColor: '#E59617'
        },
        {
          id: '2',
          name: 'Business',
          price: '19',
          period: 'Month',
          features: features,
          backgroundColor: '#1E3A8A',
          checkColor: '#10B981'
        },
        {
          id: '3',
          name: 'Enterprise',
          price: '29',
          period: 'Month',
          features: features,
          backgroundColor: '#3B0764',
          checkColor: '#F59E0B'
        }
      ];

    const renderPlanCard = ({ item }) => (
        <View style={[styles.card, { marginBottom: 20 }]}>
          <View style={styles.redBackground}>
            <View style={[styles.redBackgroundg, { backgroundColor: item.checkColor }]}>
              <Icons name="check" size={22} color="white" style={{ alignSelf: "flex-end" }} />
            </View>
            <Text style={styles.planName}>{item.name}</Text>
            <Text style={styles.planPrice}>
              ${item.price} <Text style={styles.perText}>/ {item.period}</Text>
            </Text>
          </View>
          <ScrollView
            style={styles.featureList}
            showsVerticalScrollIndicator={false}
          >
            {item.features.map((feature, index) => (
              <Text key={index} style={styles.featureItem}>
                • {feature}
              </Text>
            ))}
          </ScrollView>
    
          <View style={styles.tax} />
          <Text style={styles.taxNote}>
            * All prices don't include additional Taxes
          </Text>
        </View>
      );

    return (
        <GestureHandlerRootView style={styles.container}>
            <View>
               <View style={{ alignItems: 'center', padding: 10, flexDirection: "row", justifyContent: "space-between", margin: "3%" }}>
                       <TouchableOpacity 
                       onPress={()=>{
                         props.navigation.navigate("OnBoarding");
                       }}
                       style={{
                         paddingVertical: 10,
                         backgroundColor: "#12153A",
                         borderRadius: 20,
                         paddingHorizontal: 22,
                         marginBottom: 5
                       }}>
                         <Text style={{ fontSize: 15, color: "white", fontWeight: "500" }}>Upgrade profile</Text>
                       </TouchableOpacity>
                       <Text style={{ fontSize: 16, color: "black", fontWeight: "500", marginBottom: 3, left: 18 }}>@me</Text>
                       <Image
                         source={require("../../assets/Images/girl.png")}
                         style={{ width: 40, height: 40, borderRadius: 50 }}
                       />
                     </View>
            </View>
            <BottomSheet
            ref={bottomSheetRef}
            snapPoints={snapPoints}
            index={0}
          enablePanDownToClose={true} 
          enableHandlePanningGesture={false} 
          enableContentPanningGesture={false}
            backgroundStyle={styles.bottomSheetBackground}
            handleIndicatorStyle={{
              display: 'none',
            }}>
            <BottomSheetView style={styles.bottomSheetContent}>
              <View style={styles.sheetContent}>
                <View style={{ flexDirection: "row", paddingHorizontal: 10, gap: 8, }}>
                  <Icons name="arrowleft" size={22} color="black" />
                  <Text style={styles.title}>Subscription Plans</Text>
                </View>
                <Text style={styles.subtitle}>
                  Save 20% when you choose the Yearly Plan.
                </Text>
                <FlatList
                  data={planData}
                  renderItem={renderPlanCard}
                  keyExtractor={item => item.id}
                  horizontal
                  pagingEnabled
                  snapToAlignment="center"
                  decelerationRate="fast"
                  showsHorizontalScrollIndicator={false}
                  contentContainerStyle={{ paddingHorizontal: 16 }}
                />
                <View style={styles.toggleContainer}>
                  <Text style={styles.toggleLabel}>Monthly</Text>
                  <Switch
                    value={isYearly}
                    onValueChange={togglePlan}
                    trackColor={{ false: '#D9D9D9', true: '#81b0ff' }}
                    thumbColor={isYearly ? '#D9D9D9' : '#8E8E8E'}
                  />
                  <Text style={styles.toggleLabel}>Yearly</Text>
                </View>
                <TouchableOpacity style={styles.upgradeButton} onPress={()=>{
                  props.navigation.navigate("ProfileSummary");
                }}>
                  <Text style={styles.upgradeButtonText}>Continue my upgrade</Text>
                </TouchableOpacity>
              </View>
            </BottomSheetView>
          </BottomSheet>
        </GestureHandlerRootView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2B2B2B96',
    },
    planName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 10, marginTop: 1
  },
  planPrice: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#E59617', marginTop: 1,
  },
  perText: {
    fontSize: 16,
    fontWeight: 'normal',
    color: 'white',
  },
  redBackground: {
    backgroundColor: '#12153A',
    width: '100%',
    padding: 10,
    borderRadius: "5%", marginBottom: 8, position: 'relative', paddingHorizontal:"3%"
  },
    btn: {
        paddingVertical: "12%"
    },
    invotxt: {
        margin: 20 
    },
    tax: {
        width: "88%", borderWidth: 0.5, alignSelf: "center"
      },
      subtitle: {
        fontSize: 15,
        color: '#12153A',
        marginBottom: 2,
        textAlign: 'center',
      },
      redBackgroundg: {
        height: 24,
        width: 24,
        borderRadius: 12,
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'flex-end',
        position: 'absolute', left: "100%", bottom: "99%"
      },
      card: {
        backgroundColor: '#fff',
        padding: 14,
        marginBottom: 12,
      },
      invtext: {
        fontSize: 18, 
        color: "black", 
        fontWeight: "bold"
      },
    header: {
        height: 74,
        width: "100%",
        backgroundColor: "#00386D"
    },
    bottomSheetBackground: {
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        paddingHorizontal: 20,
        borderWidth: 0.2, shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,
    },
    bottomSheetContent: {
        flex: 1, elevation: 12
    },
    sheetContent: {
        padding: 20,
    },
    title: {
        fontSize: 15,
        fontWeight: '500',
        marginBottom: "10%",
        color: "#727284", margin: 1, marginHorizontal:"3%"
    },
    upgradeButton: {
        backgroundColor: '#00386D',
        borderRadius: 15,
        padding: 16, justifyContent: "flex-end",
        alignItems: 'center', marginTop: "1%"
    },
    upgradeButtonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
    containe: {
        padding: 10,
        backgroundColor: '#fff',
        flex: 1,
    },
    labels: {
        fontWeight: 'bold',
        marginTop: 10,
        marginBottom: 4,
        color: '#333',
    },
    inputs: {
        height: 45, width: "95%",
        borderColor: '#ccc',
        borderWidth: 0.6,
        borderRadius: 8,
        paddingHorizontal: 10,
        backgroundColor: '#FFFFFF', marginTop: "3%"
    },
    headerContent: {
        flexDirection: "row",
        margin: 20,
        gap: 10,
        alignItems: "center",
        marginTop: 24
    },
    headerTitle: {
        fontSize: 17,
        color: "white",
        flex: 1
    },
    deleteButton: {
        paddingVertical: 6,
        paddingHorizontal: 8,
        backgroundColor: "#A6D4FF66",
        borderRadius: 20,
        flexDirection: "row",
        alignItems: "center",
        gap: 2,
        borderWidth: 0.5,
        borderColor: "white",
        marginHorizontal: 15
    },
    featureList: {
    maxHeight: 270,
    marginBottom: 4,
  },
  featureItem: {
    fontSize: 12,
    marginBottom: 1,
    color: '#12153A', margin: "1%", marginHorizontal: "2%"
  },
  taxNote: {
    fontSize: 14,
    color: '#FF8A1C',
    fontStyle: 'italic', marginTop: "3%"
  },
  toggleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 1,
  },
  toggleLabel: {
    fontSize: 14,
    marginHorizontal: 8,
  },
});

export default OnBoarding;