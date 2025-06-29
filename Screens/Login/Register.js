import {
    ImageBackground,
    SafeAreaView,
    StyleSheet,
    Text,
    View, Image, Button,
    TouchableOpacity
} from 'react-native';
import React from 'react';
import LoginBtn from '../../Components/LoginBtn';
const Register = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground
                source={require('../../assets/Images/intro.jpg')}
                resizeMode="cover"
                style={styles.main}>
                <View style={styles.logoDiv}>
                    <Image
                        source={require('../../assets/Images/logoWhite.png')}
                        resizeMode="contain"
                        style={styles.logo}
                    />
                </View>
                <View style={styles.bottom}>
                    <Text style={styles.introText}>
                        Simplify invoicing! 🚀 Create, manage, and send invoices
                        effortlessly. Get started now!
                    </Text>
                    <View style={styles.dividerDiv}>
                        <View
                            style={[styles.divider, {
                                backgroundColor: "white", width: 60 } ]}
                        />
                        <View style={styles.divider} />
                        <View style={styles.divider} />
                    </View>
                    <LoginBtn backgroundColor="white" color="black" onPress={()=>{
                        navigation.navigate("LoginScreen");
                    }} text="Login " />
                    <Text style={styles.signinText}>
                        Already a member?{' '}
                        <Text
                            style={styles.signingText}
                            onPress={() => {
                                navigation.navigate("LoginScreen");
                             }}>
                            Sign in
                        </Text>
                    </Text>
                </View>
            </ImageBackground>
        </SafeAreaView>
    );
};

export default Register;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        width: '100%',
    },
    btn: {
        backgroundColor: "white",
        paddingVertical: 15,
        paddingHorizontal: 10,
        marginHorizontal: 8,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        marginVertical: 10
    },
    main: {
        flex: 1,
        width: '100%',
        justifyContent: 'space-between',
    },
    logoDiv: {
        height: 100,
        width: '34%',
        justifyContent: 'flex-end',
    },
    logo: {
        height: 24,
    },
    bottom: {
        height: 260,
    },
    introText: {
        color: "white",
        fontSize: 20,
        width: '80%',
        marginTop: 10,
        paddingHorizontal: 20,
    },
    dividerDiv: {
        width: '35%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 20,
        margin: 10,
    },
    divider: {
        backgroundColor: '#FFFFFF73',
        width: 30,
        height: 7,
    },
    signinText: {
        color: "white",
        fontSize: 13,
        textAlign: 'center', marginVertical: 10
    },
    signingText: {
        color: "#FB724C",
        fontSize: 13,
        textAlign: 'center',
    },
});
