/**
 * Created by wangyu on 2016/12/26.
 */
import React, { Component } from 'react';
import {
    Image,
    TouchableOpacity,
} from 'react-native';
import StyleSheet from "StyleSheet";
import BaseInput from "./BaseInput";

export default class PasswordInput extends Component {

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            secureTextEntry: true,
        };

        this.inputRef = null;

        this.switchMode = this.switchMode.bind(this);
    }


    getValue() {
        return this.inputRef ? this.inputRef.getValue() : "";
    }

    setValue(value) {
        this.inputRef && this.inputRef.setValue(value);
    }

    focus() {
        this.inputRef && this.inputRef.focus();
    }

    switchMode() {
        this.setState((prevState, props) => ({
            secureTextEntry: !prevState.secureTextEntry,
        }))
    }

    getEyeIcon() {
        return (
            <TouchableOpacity hitSlop={{top:5, left:5, bottom:5, right:5}}
                              onPress={this.switchMode}>
                <Image style={styles.eye}
                       source={this.state.secureTextEntry ? require("./images/input-eye.png") : require("./images/input-eye-blue.png")}/>
            </TouchableOpacity>
        );
    }

    render() {
        return (
            <BaseInput {...this.props}
                ref={(ref) => this.inputRef = ref}
                secureTextEntry={this.state.secureTextEntry}
                extraContent={this.getEyeIcon()} />
        );
    }


}

const styles = StyleSheet.create({
    eye: {
        width: 16.5,
        height: 13,
        marginLeft: 10,
    }
});

export function __cards__(define) {
    define("Normal", (state = null, update) => (
        <PasswordInput containerStyle={{width: 200}}/>
    ));
}