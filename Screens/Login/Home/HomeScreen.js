import React, { useState, useRef, useMemo } from 'react';
import { View, Text, SafeAreaView, Image, TouchableOpacity, ScrollView, KeyboardAvoidingView, TextInput, StyleSheet } from 'react-native';
import Icon from "react-native-vector-icons/Entypo";
import BottomSheet, { BottomSheetView, BottomSheetBackdrop } from '@gorhom/bottom-sheet';
import { Switch, FlatList } from 'react-native';
import Icons from "react-native-vector-icons/AntDesign";

const HomeScreen = (props) => {
  const [email, setEmail] = useState('');
  const [cardName, setCardName] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCvv] = useState('');
  const bottomSheetRef1 = useRef(null);
  const bottomSheetRef2 = useRef(null);
  const bottomSheetRef3 = useRef(null);
  const bottomSheetRef4 = useRef(null);
  const [isYearly, setIsYearly] = useState(false);
  const snapPoints = useMemo(() => ['88%'], []);
  const snapPoint = useMemo(() => ['84%'], []);
  const snap = useMemo(() => ['84%'], []);
  const [isBottomSheet1Visible, setIsBottomSheet1Visible] = useState(false);
  const [isBottomSheet2Visible, setIsBottomSheet2Visible] = useState(false);
  const [isBottomSheet3Visible, setIsBottomSheet3Visible] = useState(false);
  const [isBottomSheet4Visible, setIsBottomSheet4Visible] = useState(false);
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
  const togglePlan = () => setIsYearly(prev => !prev);
  const openFourthSheet = () => {
    setIsBottomSheet1Visible(false);
    setIsBottomSheet2Visible(false);
    setIsBottomSheet3Visible(false);
    setIsBottomSheet4Visible(true);
    setTimeout(() => bottomSheetRef4.current?.expand());
    props.navigation.setOptions({
      tabBarStyle: { display: 'none' }
    });
  };
  const CloseFourthSheet = () => {
    setIsBottomSheet4Visible(false);
    props.navigation.setOptions({
      tabBarStyle: { display: 'flex' }
    });
  };
  const openThirdSheet = () => {
    setIsBottomSheet1Visible(false);
    setIsBottomSheet2Visible(false);
    setIsBottomSheet3Visible(true);
    setTimeout(() => bottomSheetRef3.current?.expand());
    props.navigation.setOptions({
      tabBarStyle: { display: 'none' }
    });
  };
  const CloseThirdSheet = () => {
    setIsBottomSheet3Visible(false);
    props.navigation.setOptions({
      tabBarStyle: { display: 'flex' }
    });
  };
  const openSecondSheet = () => {
    setIsBottomSheet1Visible(false);
    setIsBottomSheet2Visible(true);
    setTimeout(() => bottomSheetRef2.current?.expand());
    props.navigation.setOptions({
      tabBarStyle: { display: 'none' }
    });
  };
  const CloseSecondSheet = () => {
    setIsBottomSheet2Visible(false);
    props.navigation.setOptions({
      tabBarStyle: { display: 'flex' }
    });
  };
  const openBottomSheet = () => {
    setIsBottomSheet1Visible(true);
    setTimeout(() => bottomSheetRef1.current?.expand());
    props.navigation.setOptions({
      tabBarStyle: { display: 'none' }
    });
  };
  const closeBottomSheet = () => {
    setIsBottomSheet1Visible(false);
    props.navigation.setOptions({
      tabBarStyle: { display: 'flex' }
    });
  };
  const price = isYearly ? '86.40' : '9';
  const period = isYearly ? 'Year' : 'Month';
  const invoiceData = [
    {
      status: "Paid",
      views: "Viewed: 4 views",
      invoiceNumber: "Invoice #001",
      bankName: "Banco de Fomento Angola",
      amount: "200.000 USD"
    },
    {
      status: "Paid",
      views: "Viewed: 4 views",
      invoiceNumber: "Invoice #001",
      bankName: "Banco de Fomento Angola",
      amount: "200.000 USD"
    },
  ];
  const renderPlanCard = ({ item }) => (
    <View style={styles.card}>
      <View style={[styles.redBackground, { backgroundColor: item.backgroundColor }]}>
        <View style={[styles.redBackgroundg, { backgroundColor: item.checkColor }]}>
          <Icon name="check" size={22} color="white" style={{ alignSelf: "flex-end" }} />
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
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <View style={{ alignItems: 'center', padding: 10, flexDirection: "row", justifyContent: "space-between", margin: "3%" }}>
        <TouchableOpacity
          onPress={openBottomSheet}
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
          source={require("../../../assets/Images/girl.png")}
          style={{ width: 60, height: 60, borderRadius: 50 }}
        />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{
          backgroundColor: '#DEDEDE70',
          padding: 20,
          width: '95%',
          alignSelf: 'center',
          borderRadius: 15,
          justifyContent: 'space-between',
          flexDirection: 'row',
          alignItems: 'center',
          marginBottom: 20
        }}>
          <Image
            source={require('../../../assets/Images/image.png')}
            style={{ height: 120, width: 120 }}
          />
          <View style={{ width: '65%' }}>
            <Text style={{
              fontSize: 14,
              color: "black",
              textAlign: 'left',
              width: '100%'
            }}>
              Create your invoice in seconds!
            </Text>
            <Text style={{
              fontSize: 14,
              color: "black",
              textAlign: 'left',
              width: '100%', top: 4
            }}>
              Add the details, generate the document, and send it to the
              client with ease. Start now!
            </Text>
            <TouchableOpacity style={{
              padding: 10,
              backgroundColor: "#12153A",
              borderRadius: 20,
              paddingHorizontal: 10, width: "65%", marginTop: "5%"
            }}>
              <Text style={{ fontSize: 15, color: "white", fontWeight: "500", textAlign: "center" }}>New Invoice</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{
          backgroundColor: 'white',
          borderWidth: 1, borderColor: "#00000021",
          padding: 15,
          width: '95%',
          alignSelf: 'center',
          borderRadius: 15,
          marginBottom: 20
        }}>
          <View style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
            marginBottom: 6
          }}>
            <TouchableOpacity
              style={{ flexDirection: "row", gap: 5, alignItems: "center" }}
            >
              <Text>Invoices Sent</Text>
              <View style={{
                height: 30,
                width: 30,
                backgroundColor: "#FB724C",
                borderRadius: 18,
                justifyContent: "center",
                alignItems: "center"
              }}>
                <Text>4</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ flexDirection: "row", gap: 5, alignItems: "center" }}>
              <Text>Estimates</Text>
              <View style={{
                height: 30,
                width: 30,
                backgroundColor: "#E0E0E0",
                borderRadius: 18,
                justifyContent: "center",
                alignItems: "center"
              }}>
                <Text>3</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={{
            height: 1,
            width: "100%",
            backgroundColor: '#D3D3D3'
          }} />
          <TouchableOpacity onPress={() => {
            props.navigation.navigate("Allinvoices");
          }}>
            <Text style={{ fontSize: 14, alignSelf: "flex-end", fontWeight: "400", color: "#787486", marginTop: 10, marginBottom: 10 }}>see more envoices</Text>
          </TouchableOpacity>
          <View>
            {invoiceData.map((invoice, index) => (
              <View key={index} style={{
                marginBottom: 20,
                padding: 15,
                backgroundColor: 'white',
                borderRadius: 10,
                borderWidth: 1,
                borderColor: '#E0E0E0'
              }}>
                <TouchableOpacity onPress={() => {
                  props.navigation.navigate("CreateInvoice");
                }}>
                  <Icon name="dots-three-horizontal" size={22} style={{ alignSelf: "flex-end" }} />
                </TouchableOpacity>
                <View style={{ flexDirection: 'row', marginBottom: 8, gap: 10 }}>
                  <View style={{
                    height: 35,
                    width: 45,
                    backgroundColor: "#E0E0E0",
                    borderRadius: 10,
                    justifyContent: "center",
                    alignItems: "center"
                  }}>
                    <Text style={{ fontWeight: 'bold', color: "#34A853" }}>{invoice.status}</Text>
                  </View>
                  <View style={{
                    height: 35,
                    width: 140,
                    backgroundColor: "#36AECF3B",
                    borderRadius: 10,
                    justifyContent: "center",
                    alignItems: "center"
                  }}>
                    <Text style={{ fontWeight: 'bold', color: "#2B9DE0", fontSize: 12 }}>{invoice.views}</Text>
                  </View>
                </View>
                <Text style={{ fontWeight: '800', marginBottom: 5, fontSize: 18, color: "#0D062D" }}>{invoice.invoiceNumber}</Text>
                <Text style={{ marginBottom: 5 }}>{invoice.bankName}</Text>
                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{invoice.amount}</Text>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
      {
        isBottomSheet1Visible && (
          <BottomSheet
            ref={bottomSheetRef1}
            snapPoints={snapPoints}
            index={0}
            enablePanDownToClose={true}
            enableHandlePanningGesture={false}
            enableContentPanningGesture={false}
            onChange={(index) => {
              if (index === -1) {
                closeBottomSheet();
              } else if (index >= 0) {
                props.navigation.setOptions({
                  tabBarStyle: { display: 'none' }
                });
              }
            }}
            backgroundStyle={styles.bottomSheetBackground}
            backdropComponent={(props) => (
              <BottomSheetBackdrop
                {...props}
                appearsOnIndex={0}
                disappearsOnIndex={-1}
                opacity={0.5}

              />
            )}
            handleIndicatorStyle={{
              display: 'none',
            }}>
            <BottomSheetView style={styles.bottomSheetContent}>
            <KeyboardAvoidingView
                            behavior="padding"
                            style={{ flex: 1 }}
                            keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 0}
                          >
                            <ScrollView
                              contentContainerStyle={{
                                paddingBottom: "20%",
                              }}
                              keyboardShouldPersistTaps="handled"
                              showsVerticalScrollIndicator={false}
                            >
              <View style={styles.sheetContent}>
                <View style={{ flexDirection: "row", paddingHorizontal: 10, gap: 8, }}>
                <TouchableOpacity onPress={closeBottomSheet}>
                <Icons name="arrowleft" size={22} color="black" />
                </TouchableOpacity>
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
                <TouchableOpacity style={styles.upgradeButton} onPress={openSecondSheet}>
                  <Text style={styles.upgradeButtonText}>Continue my upgrade</Text>
                </TouchableOpacity>
              </View>
              </ScrollView>
              </KeyboardAvoidingView>
            </BottomSheetView>
          </BottomSheet>
        )}
      {
        isBottomSheet2Visible && (
          <BottomSheet
            ref={bottomSheetRef2}
            snapPoints={snapPoint}
            index={0}
            enablePanDownToClose={true}
            enableHandlePanningGesture={false}
            enableContentPanningGesture={false}
            onChange={(index) => {
              if (index === -1) {
                CloseSecondSheet();
              } else if (index >= 0) {
                props.navigation.setOptions({
                  tabBarStyle: { display: 'none' }
                });
              }
            }}
            backgroundStyle={{
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
            }}
            backdropComponent={(props) => (
              <BottomSheetBackdrop
                {...props}
                appearsOnIndex={0}
                disappearsOnIndex={-1}
                opacity={0.5}

              />
            )}
            handleIndicatorStyle={{
              display: 'none',
            }}>
            <BottomSheetView style={{
              flex: 1, elevation: 12
            }}>
            <KeyboardAvoidingView
            behavior="padding"
            style={{ flex: 1 }}
            keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 0}
          >
            <ScrollView
              contentContainerStyle={{
                paddingBottom: "20%",
              }}
              keyboardShouldPersistTaps="handled"
              showsVerticalScrollIndicator={false}
            >
              <View style={{
                padding: 20
              }}>
                <View style={{ flexDirection: "row", paddingHorizontal: 10, gap: 8, }}>
                <TouchableOpacity onPress={CloseSecondSheet}>
                <Icons name="arrowleft" size={22} color="black" />
                </TouchableOpacity>
                  <View style={{ flexDirection: "row", gap: 5, justifyContent: "center", alignItems: "center" }}>
                    <Text style={{
                      fontSize: 15,
                      fontWeight: 'bold',
                      marginBottom: "8%",
                      color: "#727284", margin: 1
                    }}>Order Summary</Text>
                    <Text style={{
                      fontSize: 18,
                      fontWeight: 'bold',
                      marginBottom: "8%",
                      color: "#E59617", margin: 1, letterSpacing: 1
                    }}>$9</Text>
                    <Text style={{
                      fontSize: 14,
                      fontWeight: 'bold',
                      marginBottom: "8%",
                      color: "#677582", letterSpacing: 1
                    }}> / Month</Text>
                  </View>
                </View>
                <Text style={{
                  fontSize: 15,
                  color: '#12153A',
                  marginBottom: 24,
                  textAlign: 'center'
                }}>
                  Then 9,00 $ monthly starting 17 April 2025
                </Text>
                <View style={{
                  backgroundColor: '#DEDEDE36',
                  borderRadius: 12,
                  padding: 20,
                  margin: 15
                }}>
                  <Text style={{
                    fontSize: 18,
                    fontWeight: 'bold',
                    color: '#12153A',
                    marginBottom: 16
                  }}>BuePay (Monthly-Lite Plan)</Text>
                  <View style={{
                    height: 1,
                    backgroundColor: '#E0E0E0',
                    marginVertical: 8
                  }} />
                  <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginVertical: 6
                  }}>
                    <Text style={{
                      fontSize: 16,
                      color: '#666666'
                    }}>Subtotal</Text>
                    <Text style={{
                      fontSize: 16,
                      color: '#12153A',
                      fontWeight: '500'
                    }}>9,00 US$</Text>
                  </View>
                  <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginVertical: 6,
                  }}>
                    <Text style={{
                      fontSize: 16,
                      color: '#666666'
                    }}>VAT</Text>
                    <Text style={styles.value}>9,00 US$</Text>
                  </View>

                  <View style={styles.divider} />

                  <View style={styles.row}>
                    <Text style={styles.totalLabel}>Due Today</Text>
                    <Text style={styles.totalValue}>9,00 US$</Text>
                  </View>
                </View>
                <View style={styles.btns}>
                  <TouchableOpacity style={styles.upgradeButton1} onPress={openThirdSheet}>
                    <Text style={styles.upgradeButton1Text}>Continue my upgrade</Text>
                  </TouchableOpacity>
                </View>
              </View>
              </ScrollView>
              </KeyboardAvoidingView>
            </BottomSheetView>
          </BottomSheet>
        )}
      {
        isBottomSheet3Visible && (
              <BottomSheet
                ref={bottomSheetRef3}
                snapPoints={snapPoint}
                index={0}
                enablePanDownToClose={true}
                enableHandlePanningGesture={false}
                enableContentPanningGesture={false}
                onChange={(index) => {
                  if (index === -1) {
                    CloseThirdSheet();
                  } else if (index >= 0) {
                    props.navigation.setOptions({
                      tabBarStyle: { display: 'none' }
                    });
                  }
                }}
                backgroundStyle={{
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
                }}
                backdropComponent={(props) => (
                  <BottomSheetBackdrop
                    {...props}
                    appearsOnIndex={0}
                    disappearsOnIndex={-1}
                    opacity={0.5}
    
                  />
                )}
                handleIndicatorStyle={{
                  display: 'none',
                }}>
                <BottomSheetView style={{
                  flex: 1, elevation: 12
                }}>
                <KeyboardAvoidingView
                    behavior="padding"
                    style={{ flex: 1 }}
                    keyboardVerticalOffset={Platform.OS === 'ios' ? 80 : 0}
                  >
                    <ScrollView
                      contentContainerStyle={{ paddingBottom: 40 }}
                      keyboardShouldPersistTaps="handled"
                      showsVerticalScrollIndicator={false}
                    >
                      <View style={styles.sheetContent}>
                        <View style={{ flexDirection: "row", paddingHorizontal: 10, gap: 10 }}>
                        <TouchableOpacity onPress={CloseThirdSheet}>
                        <Icons name="arrowleft" size={22} color="black" />
                        </TouchableOpacity>
                          <View>
                            <Text style={styles.title}>Payment </Text>
                          </View>
                        </View>
                
                        <Text style={styles.subtitle}>
                          Then 9,00 $ monthly starting 17 April 2025
                        </Text>
                
                        <View style={styles.containe}>
                          <Text style={styles.labels}>EMAIL</Text>
                          <TextInput
                            style={styles.inputs}
                            value={email}
                            onChangeText={setEmail}
                            placeholder="xxxx xxxx xxxx xxxx"
                            keyboardType="email-address"
                          />
                
                          <Text style={styles.labels}>NAME ON CARD</Text>
                          <TextInput
                            style={styles.inputs}
                            value={cardName}
                            onChangeText={setCardName}
                            placeholder="xxxx xxxx xxxx xxxx"
                          />
                
                          <View style={styles.rows}>
                            <View style={styles.halfInputContainer}>
                              <Text style={styles.labels}>EXPIRY</Text>
                              <TextInput
                                style={styles.inputs}
                                value={expiry}
                                onChangeText={setExpiry}
                                placeholder="MM/YY"
                                keyboardType="numeric"
                              />
                            </View>
                
                            <View style={styles.halfInputContainer}>
                              <Text style={styles.labels}>SECURITY CODE</Text>
                              <TextInput
                                style={styles.inputs}
                                value={cvv}
                                onChangeText={setCvv}
                                placeholder="CVV"
                                keyboardType="numeric"
                                secureTextEntry
                              />
                            </View>
                          </View>
                          <View style={styles.button}>
                          <TouchableOpacity
                            style={styles.upgradeButton}
                            onPress={openFourthSheet}
                          >
                            <Text style={styles.upgradeButtonText}>Subscribe Now</Text>
                          </TouchableOpacity>
                          </View>
                        </View>
                      </View>
                    </ScrollView>
                  </KeyboardAvoidingView>
                </BottomSheetView>
              </BottomSheet>
            )}
            {
              isBottomSheet4Visible && (
                        <BottomSheet
                          ref={bottomSheetRef4}
                          snapPoints={snapPoint}
                          index={0}
                          enablePanDownToClose={true}
                          enableHandlePanningGesture={false}
                          enableContentPanningGesture={false}
                          onChange={(index) => {
                            if (index === -1) {
                              CloseFourthSheet();
                            } else if (index >= 0) {
                              props.navigation.setOptions({
                                tabBarStyle: { display: 'none' }
                              });
                            }
                          }}
                          backgroundStyle={{
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
                          }}
                          backdropComponent={(props) => (
                            <BottomSheetBackdrop
                              {...props}
                              appearsOnIndex={0}
                              disappearsOnIndex={-1}
                              opacity={0.5}
              
                            />
                          )}
                          handleIndicatorStyle={{
                            display: 'none',
                          }}>
                          <BottomSheetView style={{
                            flex: 1, elevation: 12
                          }}>
                
                          <View style={[styles.sheetContent,{
                             justifyContent:"center", alignItems:"center"
                          }]}>
                          <Image source={require("../../../assets/Images/light.png")} style={styles.img}/>
                          <Text style={styles.congrate}>Congratulations!</Text>
                          <Text style={styles.congrates}>{`Your upgrade was successful,enjoy the \n  best we have to offer`}</Text>
                              <View style={{
                                paddingVertical: "5%"
                              }}>
                              <TouchableOpacity style={{  backgroundColor: '#00386D',
                                borderRadius: 15, 
                                alignItems: 'center', marginVertical: "2%", padding:15, paddingHorizontal:"13%"}} onPress={() => {
                                  props.navigation.navigate("OnBoarding");
                              }}>
                                  <Text style={styles.upgradeButtonText}>Enjoy my plan</Text>
                              </TouchableOpacity>
                              </View>
                          </View>
                          </BottomSheetView>
                        </BottomSheet>
                      )}
    </SafeAreaView >
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2B2B2B96',
  },
  img:{
    height:"50%", width:"80%"
},
congrate:{
  fontSize:14, fontWeight:"500", color:"#12153A", marginBottom:"2%"
},
congrates:{
  fontSize:14, fontWeight:"400", color:"#12153AAD", letterSpacing:0.8, textAlign:"center", marginBottom:5
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
    borderRadius: "5%", marginBottom: 8, position: 'relative', paddingHorizontal: "3%"
  },
  btn: {
    paddingVertical: "12%"
  },
  btns: {
    paddingVertical: "35%"
  },
  button: {
    paddingVertical: "25%"
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
    color: "#727284", margin: 1, marginHorizontal: "3%"
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
  upgradeButton1: {
    backgroundColor: '#00386D',
    borderRadius: 15,
    padding: 16, justifyContent: "flex-end",
    alignItems: 'center', marginTop: "1%"
  },
  upgradeButton1Text: {
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
  titles: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: "8%",
    color: "#E59617", margin: 1, letterSpacing: 1
  },
  monthtext: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: "8%",
    color: "#677582", letterSpacing: 1
  },
});

export default HomeScreen;
