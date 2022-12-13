import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, TextInput } from "react-native";
import GlobalFooter from "../../Footers/GlobalFooter";
import GlobalHeader from "../../Headers/GlobalHeader";
export default function Post({ navigation, AppState }) {
    const { post, setPost } = AppState;

    
    return (
        <View style={styles.screen}>
            <GlobalHeader navigation={navigation}/>
            <View style={styles.body}>
            <ScrollView
                    contentContainerStyle={styles.scrollViewCont}
                    style={styles.scrollView}
                    
                >
                <View style={styles.welcomeCont}>
                        <Text style={{
                            fontFamily: 'Mulish_800ExtraBold',
                        }}>Tere, saabusid detailide lehele.</Text>
                        <Text style={{
                            marginTop: 8,
                            fontFamily: 'Mulish_400Regular',
                        }}>Siin saad vaadata terve blogipostituse</Text>
                </View>
            </ScrollView>
            </View>
            <GlobalFooter AppState={AppState} navigation={navigation} />
        </View>
        
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#D7DDEC'
        
    },
    body: {
        flex: 8,
        width: '100%',
        paddingLeft:'5%',
        paddingRight:'5%',
    },
    button: {
        borderRadius: 15,
        margin: 20,
        padding: 20,
        borderWidth: 1
    },
    scrollViewCont:{
        marginTop: 24,
        marginBottom: 32
    },
    welcomeCont:{
        paddingLeft:'6%',
        padding:20,
    },
})