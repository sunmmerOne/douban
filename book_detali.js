import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TabBarIOS,
    ScrollView
} from 'react-native';
var SeverURL = require("./../common/server");
var Util = require("./../common/util");
var Header = require("./../common/header");
var BookItem = require("./../book/book_item");

var BookDetail = React.createClass({
    getInitialState:function () {
        return {
            bookData:null  //图书对象详情信息
        }
    },
    getData:function () {
        var _this = this;
        var url = SeverURL.book_detail_id+this.props.bookID;

        Util.getRequest(url,function (data) {

            _this.setState({bookData:data})
            
        },function (error) {
            alert(error)
        })
    },
    render:function () {

        return <ScrollView style={styles.container}>
            {

                this.state.bookData?
                    <View>
                        <Header
                        initObj = {{backName:"图书",barTitle:this.state.bookData.title}}
                        navigator={this.props.navigator}
                        />
                        <BookItem
                            book={this.state.bookData}
                        />
                        <View>
                            <Text style={styles.title}>图书简介</Text>
                            <Text style={styles.text}>{this.state.bookData.summary}</Text>
                        </View>
                        <View style={{marginTop:10}}>
                            <Text style={styles.title}>作者简介</Text>
                            <Text style={styles.text}>{this.state.bookData.author_intro}</Text>
                        </View>
                        <View style={{height:55}}></View>
                    </View>
                    :Util.loading
            }

        </ScrollView>
    },
    componentDidMount:function () {
        this.getData()
    }


})

var styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"white"
    },
    title:{
        fontSize:16,
        marginTop:10,
        marginLeft:10,
        marginBottom:10,
        fontWeight:"bold"
    },
    text:{
        marginLeft:10,
        marginRight:10,
        // color:"#000D22"
    }



})

module.exports = BookDetail;