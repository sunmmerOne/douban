import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    ListView,
    ScrollView,
    Navigator
} from 'react-native';

var Util = require("./../common/util");
var SearchBar = require("./../common/searchbar");
var ServerUrl= require("./../common/server");
var Bookitem = require("./book_item");
var BookDetail = require("./book_detali");
var BookList = React.createClass({
    getInitialState:function () {
        var ds = new ListView.DataSource({
            rowHasChanged:(oldRow,newRow)=>oldRow!=newRow
        })
        return {
            dataSource:ds,
            //网络请求状态标识；
            show:false,
            //搜索关键字
            keywords:"React"
        }
    },
    getData:function () {
        //开启loading
        this.setState({show:false})
        //请求数据
        var that = this;
        var url = ServerUrl.book_search+"?count=20&q="+this.state.keywords;
        console.log(url);
        Util.getRequest(url,function (data) {
            // console.log("数据：",data.books);
            //请求成功
            if(!data.books || data.books.length==0){
                return alert("未查询到相关书籍");

            }

            //设置下载状态和数据源
            var ds = new ListView.DataSource({
                rowHasChanged:(oldRow,newRow)=>oldRow!=newRow
            })

            that.setState({
                show:true,
                dataSource:ds.cloneWithRows(data.books)
            })
        },function (error) {
            //请求失败
            alert(error);
        })

    },

    _changeText:function (text) {
        this.setState({
            keywords:text
        })
    },
    _searchPress:function () {
        this.getData();
    },
    _showDetail:function (bookID) {

        var DetailRoute = {
            component:BookDetail,
            passProps:{
                bookID:bookID
            }
        }
        this.props.navigator.push(DetailRoute);
    },
    render:function () {
        return (<ScrollView>
            <SearchBar
                onPress={this._searchPress} onChangeText={this._changeText}/>
            {
            //请求数据时候显示loading，请求数据成功后显示ListView
                this.state.show?
                    <ListView
                        dataSource={this.state.dataSource}
                        initialListSize={10}
                        renderRow={this._renderRow}
                        renderSeparator={this._renderSeparator}
                    />:
                    Util.loading
            }
        </ScrollView>)
    },
    componentDidMount:function () {
        //发起网络请求，请求数据
        this.getData();
    },
    _renderRow:function (book) {
        return <Bookitem book={book} onPress={this._showDetail.bind(this,book.id)}/>
    },
    _renderSeparator:function (sectionID,rowID) {
        var style = {
            height:1,
            backgroundColor:"#CCCCCC"
        }
        return <View style={style} key={sectionID+rowID}/>
    }


})
module.exports = BookList;
