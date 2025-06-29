import React, { useState, useRef, useMemo } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  SafeAreaView, TextInput, Switch, Picker, KeyboardAvoidingView, Platform,
  Image
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import InvoiceHeader from '../../Components/InvoiceHeader';
import InvoiceFooter from '../../Components/InvoiceFooter';
import BottomSheet, { BottomSheetView, BottomSheetBackdrop } from '@gorhom/bottom-sheet';
import Icons from "react-native-vector-icons/AntDesign";
import Ico from "react-native-vector-icons/Entypo";
import DropDownPicker from 'react-native-dropdown-picker';
import { Dropdown } from 'react-native-element-dropdown';
import Icon from 'react-native-vector-icons/Feather';
import Ic from 'react-native-vector-icons/FontAwesome6';
import { FloatingLabelInput } from 'react-native-floating-label-input';

const NewInvoice = (props) => {
  const [isChecked, setIsChecked] = useState(true);
  const [quantity, setQuantity] = useState('1');
  const [rate, setRate] = useState('0.0');
  const [amount, setAmount] = useState('0.0');
  const [unit, setUnit] = useState('Unit');
  const [units, setUnits] = useState('Units');
  const [uni, setUni] = useState('Units');
  const [discount, setDiscount] = useState('');
  const [tax, setTax] = useState('');
  const [selectedDiscount, setSelectedDiscount] = useState('');
  const [selectedTax, setSelectedTax] = useState('');
  const [saveInfo, setSaveInfo] = useState(true);
  const [value, setValue] = useState('');
  const [values, setValues] = useState('');
  const [name, setName] = useState('');
  const [isSheetNotOpen, setIsSheetNotOpen] = useState(false);
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const bottomSheetRef = useRef(null);
  const bottomSheetRef1 = useRef(null);
  const [invoiceOpen, setInvoiceOpen] = useState(false);
  const [invoiceValue, setInvoiceValue] = useState(null);
  const snapPoints = useMemo(() => ['86%'], []);
  const snapPoint = useMemo(() => ['65%'], []);
  const [invoiceItems, setInvoiceItems] = useState();
  const [product, setProduct] = useState('');
  const [description, setDescription] = useState('');
  const [companyname, setCompanyName] = useState('');
  const [address, setAddess] = useState('');
  const [number, setNumber] = useState('');
  const isInputFilled = product.trim() !== '' && description.trim() !== '';
  const [isBottomSheet1Visible, setIsBottomSheet1Visible] = useState(false);
  const [isBottomSheet2Visible, setIsBottomSheet2Visible] = useState(false);
  const [businessOpen, setBusinessOpen] = useState(false);
  const [businessValue, setBusinessValue] = useState(null);
  const [businessItems, setBusinessItems] = useState();

  const [ClientsOpen, setClientsOpen] = useState(false);
  const [ClientsValue, setClientsValue] = useState(null);
  const [ClientsItems, setClientsItems] = useState([
    {
      label: 'Add new item', value: 'description',
      icon: () => <Icon name="file-plus" size={18} color="#727284" />,
    },
  ]);

  const [productOpen, setProductOpen] = useState(false);
  const [productValue, setProductValue] = useState(null);
  const [productItems, setProductItems] = useState([
    {
      label: 'Add new item', value: 'description',
      icon: () => <Icon name="file-plus" size={18} color="#727284" />,
    },
  ]);

  const [paymentOpen, setPaymentOpen] = useState(false);
  const [paymentValue, setPaymentValue] = useState(null);
  const [paymentItems, setPaymentItems] = useState();

  const [EnvoiceLogoOpen, setEnvoiceLogoOpen] = useState(false);
  const [EnvoiceValue, setEnvoiceValue] = useState(null);
  const [EnvoiceItems, setEnvoiceItems] = useState();
  const openBottomSheet = () => {
    setIsBottomSheet1Visible(true);
    setTimeout(() => bottomSheetRef.current?.expand());
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
  const openBottomSheet1 = () => {
    setIsBottomSheet1Visible(false);
    setIsBottomSheet2Visible(true)
    setTimeout(() => bottomSheetRef1.current?.expand());
    props.navigation.setOptions({
      tabBarStyle: { display: 'none' }
    });
  };
  const closeBottomSheet1 = () => {
    setIsBottomSheet2Visible(false);
    props.navigation.setOptions({
      tabBarStyle: { display: 'flex' }
    });
  };
  const navigation = useNavigation();

  const data = [
    { label: 'Item 1', value: '1' },
    { label: 'Item 2', value: '2' },
    { label: 'Item 3', value: '3' },
    { label: 'Item 4', value: '4' },
    { label: 'Item 5', value: '5' },
    { label: 'Item 6', value: '6' },
    { label: 'Item 7', value: '7' },
    { label: 'Item 8', value: '8' },
  ];
  return (
    <SafeAreaView style={styles.container}>
      <InvoiceHeader />
      <View style={styles.progressBar}>
        <View style={styles.progressFill} />
      </View>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.sectionTitle}>Invoice Details</Text>
        <View style={styles.fromCard}>
          <Text style={styles.fromLabel}>FROM</Text>
          <Text style={styles.companyName}>Company Name</Text>
          <Text style={styles.address}>California, Los Angeles</Text>
          <Text style={styles.address}>6454 Iowa City, CA</Text>
          <Text style={styles.address}>United States</Text>
          <TouchableOpacity style={styles.editProfile}>
            <Text style={styles.editText}>Edit Profile</Text>
          </TouchableOpacity>
        </View>
        {
          !isBottomSheet1Visible && (
            <>
              <View style={{ zIndex: 5000 }}>
                <DropDownPicker
                  open={invoiceOpen}
                  value={invoiceValue}
                  items={invoiceItems}
                  setOpen={setInvoiceOpen}
                  setValue={setInvoiceValue}
                  setItems={setInvoiceItems}
                  placeholder="Invoice Details"
                  style={styles.dropdown}
                  dropDownContainerStyle={styles.dropdownContainer}
                  textStyle={styles.text}
                  listItemLabelStyle={styles.listItem}
                />
              </View>
              <View style={{ zIndex: 5000, marginBottom: ClientsOpen ? 100 : 0 }}>
                <DropDownPicker
                  open={ClientsOpen}
                  value={ClientsValue}
                  items={ClientsItems}
                  setOpen={setClientsOpen}
                  setValue={setClientsValue}
                  setItems={setClientsItems}
                  placeholder="Client Details"
                  style={[styles.dropdow, { borderWidth: 1, elevation: 0 }]}
                  dropDownContainerStyle={[
                    styles.dropdownContainers,
                    { paddingTop: 10, borderWidth: 0, elevation: 0 },
                  ]}
                  textStyle={styles.text}
                  showArrowIcon={true}
                  showTickIcon={true}

                  renderListItem={(props) => (
                    <View>
                      <View style={{ alignItems: 'center', marginVertical: 10 }}>
                        <View
                          style={{
                            width: '95%',
                            height: 1,
                            backgroundColor: '#DADADA',
                            alignSelf: 'center',
                          }}
                        />
                      </View>
                      <Dropdown
                        data={[
                          { label: '1', value: 'true' },
                          { label: '2', value: 'false' },
                        ]}
                        labelField="label"
                        valueField="value"
                        placeholder="Company/Client Name"
                        style={{
                          height: 45,
                          width: 280,
                          borderColor: '#D9D9D938',
                          borderWidth: 1,
                          borderRadius: 5,
                          backgroundColor: "#DCD8D885", alignSelf: "center", paddingHorizontal: 5
                        }}
                        renderRightIcon={() => (
                          <Icon name="chevron-down" size={18} color="#677582" />
                        )}
                        maxHeight={100}
                        value={units}
                        onChange={item => setUnits(item.value)}
                        itemTextStyle={{ color: "#677582" }}
                      />
                      <TouchableOpacity style={styles.customItems} onPress={openBottomSheet1}>
                        {props.icon && props.icon()}
                        <Text style={styles.customItemTexts}>New Client</Text>
                        <Ic name="person-circle-plus" size={18} color="#2B9DE0" />
                      </TouchableOpacity>
                    </View>
                  )}
                  zIndex={5000}
                  zIndexInverse={1000}
                />
              </View>

              <View style={{ zIndex: 4000 }}>
                <DropDownPicker
                  open={businessOpen}
                  value={businessValue}
                  items={businessItems}
                  setOpen={setBusinessOpen}
                  setValue={setBusinessValue}
                  setItems={setBusinessItems}
                  placeholder="Business Details"
                  style={styles.dropdown}
                  dropDownContainerStyle={styles.dropdownContainer}
                  textStyle={styles.text}
                  listItemLabelStyle={styles.listItem}
                />
              </View>
              <View style={{ marginBottom: productOpen ? 150 : 0, zIndex: 5000 }}>
                <DropDownPicker
                  open={productOpen}
                  value={productValue}
                  items={productItems}
                  setOpen={setProductOpen}
                  setValue={setProductValue}
                  setItems={setProductItems}
                  placeholder="Product/Service Information"
                  style={[styles.dropdowns, { borderWidth: 0.8, elevation: 0 }]}
                  dropDownContainerStyle={[
                    styles.dropdownContainers,
                    { paddingTop: 10, borderWidth: 0, elevation: 0 },
                  ]}
                  textStyle={styles.text}
                  showArrowIcon={true}
                  showTickIcon={true}
                  renderListItem={(props) => (
                    <View>
                      <View style={{ alignItems: 'center', marginVertical: 10 }}>
                        <View
                          style={{
                            width: '95%',
                            height: 1,
                            backgroundColor: '#DADADA',
                            alignSelf: 'center',
                          }}
                        />
                      </View>

                      <TouchableOpacity style={styles.customItem} onPress={openBottomSheet}>
                        {props.icon && props.icon()}
                        <Text style={styles.customItemText}>{props.label}</Text>
                        <Icon name="file-plus" size={18} color="#1A78F2" />
                      </TouchableOpacity>
                    </View>
                  )}
                  zIndex={5000}
                  zIndexInverse={1000}
                />
              </View>

              <View style={{ zIndex: 2000 }}>
                <DropDownPicker
                  open={EnvoiceLogoOpen}
                  value={EnvoiceValue}
                  items={EnvoiceItems}
                  setOpen={setEnvoiceLogoOpen}
                  setValue={setEnvoiceValue}
                  setItems={setEnvoiceItems}
                  placeholder="Envoice Logo"
                  style={styles.dropdown}
                  dropDownContainerStyle={styles.dropdownContainer}
                  textStyle={styles.text}
                  listItemLabelStyle={styles.listItem}
                />
              </View>

              <View style={{ zIndex: 1000 }}>
                <DropDownPicker
                  open={paymentOpen}
                  value={paymentValue}
                  items={paymentItems}
                  setOpen={setPaymentOpen}
                  setValue={setPaymentValue}
                  setItems={setPaymentItems}
                  placeholder="Payment Terms"
                  style={styles.dropdown}
                  dropDownContainerStyle={styles.dropdownContainer}
                  textStyle={styles.text}
                  listItemLabelStyle={styles.listItem}
                />
              </View>
            </>
          )
        }
      </ScrollView>
      {
        isBottomSheet1Visible && (
          <BottomSheet
            ref={bottomSheetRef}
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
              shadowRadius: 7.49
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
            <BottomSheetView style={{ flex: 1 }}>
              <KeyboardAvoidingView
                behavior="padding"
                style={{ flex: 1 }}
                keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 0}
              >
                <ScrollView
                  contentContainerStyle={{
                    paddingBottom: "30%",

                  }}
                  keyboardShouldPersistTaps="handled"
                  showsVerticalScrollIndicator={false}
                >
                  <View style={{ padding: 20 }}>
                    <View style={{ flexDirection: "row", paddingHorizontal: 10, justifyContent: "space-between", marginHorizontal: 10 }}>
                      <Text style={styles.title}>Add New Item</Text>
                      <TouchableOpacity onPress={closeBottomSheet}>
                      <Ico name="cross" size={22} color="black" />
                      </TouchableOpacity>
                    
                    </View>
                    <FloatingLabelInput
                      label="Service /Product"
                      value={product}
                      onChangeText={setProduct}
                      containerStyles={{
                        borderWidth: 1,
                        borderRadius: 10,
                        paddingHorizontal: 10, paddingVertical: 4,
                        borderColor: '#ccc', marginHorizontal: 10, marginTop: "5%", backgroundColor: "#BFB7B74F"
                      }}
                      customLabelStyles={{
                        colorFocused: '#677582',
                        fontSizeFocused: 12,
                      }}
                      inputStyles={{
                        fontSize: 16,
                        color: '#677582',
                      }}
                    />
                    <FloatingLabelInput
                      label="Service/Product Description"
                      value={description}
                      onChangeText={setDescription}
                      containerStyles={{
                        borderWidth: 1,
                        borderRadius: 10,
                        paddingHorizontal: 10, paddingVertical: 10,
                        borderColor: '#ccc', marginHorizontal: 10, marginTop: "5%", backgroundColor: "#BFB7B74F"
                      }}
                      customLabelStyles={{
                        colorFocused: '#677582',
                        fontSizeFocused: 12,
                      }}
                      inputStyles={{
                        fontSize: 16,
                        color: '#677582',
                      }}
                    />
                    <View style={{ height: 3, width: "90%", borderBottomWidth: 1, alignSelf: "center", borderBottomColor: "#6775823D", marginTop: "10%" }} />
                    <View style={{ margin: 10, flexDirection: "row", justifyContent: "space-between" }}>
                      <Text>QUANTITY</Text>
                      <Text>RATE</Text>
                      <Text>AMOUNT</Text>
                    </View>
                    <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
                      <TextInput
                        value={quantity}
                        onChangeText={setQuantity}
                        keyboardType="numeric"
                        style={{
                          borderWidth: 1,
                          borderColor: '#ccc',
                          borderRadius: 5,
                          textAlign: 'center',
                          height: 44, width: 90,
                        }}
                      />
                      <View style={{ width: "40%", flexDirection: "row", }}>
                        <TextInput
                          value={rate}
                          onChangeText={setRate}
                          keyboardType="numeric"
                          style={{
                            borderWidth: 1,
                            borderColor: '#ccc',
                            borderRadius: 5,
                            textAlign: 'center',
                            height: 45,
                            width: 55,
                          }}
                        />
                        <Dropdown
                          data={[
                            { label: 'kg', value: 'kg' },
                            { label: 'pcs', value: 'pcs' },
                          ]}
                          labelField="label"
                          valueField="value"
                          placeholder="Unit"
                          style={{
                            height: 45,
                            width: 80,
                            borderColor: '#ccc',
                            borderWidth: 1,
                            borderRadius: 5,
                            backgroundColor: "#DCD8D885",
                            paddingLeft: 10,
                          }}
                          renderLeftIcon={() => (
                            <View style={{ marginRight: 5 }}>
                              <Icon name="chevron-down" size={17} color="gray" />
                            </View>
                          )}
                          renderRightIcon={() => null}
                          maxHeight={100}
                          value={unit}
                          onChange={item => setUnit(item.value)}
                        />
                      </View>
                      <TextInput
                        value={amount}
                        onChangeText={setAmount}
                        keyboardType="numeric"
                        style={{
                          borderWidth: 1,
                          borderColor: '#ccc',
                          borderRadius: 5,
                          textAlign: 'center',
                          height: 45, width: 60,
                        }}
                      />
                    </View>
                  </View>
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                      <View style={{ height: 30, width: 30, borderRadius: 20, borderWidth: 1, margin: 5, backgroundColor: "#FCFCFC", marginHorizontal: "10%", justifyContent: "center", alignItems: "center" }}>
                        <Image source={require("../../assets/Images/Vector.png")} />
                      </View>
                      <Text style={{ fontSize: 15, fontWeight: "600", color: "#12153A" }}>DISCOUNT(3%)</Text>
                    </View>
                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                      <View style={{ height: 30, width: 30, borderRadius: 20, borderWidth: 1, margin: 5, backgroundColor: "#FCFCFC", marginHorizontal: "6%", justifyContent: "center", alignItems: "center" }}>
                        <Image source={require("../../assets/Images/receipt-discount.png")} />
                      </View>
                      <Text style={{ fontSize: 15, fontWeight: "600", color: "#12153A" }}>TAX(IVA 7%)</Text>
                    </View>
                  </View>
                  <View style={{ flexDirection: "row", justifyContent: "space-around", marginBottom: 10 }}>
                    <View style={{ height: 100, width: 140, borderWidth: 1, marginHorizontal: "6%", justifyContent: "center", alignItems: "center", borderColor: "#BFB7B74F", borderRadius: 6 }}>
                      <Dropdown
                        data={[
                          { label: '1', value: 'true' },
                          { label: '2', value: 'false' },
                        ]}
                        labelField="label"
                        valueField="value"
                        placeholder="Choose"
                        style={{
                          height: 35,
                          width: 120,
                          borderColor: '#ccc',
                          borderWidth: 1,
                          borderRadius: 5,
                          backgroundColor: "#DCD8D885"
                        }}
                        renderRightIcon={() => (
                          <Icon name="chevron-down" size={18} color="gray" />
                        )}
                        maxHeight={100}
                        value={units}
                        onChange={item => setUnits(item.value)}
                      />
                      <View style={{ height: 3, width: "100%", borderBottomWidth: 1, alignSelf: "center", borderBottomColor: "#E9E7E7", marginTop: "10%" }} />
                      <Text style={{ fontSize: 15, fontWeight: "600", color: "#1A78F2", textAlign: "center" }}>Add new discount</Text>
                    </View>
                    <View style={{ height: 100, width: 140, borderWidth: 1, marginHorizontal: "6%", justifyContent: "center", alignItems: "center", borderColor: "#BFB7B74F", borderRadius: 6 }}>
                      <Dropdown
                        data={[
                          { label: 'kg', value: 'kg' },
                          { label: 'pcs', value: 'pcs' },
                        ]}
                        labelField="label"
                        valueField="value"
                        placeholder="Choose"
                        style={{
                          height: 35,
                          width: 120,
                          borderColor: '#ccc',
                          borderWidth: 1,
                          borderRadius: 5,
                          backgroundColor: "#DCD8D885"
                        }}
                        renderRightIcon={() => (
                          <Icon name="chevron-down" size={18} color="gray" />
                        )}
                        maxHeight={100}
                        value={uni}
                        onChange={item => setUni(item.value)}
                      />
                      <View style={{ height: 3, width: "100%", borderBottomWidth: 1, alignSelf: "center", borderBottomColor: "#E9E7E7", marginTop: "10%" }} />
                      <Text style={{ fontSize: 15, fontWeight: "600", color: "#1A78F2", textAlign: "center" }}>Add new discount</Text>
                    </View>
                  </View>
                  <View style={{ flexDirection: "row", gap: 5, alignSelf: "flex-end", marginHorizontal: 10, marginBottom: "5%" }}>
                    <Text style={{ fontSize: 15, fontWeight: "600", color: "#677582", textAlign: "right" }}>Save Product/Service information</Text>
                    <TouchableOpacity
                      onPress={() => setIsChecked(!isChecked)}
                      style={{
                        height: 30,
                        width: 30,
                        backgroundColor: 'white',
                        borderRadius: 10,
                        borderWidth: 1,
                        borderColor: '#ccc',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      {isChecked && (
                        <Icon name="check" size={18} color="#2B3641" />
                      )}
                    </TouchableOpacity>
                  </View>
                  <TouchableOpacity style={[
                    styles.upgradeButton,
                    isInputFilled && styles.activeButtons
                  ]} onPress={openBottomSheet}>
                    <Text style={styles.upgradeButtonText}>Add Item</Text>
                  </TouchableOpacity>
                </ScrollView>
              </KeyboardAvoidingView>
            </BottomSheetView>
          </BottomSheet>
        )
      }
      {
        isBottomSheet2Visible && (
          <BottomSheet
            ref={bottomSheetRef1}
            snapPoints={snapPoint}
            index={0}
            enablePanDownToClose={true}
            enableHandlePanningGesture={false}
            enableContentPanningGesture={false}
            onChange={(index) => {
              if (index === -1) {
                closeBottomSheet1();
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
              shadowRadius: 7.49
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
            <BottomSheetView style={{ flex: 1 }}>
              <KeyboardAvoidingView
                behavior="padding"
                style={{ flex: 1 }}
                keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 0}
              >
                <ScrollView
                  contentContainerStyle={{
                    paddingBottom: "60%",
                  }}
                  keyboardShouldPersistTaps="handled"
                  showsVerticalScrollIndicator={false}
                >
                  <View style={{ padding: 10 }}>
                    <View style={{ flexDirection: "row", paddingHorizontal: 10, justifyContent: "space-between", marginHorizontal: 10 }}>
                      <Text style={styles.title}>Add New Item</Text>
                      <TouchableOpacity onPress={closeBottomSheet1}>
                      <Ico name="cross" size={22} color="black" />
                      </TouchableOpacity>
                    </View>
                    <FloatingLabelInput
                      label="Client Name"
                      value={product}
                      onChangeText={setProduct}
                      containerStyles={{
                        borderWidth: 1,
                        borderRadius: 10,
                        paddingHorizontal: 10, paddingVertical: 4,
                        borderColor: '#ccc', marginHorizontal: 10, marginTop: "5%", backgroundColor: "#BFB7B74F"
                      }}
                      customLabelStyles={{
                        colorFocused: '#677582',
                        fontSizeFocused: 12,
                      }}
                      inputStyles={{
                        fontSize: 16,
                        color: '#677582',
                      }}
                    />
                    <FloatingLabelInput
                      label="Client Email"
                      value={description}
                      onChangeText={setDescription}
                      containerStyles={{
                        borderWidth: 1,
                        borderRadius: 10,
                        paddingHorizontal: 10, paddingVertical: 10,
                        borderColor: '#ccc', marginHorizontal: 10, marginTop: "3%", backgroundColor: "#BFB7B74F"
                      }}
                      customLabelStyles={{
                        colorFocused: '#677582',
                        fontSizeFocused: 12,
                      }}
                      inputStyles={{
                        fontSize: 16,
                        color: '#677582',
                      }}
                    />

                    <View style={{ height: 1, width: "80%", alignSelf: "center", marginTop: "4%", borderWidth: 0.2, borderBottomColor: "#6775823D" }} />
                    <FloatingLabelInput
                      label="Company Name"
                      value={companyname}
                      onChangeText={setCompanyName}
                      containerStyles={{
                        borderWidth: 1,
                        borderRadius: 10,
                        paddingHorizontal: 10, paddingVertical: 5,
                        borderColor: '#ccc', marginHorizontal: 10, marginTop: "3%", backgroundColor: "#BFB7B74F"
                      }}
                      customLabelStyles={{
                        colorFocused: '#677582',
                        fontSizeFocused: 12,
                      }}
                      inputStyles={{
                        fontSize: 16,
                        color: '#677582',
                      }}
                    />

                    <FloatingLabelInput
                      label="Company Address"
                      value={address}
                      onChangeText={setAddess}
                      containerStyles={{
                        borderWidth: 1,
                        borderRadius: 10,
                        paddingHorizontal: 10, paddingVertical: 5,
                        borderColor: '#ccc', marginHorizontal: 10, marginTop: "2%", backgroundColor: "#BFB7B74F"
                      }}
                      customLabelStyles={{
                        colorFocused: '#677582',
                        fontSizeFocused: 12,
                      }}
                      inputStyles={{
                        fontSize: 16,
                        color: '#677582',
                      }}
                    />
                    <FloatingLabelInput
                      label="Phone Number"
                      value={number}
                      onChangeText={setNumber}
                      containerStyles={{
                        borderWidth: 1,
                        borderRadius: 10,
                        paddingHorizontal: 10, paddingVertical: 5,
                        borderColor: '#ccc', marginHorizontal: 10, marginTop: "2%", backgroundColor: "#BFB7B74F"
                      }}
                      customLabelStyles={{
                        colorFocused: '#677582',
                        fontSizeFocused: 12,
                      }}
                      inputStyles={{
                        fontSize: 16,
                        color: '#677582',
                      }}
                    />
                    <TouchableOpacity style={[
                      styles.upgradeButton,
                      isInputFilled && styles.activeButtons, {
                        marginTop: "3%",
                      },
                    ]} onPress={openBottomSheet}>
                      <Text style={styles.upgradeButtonText}>Create client profile</Text>
                    </TouchableOpacity>
                  </View>
                </ScrollView>
              </KeyboardAvoidingView>
            </BottomSheetView>
          </BottomSheet>
        )
      }
      {
        !isBottomSheet1Visible && !isBottomSheet2Visible && (
          <>
          <InvoiceFooter
          onPress={() => {
            props.navigation.navigate("OnBoardingInvoice");
          }}
          text="Continue"
          tex="Save as draft"
        />
          </>
        )
      }
    </SafeAreaView>
  );
};

export default NewInvoice;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  activeButtons: {
    backgroundColor: "#00386D",
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  inputContainer: {
    flex: 1,
    marginRight: 8,
  },
  label: {
    fontSize: 12,
    color: '#6B7280',
    marginBottom: 4,
  },
  input: {
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 10,
    padding: 10,
    fontSize: 16,
    backgroundColor: '#fff',
  },
  unitButton: {
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 10,
    padding: 12,
    alignItems: 'center',
    backgroundColor: '#f3f4f6',
  },
  unitText: {
    fontSize: 16,
    color: '#111827',
  },
  dropdownContainer: {
    flex: 1,
  },
  dropdown: {
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 10,
    padding: 20,
    backgroundColor: '#fff', marginTop: 10
  },
  dropdownContainers: {
    flex: 1,
  },
  dropdowns: {
    borderWidth: 0.3,
    borderColor: '#E5E7EB',
    borderRadius: 10,
    padding: 12,
    backgroundColor: '#fff', marginTop: 10
  },
  dropdow: {
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 10,
    padding: 22,
    backgroundColor: '#fff', marginTop: 10
  },
  link: {
    fontSize: 12,
    color: '#3B82F6',
    marginTop: 4,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
  },
  checkboxLabel: {
    flex: 1,
    fontSize: 14,
    color: '#374151',
  },
  header: {
    backgroundColor: '#00386D',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    justifyContent: 'space-between',
  },
  headerTitle: { color: 'white', fontSize: 18, fontWeight: '600' },
  previewButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#004B8A',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },
  upgradeButton: {
    backgroundColor: '#677582',
    borderRadius: 15,
    padding: 16, justifyContent: "flex-end",
    alignItems: 'center', marginHorizontal: 10
  },
  upgradeButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  previewText: { color: 'white', marginRight: 4, fontSize: 14 },
  customItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: "20%", gap: 5, borderColor: "#FFFFFF70", borderTopWidth: 1
  },
  customItems: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingVertical: "10%", gap: 5, borderWidth: 0.1
  },
  customItemText: {
    fontSize: 16,
    color: '#727284',
    textAlign: "center"
  },
  customItemTexts: {
    marginHorizontal: 10,
    fontSize: 16,
    color: '#2B9DE0',
    textAlign: 'right'
  },
  progressBar: {
    height: 3,
    backgroundColor: '#E6E6E6',
    marginHorizontal: 1,
    borderRadius: 2,
  },
  progressFill: {
    width: '40%',
    height: '100%',
    backgroundColor: '#00B050',
    borderRadius: 2,
  },
  iconst: {
    alignSelf: "center"
  },
  content: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 100,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 12,
    color: '#1C1C1E',
  },
  fromCard: {
    backgroundColor: '#FFFFFF70',
    padding: 16,
    borderRadius: 10,
    marginBottom: 20, borderWidth: 0.2
  },
  fromLabel: {
    color: 'black',
    fontWeight: '600',
    marginBottom: 8,
  },
  companyName: {
    fontSize: 16,
    fontWeight: '400',
    marginBottom: 2, color: "#727284"
  },
  address: {
    fontSize: 14,
    color: '#727284',
    marginBottom: 2,
  },
  editProfile: {
    marginTop: 6,
    alignSelf: 'flex-end',
  },
  editText: {
    color: '#2B9DE0',
    fontSize: 14,
  },
  text: {
    fontSize: 16,
    color: '#727284',
  },
  dropdownContaine: {
    backgroundColor: '#FFFFFF',
    borderColor: '#E0E0E0',
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 5, padding: 10, flexDirection: "row", alignItems: "center", justifyContent: "center"
  },
  listItem: {
    fontSize: 16,
    color: '#727284',
  },
  listItems: {
    fontSize: 16, color: "#727284", textAlign: "center", marginTop: "6%"
  },
});
