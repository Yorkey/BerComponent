/**
 * Created by wangyu on 2016/12/19.
 */
import React, { Component } from "react";
import {
    View,
    Text,
    TouchableOpacity,
} from "react-native";
import StyleSheet from "StyleSheet";
import baseStyles from "./baseStyles";
import Constants from "./Constants";
import {componentList} from "./ComponentList";
import { Actions } from 'react-native-router-flux';

export default class ListPage extends Component {

    static defaultProps = {
        componentList: componentList,
    }

    onItemClick(componentInfo) {
        if (Array.isArray(componentInfo.components)) {
            Actions.listPageSecond({
                title: componentInfo.name || componentInfo.key,
                componentList: componentInfo.components
            });
        } else if (componentInfo.component) {
            Actions.playground({
                title: componentInfo.name || componentInfo.key,
                module: componentInfo.component
            });
        } else {
            console.warn("wrong data");
        }
    }

    getComponentList() {
        let components = [];
        for (let componentInfo of this.props.componentList) {
            components.push(
                <ComponentItem key={componentInfo.key}
                               componentInfo={componentInfo}
                               onPress={this.onItemClick.bind(this, componentInfo)}/>
            );
        }

        return components;
    }

    render() {
        return (
            <View style={[baseStyles.windowBg, styles.container]}>
                { this.getComponentList() }
            </View>
        );
    }
}

class ComponentItem extends Component {

    render() {
        return (
            <TouchableOpacity style={styles.item} onPress={this.props.onPress}>
                <Text style={styles.itemText}>{this.props.componentInfo.name || this.props.componentInfo.key}</Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 64,
    },
    item: {
        height: 44,
        paddingLeft: 15,
        paddingRight: 15,
        justifyContent: 'center',
        borderBottomWidth: Constants.length.hair,
        borderBottomColor: Constants.color.n04,
    },
    itemText: {
        fontSize: Constants.fontSize.t04,
        color: Constants.color.n08,
    }
});