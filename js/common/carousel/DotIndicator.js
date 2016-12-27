/**
 * Created by wangyu on 2016/12/22.
 */
import React, { Component } from 'react';
import ReactNative, {
    View,
    Image,
    Dimensions,
} from 'react-native';
import StyleSheet from 'StyleSheet';
import Constants from "../../Constants";
const ColorPropType = require("ColorPropType");

export default function DotIndicator(props) {

    let dotViewList = [];
    for (let i=0; i<props.tabs.length; i++) {
        dotViewList.push(
            <View key={i}
                  style={[styles.dot, props.dotStyle, {backgroundColor: props.activeTab===i ? props.activeColor : props.normalColor}]} />
        );
    }

    // 其中props.style为ScrollableTabView传过来的.
    return (
        <View style={[props.style, styles.dotContainer, props.dotContainerStyle]}>
            { dotViewList }
        </View>
    );
}

DotIndicator.propTypes = {

    dotContainerStyle: View.propTypes.style,

    dotStyle: View.propTypes.style,

    normalColor: ColorPropType,

    activeColor: ColorPropType,

    // style为ScrollableTabView传过来的传过来的属性
    // let tabBarProps = {
    // goToPage,
    // tabs,
    // activeTab,
    // scrollValue,
    // containerWidth,
    // }
    //if (overlayTabs) {
    //    tabBarProps.style
};

DotIndicator.defaultProps = {
    normalColor: "#a3a3a3",
    activeColor: Constants.color.p03,
    activeDot: 0,
};


const styles = StyleSheet.create({
    dotContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingBottom: 11,
    },
    dot: {
        width: 9,
        height: 9,
        marginLeft: 4,
        marginRight: 4,
        borderRadius: 4.5,
    }
});