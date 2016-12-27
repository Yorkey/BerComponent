/**
 * Created by wangyu on 2016/12/19.
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ToastAndroid
} from 'react-native';
import { Router, Scene, Modal} from 'react-native-router-flux';
import ListPage from "./ListPage";
import Playground from "./Playground";
import AlertModal from "./common/modal/AlertModal";
import Constants from "./Constants";
export default class App extends Component {

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {};

        this.onExit = this.onExit.bind(this);
    }

    onExit() {
        let nowDate = Date.now();
        if (this.lastBackPressed && this.lastBackPressed + 2000 >= nowDate) {
            return false;
        }
        this.lastBackPressed = nowDate;
        ToastAndroid.show('再按一次退出应用', ToastAndroid.SHORT);
        return true;
    }

    render() {
        return (
            <Router onExitApp={this.onExit}>
                <Scene key="modal" component={Modal} >
                    <Scene key="root"
                           navigationBarStyle={{backgroundColor: Constants.color.p03}}
                           titleStyle={{color:Constants.color.n01}}
                           backButtonImage={require("./asset/back.png")}>
                        <Scene key="listPageFirst" component={ListPage} title="组件列表" inital={true}/>
                        <Scene key="listPageSecond" component={ListPage} />
                        <Scene key="playground" component={Playground} />
                    </Scene>
                    <Scene key="alertModal" component={AlertModal} />
                </Scene>
            </Router>
        );
    }
}