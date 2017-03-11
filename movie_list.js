import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TabBarIOS,
    Dimensions, //用于获取屏幕宽高的
    ActivityIndicator,
    ListView,
    ScrollView
} from 'react-native';
var SearchBar = require("./../common/searchbar");
var Util = require("./../common/util");
var ServerURL = require("./../common/server");
var MovieItem = require("./movie_items");
var MovieWebView = require("./../common/webViewComponent")
var MovieList = React.createClass({
    getInitialState:function () {
        var ds = new ListView.DataSource({
            rowHasChanged:(oldRow,newRow)=>oldRow!==newRow
        })

        return {
            datasource:ds,
            show:false,
            keywords:"哈利波特"
        }
    },
    _changeText:function (text) {
        this.setState({keywords:text})
    },
    _searchPress:function () {
        this.getData();
    },
    _showDetail:function (title,url) {

            var detailRout = {
                component:MovieWebView,
                passProps:{
                    backName:"电影",
                    title:title,
                    url:url
                }
            }
            this.props.navigator.push(detailRout);
    },
    getData:function () {
        this.setState({show:false})
        var _this = this;
        var url = ServerURL.movie_search+"?count=20&q="+this.state.keywords;
        console.log("地址",url);
        Util.getRequest(url,function (data) {
            if(!data.subjects || data.subjects.length==0){
                return alert("未找到电影")
            }
            var ds = new ListView.DataSource({
                rowHasChanged:(oldRow,newRow)=>oldRow!==newRow
            })
            var movies = data.subjects;

            _this.setState({show:true,data,datasource:ds.cloneWithRows(movies)})

        },function (error) {
            alert(error)
        })
    },
    render:function () {
        return (<ScrollView>
            <SearchBar
                onPress={this._searchPress}
                onChangeText={this._changeText}
            />
            {
                this.state.show?
                    <ListView
                        dataSource={this.state.datasource}
                        initialListSize={10}
                        renderRow={this._renderRow}
                        renderSeparator={this._renderSeparator}
                    />
                :Util.loading
            }
        </ScrollView>)
    },
    componentDidMount:function () {
        this.getData();
    },
    _renderRow:function (movie) {
        return <MovieItem onPress={this._showDetail.bind(this,movie.title,movie.alt)} movie={movie}/>
    },
    _renderSeparator:function (sectionID,rowID) {
        return <View style={{height:1,backgroundColor:"black"}} key={sectionID+rowID}></View>
    }



})



module.exports = MovieList;