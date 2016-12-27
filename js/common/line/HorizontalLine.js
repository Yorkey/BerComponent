/**
 * Created by wangyu on 2016/4/29.
 */
import React from "react";
import {
    View,
} from "react-native";
import StyleSheet from "StyleSheet";
import Constants from "../../Constants";

export default function HorizontalLine(props) {
    return <View style={[styles.horizontalLine, props.style]} />;
}

HorizontalLine.propTypes = {
    /**
     * custom style
     */
    style: View.propTypes.style,
};


const styles = StyleSheet.create({
    horizontalLine: {
        backgroundColor: Constants.color.n04,
        height: Constants.length.hair,
    },
});


export function __cards__(define) {


    define("Default", (state = null, update) => (
        <HorizontalLine style={{alignSelf: "stretch"}}/>
    ));

    define("Custom Color and Height", () => (
        <HorizontalLine style={{alignSelf: "stretch", backgroundColor: Constants.color.p03, height: 5}}/>
    ));
}