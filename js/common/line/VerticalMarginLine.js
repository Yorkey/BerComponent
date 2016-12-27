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

export default function VerticalMarginLine(props) {
    return (
        <View style={{backgroundColor: props.marginColor}}>
            <View style={[styles.verticalLine, {marginTop: props.margin, marginBottom: props.margin}, props.style]} />
        </View>
    );
}

VerticalMarginLine.propTypes = {
    /**
     * custom style
     */
    style: View.propTypes.style,

    /**
     * 上下间距,如果需要不同的间距直接通过style传入
     */
    margin: React.PropTypes.number,

    /**
     * margin部分颜色,应设为和父组件一致
     */
    marginColor: ColorPropType,
};

VerticalMarginLine.defaultProps = {
    margin: 5,
    marginColor: '#fff',
};

const styles = StyleSheet.create({
    verticalLine: {
        flex: 1,
        backgroundColor: Constants.color.n04,
        width: Constants.length.hair,
    },
});


export function __cards__(define) {
    define("Default", (state = null, update) => (
        <View style={{flexDirection: "row", justifyContent: 'center', height: 100}}>
            <VerticalMarginLine />
        </View>
    ));

    define("Custom", () => (
        <View style={{flexDirection: "row", justifyContent: 'center', height: 100}}>
            <VerticalMarginLine margin={15} style={{backgroundColor: Constants.color.p03, width: 5}}/>
        </View>
    ));
}