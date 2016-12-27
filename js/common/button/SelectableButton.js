/**
 * Created by wangyu on 2016/12/21.
 */
import React, { Component } from "react";
import {
    Text,
    View,
    Image,
    TouchableOpacity,
} from "react-native";
import StyleSheet from "StyleSheet";
import Constants from "../../Constants";
import BaseButton from "./BaseButton";
const ColorPropType = require("ColorPropType");

export default function SelectableButton(props) {

    let selectElement = props.selState === "select" ?
        (props.selectElement || <Image style={styles.selectIcon} source={require("./images/select-right-icon.png")} />)
        :
        null;

    let statusStyle = null;
    switch (props.selState) {
        case "normal":
            statusStyle = {borderColor: props.normalBorderColor, textColor: props.normalTextColor};
            break;
        case "select":
            statusStyle = {borderColor: props.selectBorderColor, textColor: props.selectTextColor};
            break;
        case "disable":
            statusStyle = {borderColor: props.disableBorderColor, textColor: props.disableTextColor};
            break;
    }

    return (
        <BaseButton
            {...props}
            style={[styles.container, props.style, {borderColor:statusStyle.borderColor}]}
            disabled={props.disabled || props.selState == "disable"}
            labelStyle={[styles.text, props.labelStyle, {color: statusStyle.textColor}]}
            endElement={selectElement}>

            {props.children}
        </BaseButton>
    );
}

SelectableButton.propTypes = {

    /**
     * 按钮状态
     */
    selState: React.PropTypes.oneOf("normal", "select", "disable"),

    selectElement: React.PropTypes.element,

    /**
     * 文字颜色
     */
    normalTextColor: ColorPropType,
    selectTextColor: ColorPropType,
    disableTextColor: ColorPropType,

    /**
     * 边框颜色
     */
    normalBorderColor: ColorPropType,
    selectBorderColor: ColorPropType,
    disableBorderColor: ColorPropType,

};

SelectableButton.defaultProps = {
    selState: "normal",
    normalTextColor: Constants.color.n07,
    selectTextColor: Constants.color.p03,
    disableTextColor: Constants.color.n05,
    normalBorderColor: Constants.color.n05,
    selectBorderColor: Constants.color.p03,
    disableBorderColor: Constants.color.n04,
};


const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "transparent",
        borderRadius: 3,
        borderWidth: 1,
        borderColor: "#4ad9f8",
        minWidth: 40,
    },
    text: {
        fontSize: 12,
        marginLeft: 10,
        marginRight:10,
        marginTop: 6,
        marginBottom: 6,

    },
    selectIcon: {
        position: "absolute",
        top: -1,
        right: 0,
        width: 15,
        height: 15,
    },
});

export function __cards__(define) {
    define("Normal/Click to switch", (state = "normal", update) => (
        <SelectableButton selState={state} onPress={ () => update(state == "normal" ? "select" : "normal") } >
            AAA
        </SelectableButton>
    ));

    define("Select", (state = null, update) => (
        <SelectableButton selState="select" >
            BBB
        </SelectableButton>
    ));
    define("Disable", (state = null, update) => (
        <SelectableButton selState="disable">
            CCC
        </SelectableButton>
    ));
}