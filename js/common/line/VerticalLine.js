/**
 * Created by wangyu on 2016/4/29.
 */
import React from 'react';
import {
    View,
} from 'react-native';
import StyleSheet from 'StyleSheet';
import Constants from "../../Constants";

export default function VerticalLine(props) {
    return <View style={[styles.verticalLine, props.style]} />;
}

VerticalLine.propTypes = {
    /**
     * custom style
     */
    style: View.propTypes.style,
};

const styles = StyleSheet.create({
    verticalLine: {
        backgroundColor: Constants.color.n04,
        width: Constants.length.hair,
    },
});


export function __cards__(define) {
    define("Default", (state = null, update) => (
        <View style={{flexDirection: "row", justifyContent: 'center', height: 100}}>
            <VerticalLine />
        </View>
    ));

    define("Custom", () => (
        <View style={{flexDirection: "row", justifyContent: 'center', height: 100}}>
            <VerticalLine style={{backgroundColor: Constants.color.p03, width: 5}}/>
        </View>
    ));
}