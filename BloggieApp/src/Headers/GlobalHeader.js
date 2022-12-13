import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import  Constants  from "expo-constants";
export default function GlobalHeader({ navigation, AppState }) {
    return (
        <View style={styles.headerCont}>
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <Image
                    style={styles.logo}
                    source={require('../assets/images/logo.png')}
                    onPress={() => navigation.navigate('Home')}
                />
            </TouchableOpacity>
            
            <Text style={styles.text}>Bloggie</Text>
        </View>
        
    )
}

const styles = StyleSheet.create({
    headerCont: {
        flex: 1,
        flexDirection: 'row',
        width: '100%',
        justifyContent: "space-between",
        paddingLeft:'10%',
        paddingRight:'38%',
        alignItems: "center",
        paddingTop: Constants.statusBarHeight
    },
    logo:{
        height:27,
        width: 30
    },
    text:{
        fontFamily: 'Mulish_800ExtraBold',
        fontSize: 24
    }
    
})