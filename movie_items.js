//需要使用的字段
/*
    images.medium 电影图像
    title  电影名称
    casts  电影演员 数据需要在处理
    rating.average  电影评分
    year  上映时间
    genres 电影标签
    alt  电影详细url
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TabBarIOS,
    Dimensions, //用于获取屏幕宽高的
    ActivityIndicator,
    TouchableOpacity,
    Image
} from 'react-native';

var MovieItem =  React.createClass({
    render:function () {
        var movie = this.props.movie;
        //提取演员；将每个演员放到一个数组中；
        var actors = [];
        for(var i in movie.casts){
            actors.push(movie.casts[i].name);
        }

        return(
            <TouchableOpacity style={styles.item} {...this.props}>
                <View style={styles.imageContainer}>
                    <Image style={styles.image}
                           resizeMethod="auto"
                           source={{uri:movie.images.medium}} />
                </View>
                <View style={styles.contentContainer}>
                    <View style={styles.textContainer}>
                        <Text style={styles.text } numberOfLines={1}>名称：{movie.title}</Text>
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={styles.text } numberOfLines={1}>演员：{actors}</Text>
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={styles.text } numberOfLines={1}>评分：{movie.rating.average}</Text>
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={styles.text } numberOfLines={1}>时间：{movie.year}</Text>
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={styles.text } numberOfLines={1}>标签：{movie.genres}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
})

var styles = StyleSheet.create({
    item:{
        flexDirection:"row",
        height:200,
        padding:10
    },
    imageContainer:{
        justifyContent:"center",
        alignItems:"center",
    },
    image:{
        width:80,
        height:110
    },
    contentContainer:{
        flex:1,
        marginLeft:15
    },
    textContainer:{
        flex:1,
        justifyContent:"center"
    },
    text:{
        color:"black"
    }
})
module.exports = MovieItem;