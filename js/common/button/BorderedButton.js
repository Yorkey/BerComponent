/**
 * Created by wangyu on 2016/12/20.
 */
import React from 'react';
import {
    View,
    Text,
} from 'react-native';
import StyleSheet from 'StyleSheet';
import Constants from "../../Constants";
import BaseButton from "./BaseButton";

export default function BorderedButton(props) {
    return (
        <BaseButton
            {...props}
            style={[styles.button, props.style]}
            labelStyle={[styles.buttonText, props.labelStyle]}>

            {props.children}
        </BaseButton>
    );
}

BorderedButton.propTypes = {

    /**
     * button样式
     */
    style: View.propTypes.style,

    /**
     * label样式
     */
    labelStyle: Text.propTypes.style,

    /**
     * label
     */
    children: React.PropTypes.string,

};

const styles = StyleSheet.create({
    button: {
        paddingLeft: 12,
        paddingRight: 12,
        paddingTop: 5,
        paddingBottom: 5,
        minWidth: 25,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: Constants.color.p03,
        borderRadius: 4,
    },
    buttonText: {
        fontSize: 14,
        color: Constants.color.p03,
    },
});

export function __cards__(define) {
    define("Simple", (state = null, update) => (
        <BorderedButton>
            Bordered
        </BorderedButton>
    ));

    define("Custom", (state = null, update) => (
        <BorderedButton style={{borderRadius: 8}} labelStyle={{color: "#ff00ff"}}>
            Bordered Custom
        </BorderedButton>
    ));
}