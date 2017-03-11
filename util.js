import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TabBarIOS,
    Dimensions, //用于获取屏幕宽高的
    ActivityIndicator
} from 'react-native';

var Util = {
    //屏幕尺寸
    windowSize:{
        width:Dimensions.get("window").width,
        height:Dimensions.get("window").height
    },
    //基数fetch的get方法；
    getRequest:function (url,successCallback,failCallback) {
        fetch(url)
            .then((response)=>response.json())
            .then((responseData)=>successCallback(responseData))
            .catch((error)=>failCallback(error));
    },
    loading:<ActivityIndicator style={{marginTop:200}} />
}

module.exports = Util;