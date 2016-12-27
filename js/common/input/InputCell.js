/**
 * Created by wangyu on 2016/12/26.
 */
import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
} from 'react-native';
import StyleSheet from "StyleSheet";
import Constants from "../../Constants";
import BaseInput from "./BaseInput";
import PasswordInput from "./PasswordInput";
import omit from "../../util/omit";

export default class InputCell extends Component {

    static propTypes = {
        /**
         * 整行样式
         */
        rowStyle: View.propTypes.style,

        /**
         * 标题样式
         */
        rowTitleStyle: Text.propTypes.style,

        /**
         *  标题
         */
        title: React.PropTypes.string,

        /**
         * 是否为密码输入
         */
        passwordInput: React.PropTypes.bool
    };

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {};

        this.inputRef = null;
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

    render(){

        let props = omit(this.props, "passwordInput", "rowStyle", "rowTitleStyle", "title");
        let InputComponent = this.props.passwordInput ? PasswordInput : BaseInput;

        return (
            <View style={[styles.row, this.props.rowStyle]}>
                <Text style={[styles.rowTitle, this.props.rowTitleStyle]}>{this.props.title}</Text>
                <InputComponent {...props}
                                ref={(ref) => this.inputRef = ref}
                                inputContainerStyle={[styles.rowContent, this.props.inputContainerStyle]} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    row:{
        height :44,
        flexDirection:"row",
        alignItems:"center",
        backgroundColor:"#fff",
        paddingLeft:14,
        paddingRight:14
    },
    rowTitle:{
        width:80,
        textAlign:"left",
        fontSize:Constants.fontSize.t05,
        color: Constants.color.n08
    },
    rowContent:{
        flex:1
    },
});


export function __cards__(define) {
    let inputRef1 = null;
    let inputRef2 = null;
    let inputRef3 = null;

    define("Normal", (state = null, update) => (
        <InputCell ref={(ref) => inputRef1 = ref}
                   title="Row111"
                   defaultValue="hahahah"
                   onBlur={() => { inputRef1 && console.warn(inputRef1.getValue())}}
        />
    ));
    define("Controlled InputCell", (state = "abc", update) => (
        <InputCell ref={(ref) => inputRef2 = ref}
                   title="Row222"
                   value={state}
                   onBlur={() => { inputRef2 && console.warn(inputRef2.getValue())}}
                   onChangeText={(text) => {
                       let fixedText = "!"+text;
                       update(fixedText);
                       return true;
                   }}
        />
    ));
    define("Password", (state = null, update) => (
        <InputCell ref={(ref) => inputRef3 = ref}
                   passwordInput
                   title="Password"
                   onBlur={() => { inputRef3 && console.warn(inputRef3.getValue())}}
        />
    ));
}