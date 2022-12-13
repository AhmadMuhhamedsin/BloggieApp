import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity, ScrollView} from "react-native";
import GlobalFooter from "../../Footers/GlobalFooter";
import GlobalHeader from "../../Headers/GlobalHeader";

export default function Home({ navigation, AppState }) {
    const { allPosts, setPost } = AppState;

    const handlePress = (element) => {
        setPost(element)
        navigation.navigate('Post')
    }
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
                        }}>Tere tulemast!</Text>
                        <Text style={{
                            marginTop: 8,
                            fontFamily: 'Mulish_400Regular',
                        }}>Vaata, mida uut on lisatud.</Text>
                    </View>
                    { allPosts.map((e, i) => {
                        return (
                            <TouchableOpacity
                                key={i}
                                onPress= {() => handlePress(e)}
                                style={[styles.noteCont, styles.shadowProp]}
                            >
                                <Text style={{
                                    fontFamily: 'Mulish_800ExtraBold',
                                }}>{e.postTitle}</Text>
                                <Text style={{
                                    fontFamily: 'Mulish_400Regular',
                                    marginTop: 24
                                }}
                                numberOfLines={1}>{e.postText}</Text>
                            </TouchableOpacity>
                        )
                    })  
                    }
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
        backgroundColor: '#D7DDEC',
        
    },
    body: {
        flex: 8,
        width: '100%',
        paddingLeft:'5%',
        paddingRight:'5%',
        marginBottom: 24
    },
    noteCont: {
        alignItems: 'center',
        margin: 24,
        padding: 24,
        borderWidth: 2,
        borderRadius: 15,
        backgroundColor: '#D9D9D9',
        height: 160,
        
        
    },
    shadowProp: {  
        shadowOffset: {width: -2, height: 4},  
        shadowColor: '#171717',  
        shadowOpacity: 0.2,  
        shadowRadius: 3,  
    },  
    welcomeCont:{
        paddingLeft:'6%',
        padding:20,
    },
    scrollViewCont:{
        marginTop: 24,
        marginBottom: 24
    }

})