/**
 * Created by wangyu on 2016/12/19.
 */
import {
    Dimensions
} from 'react-native';
import StyleSheet from 'StyleSheet';

const Constants = {
    fontSize: {
        t01: 28,
        t02: 22,
        t03: 18,
        t04: 16,
        t05: 14,
        t06: 12,
        t07: 11,
        t08: 10,
        t09: 8,
    },
    color: {
        // normal
        n01: "#ffffff",
        n02: "#f7f7f7",
        n03: "#f2f2f2",
        n04: "#dfdfdf",
        n05: "#cccccc",
        n06: "#999999",
        n07: "#666666",
        n08: "#333333",

        // primary
        p01: "#dcedff",
        p02: "#92c4fb",
        p03: "#4a9df8",
        p04: "#428ddf",
        p05: "#dcedff",

        // assistant
        a01: "#f1485a",
        a02: "#2ac772",

    },
    length: {
        hair: StyleSheet.hairlineWidth,
        windowWidth: Dimensions.get("window").width,
        windowHeight: Dimensions.get("window").height,
    },
    singleRow: {
        height: 44,
    },
};


export default Constants;