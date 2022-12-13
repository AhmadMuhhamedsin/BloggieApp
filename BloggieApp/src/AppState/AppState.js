import React, {useState, useEffect} from 'react';
import AppNavigation from '../AppNavigation/AppNavigation';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  Mulish_200ExtraLight,
  Mulish_300Light,
  Mulish_400Regular,
  Mulish_500Medium,
  Mulish_600SemiBold,
  Mulish_700Bold,
  Mulish_800ExtraBold,
  Mulish_900Black,
  Mulish_200ExtraLight_Italic,
  Mulish_300Light_Italic,
  Mulish_400Regular_Italic,
  Mulish_500Medium_Italic,
  Mulish_600SemiBold_Italic,
  Mulish_700Bold_Italic,
  Mulish_800ExtraBold_Italic,
  Mulish_900Black_Italic,
} from '@expo-google-fonts/mulish';
import AsyncStorage from '@react-native-async-storage/async-storage';
export default function AppState(){
    const [allPosts, setAllPosts] = useState([
        { postId:1, postTitle: 'First title', postText: 'This is my first blog post, hope you enjoy it'},
        { postId: 2, postTitle: 'Second title', postText: 'This is my second blog post, hope you enjoy it'},
        { postId: 3, postTitle: 'Third title', postText: 'This is my third blog post, hope you enjoy it'},
        { postId: 4, postTitle: 'Fourth title', postText: 'This is my fourth blog post, hope you enjoy it'},
        { postId: 5, postTitle: 'Fifth title', postText: 'This is my fifth blog post, hope you enjoy it'},
    ]);
    const [post, setPost] = useState({});
    
    const AppState = {
        allPosts, setAllPosts,
        post, setPost
    }
    let [fontsLoaded] = useFonts({
        Mulish_200ExtraLight,
        Mulish_300Light,
        Mulish_400Regular,
        Mulish_500Medium,
        Mulish_600SemiBold,
        Mulish_700Bold,
        Mulish_800ExtraBold,
        Mulish_900Black,
        Mulish_200ExtraLight_Italic,
        Mulish_300Light_Italic,
        Mulish_400Regular_Italic,
        Mulish_500Medium_Italic,
        Mulish_600SemiBold_Italic,
        Mulish_700Bold_Italic,
        Mulish_800ExtraBold_Italic,
        Mulish_900Black_Italic,
      });
      if (!fontsLoaded) {
        return <AppLoading />;
      } else{
            return (
                <AppNavigation AppState = {AppState}/>
            )
      }    
    
    
}