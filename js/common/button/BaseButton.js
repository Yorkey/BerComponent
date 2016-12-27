/**
 * Created by wangyu on 2016/12/21.
 */
import React from 'react';
import {
    View,
    Text,
    TouchableOpacity
} from 'react-native';

export default function BaseButton(props) {
    return (
        <TouchableOpacity {...props} activeOpacity={props.activeOpacity}>
            { props.startElement }
            <Text testID={props.testID || props.children}
                  ellipsizeMode={props.ellipsizeMode}
                  numberOfLines={props.numberOfLines}
                  style={props.labelStyle}>

                {props.children}
            </Text>
            { props.endElement }
        </TouchableOpacity>
    );
}

BaseButton.propTypes = {

    /**
     * activeOpacity属性
     */
    activeOpacity: React.PropTypes.number,

    /**
     * testID属性, 未设置时使用按钮名称
     */
    testID: React.PropTypes.string,

    /**
     * ellipsizeMode属性
     */
    ellipsizeMode: React.PropTypes.oneOf('head', 'middle', 'tail', 'clip'),

    /**
     * numberOfLines属性
     */
    numberOfLines: React.PropTypes.number,

    /**
     * label style
     */
    labelStyle: Text.propTypes.style,

    /**
     * 按钮label
     */
    children: React.PropTypes.string,

    /**
     * 按钮左(上)侧元素
     */
    startElement: React.PropTypes.element,

    /**
     * 按钮右(下)侧元素
     */
    endElement: React.PropTypes.element,
};

BaseButton.defaultProps = {
    activeOpacity: 0.6,
    ellipsizeMode: 'tail',
    numberOfLines: 1,
};


export function __cards__(define) {
    define("Simple", (state = null, update) => (
        <BaseButton style={{width: 100, backgroundColor: "#4a9df8", alignItems: "center"}}>
            Hello
        </BaseButton>
    ));

    define("Circle", () => (
        <BaseButton style={{
                width: 80,
                height: 80,
                borderWidth: 1,
                borderColor: "#4a9df8",
                borderRadius: 40,
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#fff",
            }}
        >
            World
        </BaseButton>
    ));
}