/**
 * Created by wangyu on 2016/12/22.
 */
import React, { Component } from "react";
import {
    View,
    Image,
    TouchableOpacity,
} from "react-native";
import Carousel from "./Carousel";
import DotIndicator from "./DotIndicator";
const ColorPropType = require("ColorPropType");

export default function CarouselImage(props) {

    let contentList = props.imageList.map((imgSrc, index) => (
        <TouchableOpacity key={index}
                          activeOpacity={props.activeOpacity}
                          onPress={ () => props.onPress && props.onPress(imgSrc, index) }>
            <Image source={imgSrc} style={props.imageStyle}/>
        </TouchableOpacity>
    ));

    return (
        <Carousel {...props} contentList={contentList} />
    );
}

CarouselImage.propTypes = {
    /**
     * 图片资源
     */
    imageList: React.PropTypes.array.isRequired,

    /**
     * 图片属性
     */
    imageStyle: Image.propTypes.style,

    /**
     * 点击时透明度
     */
    activeOpacity: React.PropTypes.number,

    /**
     * 点击事件
     */
    onPress: React.PropTypes.func,
};

CarouselImage.defaultProps = {
    activeOpacity: 1.0,
    indicatorComponent: DotIndicator,
};


export function __cards__(define) {

    let remoteSrc = [
        {uri: "http://10.2.50.38/images/1b471a6d15c43829bee749fab1a0a5bb_1471421012163.png_640_640.png"},
        {uri: "http://10.2.50.38/images/80f16e945119c0ed4e3cb6fe22b74c24_1471421014716.png_640_640.png"},
        {uri: "http://10.2.50.38/images/09339ffc7a74a2911da17a1179ff411b_1471421017026.png_640_640.png"},
    ];

    define("remote source", (state = "normal", update) => (
        <View style={{ width: 200, height: 200,}}>
            <CarouselImage imageList={remoteSrc}
                           imageStyle={{width: 200, height: 200}} />
        </View>
    ));

    define("自动播放", (state = "normal", update) => (
        <View style={{ width: 200, height: 200,}}>
            <CarouselImage imageList={remoteSrc}
                           imageStyle={{width: 200, height: 200}} autoScroll autoScrollInterval={2000} />
        </View>
    ));
}