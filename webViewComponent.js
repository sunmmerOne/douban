import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TabBarIOS,
    WebView
} from 'react-native';

var Herder = require("./header");
var WebViewComponent = React.createClass({
    render:function () {

        return (<View style={{backgroundColor:"white",flex:1}}>
            <Herder
                navigator = {this.props.navigator}
                initObj = {
                { backName:this.props.backName,
                    barTitle:this.props.title}
                }
            />
            <WebView
                startInLoadingState={true}
                contentInset={{top:-44,bottom:-120}}
                source={{url:this.props.url}}
            />
        </View>)
    }
    
})

module.exports = WebViewComponent;