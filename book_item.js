import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image
} from 'react-native';

var BookItem = React.createClass({
    render:function () {
        var book = this.props.book;
        console.log("bookshi",book.image);
        return (
            <TouchableOpacity style={styles.item} {...this.props}>
                {/*图书图像*/}
                <View >
                    <Image style={styles.image} source={{uri:book.image}}/>
                </View>
                {/*图书信息*/}
                <View style={styles.contentContainer}>
                    <View style={styles.textContainer}>
                        <Text numberOfLines={1}>{book.title}</Text>
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={styles.publisher_author} numberOfLines={1}>{book.publiher}</Text>
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={styles.publisher_author}>{book.author}</Text>
                    </View>
                    <View style={{flexDirection:"row",flex:1,alignItems:"center"}}>
                        <Text style={styles.price}>{book.price}</Text>
                        <Text style={styles.pages}>{book.pages}页</Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }

})

var styles = StyleSheet.create({
    item:{
        flexDirection:"row",
        height:120,
        padding:10
    },
    imageContainer:{
        justifyContent:"center",
        alignItems:"center"
    },
    image:{
        width:80,
        height:100
    },
    contentContainer:{
        flex:1,
        marginLeft:15
    },
    textContainer:{
        flex:1,
        justifyContent:"center"
    },
    publisher_author:{
        color:"#A3A3A3",
        fontSize:13
    },
    price:{
        color:"#2BB2A3",
        fontSize:16
    },
    pages:{
        marginLeft:10,
        color:"#A7A0A0"
    }
    
})

module.exports = BookItem;