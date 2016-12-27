/**
 * Created by wangyu on 2016/12/19.
 */

export var componentList = [
    {
        key: "线",
        components: [
            {
                key: "HorizontalLine",
                component: require("./common/line/HorizontalLine"),
            },
            {
                key: "HorizontalMarginLine",
                component: require("./common/line/HorizontalMarginLine"),
            },
            {
                key: "VerticalLine",
                component: require("./common/line/VerticalLine"),
            },
            {
                key: "VerticalMarginLine",
                component: require("./common/line/VerticalMarginLine"),
            },
        ],
    },
    {
        key: "按钮",
        components: [
            {
                key: "BaseButton",
                component: require("./common/button/BaseButton"),
            },
            {
                key: "BorderedButton",
                component: require("./common/button/BorderedButton"),
            },
            {
                key: "SelectableButton",
                component: require("./common/button/SelectableButton"),
            },
        ],
    },
    {
        key: "轮播",
        components: [
            {
                key: "CarouselImage",
                name: "轮播图",
                component: require("./common/carousel/CarouselImage"),
            },
        ],
    },
    {
        key: "输入框",
        components: [
            {
                key: "BaseInput",
                component: require("./common/input/BaseInput"),
            },
            {
                key: "PasswordInput",
                component: require("./common/input/PasswordInput"),
            },
            {
                key: "InputCell",
                component: require("./common/input/InputCell"),
            },
        ],
    },
    {
        key: "弹框",
        component: require("./common/modal/TestPage"),
    },
];