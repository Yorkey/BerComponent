/**
 * Created by wangyu on 2016/4/29.
 */
import React from 'react';
import {
    View,
} from 'react-native';
import StyleSheet from 'StyleSheet';
import Constants from "../../Constants";
const ColorPropType = require('ColorPropType');

export default function HorizontalMarginLine(props) {
    return (
        <View style={{backgroundColor: props.marginColor}}>
            <View style={[styles.horizontalLine, {marginLeft: props.margin, marginRight: props.margin}, props.style]} />
        </View>
    );
}

HorizontalMarginLine.propTypes = {
    /**
     * custom style
     */
    style: View.propTypes.style,

    /**
     * 左右间距,如果需要不同的间距直接通过style传入
     */
    margin: React.PropTypes.number,

    /**
     * margin部分颜色,应设为和父组件一致
     */
    marginColor: ColorPropType,
};

HorizontalMarginLine.defaultProps = {
    margin: 14,
    marginColor: '#fff',
};

const styles = StyleSheet.create({
    horizontalLine: {
        backgroundColor: Constants.color.n04,
        height: Constants.length.hair,
    },
});


export function __cards__(define) {
    define("Default", (state = null, update) => (
        <HorizontalMarginLine style={{width: Constants.length.windowWidth}} />
    ));

    define("Custom", () => (
        <HorizontalMarginLine margin={30} style={{width: Constants.length.windowWidth, backgroundColor: Constants.color.p03, height: 5}}/>
    ));
}