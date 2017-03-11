import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TabBarIOS,
    TouchableOpacity,
    ListView
} from 'react-native';


var Icon = require("./left_icon");

var Header = React.createClass({
    render:function () {
        //获取对象obj包括backName（按钮名称）barTitle
        var HeaderContent = this.props.initObj;
        return (<View style={styles.header}>
            <TouchableOpacity style={{flexDirection:"row"}}  onPress={this._pop}>
                <Icon style={styles.left_btn}/>
                <Text style={styles.btn_text}>{HeaderContent.backName}</Text>
            </TouchableOpacity>
            <View style={styles.title_contaner}>
                <Text style={styles.title} numberOfLines={1}>{HeaderContent.barTitle}</Text>
            </View>
        </View>)
    },
    //返还按钮处理方法
    _pop:function () {
        this.props.navigator.pop();
    }




})

var styles = StyleSheet.create({
    header:{
        height:44,
        backgroundColor:"#3497FF",
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        marginTop:20
    },
    left_btn:{
        color:"#fff",
        fontSize:17,
        fontWeight:"bold"
    },
    btn_text:{
        color:"#fff",
        fontSize:17,
        fontWeight:"bold"
    },
    title_contaner:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    title:{
        color:"#fff",
        fontSize:18,
        fontWeight:"bold",
        lineHeight:18,
        width:200
    }



})

module.exports = Header;