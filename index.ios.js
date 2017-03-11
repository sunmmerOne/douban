/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TabBarIOS
} from 'react-native';

var BookList = require("./ios_views/book/book_list");
var Navigation = require("./ios_views/common/navigation");
var MovieList = require("./ios_views/movie/movie_list");


var Douban = React.createClass({
  getInitialState:function () {
    return {
      tab:"图书"
    }
  },
  handle:function (tabData) {
    this.setState({tab:tabData})
  },
  render:function () {

    // return <View><Text>测试文字</Text></View>
    return(<TabBarIOS>
      <TabBarIOS.Item
          title="图书"
          icon={require("./img/book.png")}
          onPress={this.handle.bind(this,"图书")}
          selected = {this.state.tab==="图书"}
      >
        <Navigation component={BookList}/>

      </TabBarIOS.Item>
      <TabBarIOS.Item
      title="电影"
      icon={require("./img/movie.png")}
      onPress={this.handle.bind(this,"电影")}
      selected = {this.state.tab==="电影"}
      >
        <Navigation component={MovieList}/>


      </TabBarIOS.Item>





    </TabBarIOS>)

  }

  
})

var style = StyleSheet.create({
  test1:{
    flex:1,
    backgroundColor:"red"
  },
  test2:{
    flex:1,
    backgroundColor:"blue"
  }


})


AppRegistry.registerComponent('Douban', () => Douban);
