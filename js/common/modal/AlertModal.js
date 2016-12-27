/**
 * Created by wangyu on 2016/12/27.
 */
import React, { Component } from "react";
import {
    View,
    Text,
    TouchableOpacity,
    BackAndroid,
} from "react-native";
import StyleSheet from "StyleSheet";
import Constants from "../../Constants";
import { Actions } from "react-native-router-flux";
import words from "../../asset/words";
import Button from "../button/BaseButton";
import omit from "../../util/omit";
const Modal = require("react-native-modalbox");

export default class AlertModal extends Component {

    static propTypes = {

        /* Modal所有属性 */

        /**
         * 弹出框内容
         */
        content: React.PropTypes.oneOfType([
            React.PropTypes.element,
            React.PropTypes.string,
        ]),

        /**
         * 内容样式
         */
        contentStyle: View.propTypes.style,

        /**
         * 确认文字
         */
        submitText: React.PropTypes.string,

        /**
         * 确认事件
         */
        onSubmit: React.PropTypes.func,
    };

    static defaultProps = {
        content: "提示信息",
        contentStyle: null,
        submitText: words.button.submit,
        onSubmit: null,
        isOpen: true,
    };

    constructor(props) {
        super(props)
        // set state with passed in props
        this.state = {
            isOpen: props.isOpen,
        };

        if (typeof props.content == 'string') {
            this.content = <Text style={styles.contentText}>{props.content}</Text>;
        } else {
            this.content = props.content;
        }

        this.onBackAndroid = this.onBackAndroid.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onBackAndroid() {
        this.setState({
            isOpen: false,
        });
        return true;
    }

    onSubmit() {
        this.setState({
            isOpen: false,
        }, () => {
            this.props.onSubmit && this.props.onSubmit();
        });
    }

    componentDidMount() {
        BackAndroid.addEventListener("BackPressInModal", this.onBackAndroid);
    }

    componentWillUnmount() {
        BackAndroid.removeEventListener("BackPressInModal", this.onBackAndroid);
    }


    render() {

        let props = omit(this.props, "content", "contentStyle", "submitText", "onSubmit");

        return (
            <Modal {...props}
                   ref="alert"
                   style={[styles.modal,styles.modalAlert, {height: 150}]}
                   isOpen={this.state.isOpen}
                   position={"center"}
                   onClosed={() => Actions.pop()}>

                <View style={[styles.modalContent,this.props.contentStyle]}>
                    {this.content}
                </View>
                <View style={styles.modalButtons}>
                    <Button style={styles.modalFullButton}
                            labelStyle={styles.modalButtonText}
                            onPress={this.onSubmit}>
                        {this.props.submitText}
                    </Button>
                </View>
            </Modal>
        )
    }
}

const styles = StyleSheet.create({
    modal:{
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius:4
    },
    modalAlert:{
        paddingTop:13,
        paddingBottom:23,
        width:Constants.length.windowWidth*(1-0.134),
    },
    modalContent:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft:20,
        paddingRight:20,
        paddingTop:18,
        paddingBottom:33
    },
    modalButtons:{
        flexDirection:"row",
    },
    modalFullButton:{
        width:Constants.length.windowWidth*(1-0.134),
        justifyContent: 'center',
        alignItems: 'center'
    },
    modalButtonText:{
        color:'#157efb',
        fontWeight :'normal',
        fontSize:Constants.fontSize.t05,
    },
    contentText: {
        fontSize: Constants.fontSize.t05,
        color: Constants.color.n08,
    }
});