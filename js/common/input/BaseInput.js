/**
 * Created by wangyu on 2016/12/26.
 */
import React, { Component } from "react";
import {
    View,
    TextInput,
    Image,
    TouchableOpacity,
    NativeModules,
    Platform,
    InteractionManager
} from "react-native";
import StyleSheet from "StyleSheet";
import Constants from "../../Constants";
import omit from "../../util/omit";

export default class BaseInput extends Component {

    static propTypes = {

        /* 所有TextInput属性 */

        /**
         * 自定义键盘类型 TODO
         * -1,                           // 自带键盘
         * 0,BerKeyboardTypeNumber,      //常规输入数字键盘,含小数点
         * 1,BerKeyboardTypeBankCardNo,  //银行卡输入数字键盘,无小数点
         * 2,BerKeyboardTypeID_CardNo,   //身份证输入数数字键盘,无小数点,但有X.
         * 3,BerKeyboardTypeOther		//其他,暂未定义,默认同BerKeyboardTypeNumber
         */
        keyboardTypeExtra: React.PropTypes.number,

        /**
         * 容器样式
         */
        inputContainerStyle: View.propTypes.style,

        /**
         * 附加显示类容
         */
        extraContent: React.PropTypes.element,

        /**
         * 是否包含清空按钮
         */
        widthDel: React.PropTypes.bool
    };

    static defaultProps = {
        autoFocus: false,
        keyboardTypeExtra: -1,
        testID:"BaseInput",
        widthDel: true,
        underlineColorAndroid: "transparent",
        placeholderTextColor:"#cccccc",
    };

    // 构造
    constructor(props) {
        super(props);

        let defaultValue = "";
        if (typeof props.value != "undefined") {
            defaultValue = String(props.value);
        } else if (typeof props.defaultValue != "undefined") {
            defaultValue = String(props.defaultValue);
        }

        // 初始状态
        this.state = {
            text: defaultValue,
            showDel: false,
        };

        this.inputRef = null;

        this.onFocus = this.onFocus.bind(this);
        this.onBlur = this.onBlur.bind(this);
        this.onChangeText = this.onChangeText.bind(this);
        this.clearValue = this.clearValue.bind(this);
    }

    updateText(text) {
        this.setState((prevState, props) => ({
            text: text,
            showDel: text.length > 0,
        }));
    }

    onFocus() {

        this.setState((prevState, props) => ({
            showDel: prevState.text.length > 0,
        }));

        this.props.onFocus && this.props.onFocus();
    }

    onBlur() {

        this.setState((prevState, props) => ({
            showDel: false,
        }));

        this.props.onBlur && this.props.onBlur();
    }

    onChangeText(text) {

        // props.onChangeText返回false,表示未处理
        if (!this.props.onChangeText || !this.props.onChangeText(text)) {
            this.updateText(text);
        }
    }

    clearValue() {
        this.onChangeText("");
    }

    getValue() {
        return this.state.text;
    }

    setValue(value) {
        this.onChangeText(String(value));
    }

    focus() {
        this.inputRef && this.inputRef.focus();
    }

    componentDidMount() {
        if (this.props.autoFocus) {
            InteractionManager.runAfterInteractions(() => {
                this.focus();
            });
        }
    }

    componentWillUnmount() {
    }

    componentWillReceiveProps(nextProps) {
        // value为父组件管理时,props.onChangeText应该返回true,
        if (typeof nextProps.value != "undefined") {
            this.updateText(String(nextProps.value));
        }
    }

    render() {

        let BerTextInput = TextInput;

        let props = omit(this.props, "containerStyle", "widthDel", "extraContent");

        return (
            <View style={[styles.container, this.props.inputContainerStyle]}>
                <BerTextInput {...props}
                    ref={(ref) => this.inputRef = ref}
                    style={[styles.textInput, this.props.style]}
                    autoFocus={false}
                    value={this.state.text}
                    onFocus={this.onFocus}
                    onBlur={this.onBlur}
                    onChangeText={this.onChangeText}/>

                {
                    (this.props.widthDel && this.state.showDel) &&
                    <TouchableOpacity hitSlop={{top:5, left:5, bottom:5, right:5}} onPress={this.clearValue}>
                        <Image style={styles.del} source={require("./images/input-del.png")}/>
                    </TouchableOpacity>
                }

                {
                    this.state.showDel && this.props.extraContent
                }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
    },
    textInput: {
        flex: 1,
        height: 40,
        paddingTop: 0,      // 将默认padding设为0,为了居中
        paddingBottom: 0,
        fontSize: Constants.fontSize.t05,
        color: Constants.color.n07,
    },
    del: {
        width: 13,
        height: 13,
    }
});

export function __cards__(define) {
    let inputRef1 = null;
    let inputRef2 = null;

    define("Normal", (state = null, update) => (
        <BaseInput inputContainerStyle={{width: 200}}
                   ref={(ref) => inputRef1 = ref}
                   autoFocus={true}
                   defaultValue="hahahah"
                   onBlur={() => { inputRef1 && console.warn(inputRef1.getValue())}}
        />
    ));
    define("Controlled Input", (state = "abc", update) => (
        <BaseInput inputContainerStyle={{width: 200}}
                   ref={(ref) => inputRef2 = ref}
                   autoFocus={true}
                   value={state}
                   onBlur={() => { inputRef2 && console.warn(inputRef2.getValue())}}
                   onChangeText={(text) => {
                       let fixedText = "!"+text;
                       update(fixedText);
                       return true;
                   }}
        />
    ));
}