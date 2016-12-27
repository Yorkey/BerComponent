/**
 * Created by wangyu on 2016/12/19.
 */

import React, { Component } from "react";
import {
    View,
    Text,
} from 'react-native';
import StyleSheet from "StyleSheet";
import Constants from "./Constants";

export default class Playground extends Component {

    static defaultProps = {
        module: {},
    }

    constructor(props) {
        super(props);

        this.state = {
            content: null,
        };

        const content = [];
        const define = (name: string, render: Function) => {
            content.push(<Example key={name} title={name} render={render} />);
        };


        if (this.props.module.__cards__) {
            this.props.module.__cards__(define);
            this.state = {content};
        } else {
            console.warn(`${this.props.module.key} does not have a __cards__`);
        }

    }

    render() {

        return (
            <View style={ styles.container }>
                { this.state.content }
            </View>
        );
    }
}

class Example extends Component {

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
        };
    }

    render() {
        const content = this.props.render(this.state.inner, (inner) => this.setState({inner}));
        return (
            <View style={styles.example}>
                <Text style={ styles.title }>
                    {this.props.title}
                </Text>
                {content}
            </View>
        );

    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#ffffff",
        flex: 1,
        justifyContent: "space-around",
        marginTop: 64,
    },
    example: {
        alignItems: "center",
    },
    title: {
        marginLeft: 15,
        marginRight: 15,
        marginBottom: 5,
        fontSize: Constants.fontSize.t04,
        color: Constants.color.n08,
    }
});