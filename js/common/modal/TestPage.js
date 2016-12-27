/**
 * Created by wangyu on 2016/12/27.
 */
import React, { Component } from "react";
import {
    View,
    Text,
    TouchableOpacity,
} from "react-native";
import Button from "../button/BaseButton";
import { Actions } from 'react-native-router-flux';

export function __cards__(define) {

    define("Alert", (state = null, update) => (
        <Button style={{width: 100, backgroundColor: "#4a9df8", alignItems: "center", borderRadius: 4,}}
                labelStyle={{fontSize: 16, color: "#fff", marginTop: 5, marginBottom: 5,}}
                onPress={() => {
                    Actions.alertModal({
                        content: "Hahahah",
                        submitText: "知道了",
                    });
                }}>
            Alert
        </Button>
    ));
}