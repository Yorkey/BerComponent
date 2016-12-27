/**
 * Created by wangyu on 2016/12/22.
 */
import React, { Component } from 'react';
import ReactNative, {
    View,
    Image,
    TouchableOpacity,
} from 'react-native';
const ScrollableTabView = require('react-native-scrollable-tab-view');

export default class Carousel extends Component {

    static propTypes = {
        /**
         * 指示器组件
         */
        indicatorComponent: React.PropTypes.any.isRequired,

        /**
         * 指示器组件属性
         */
        indicatorProps: React.PropTypes.object,

        /**
         * 轮播类容数组
         */
        contentList: React.PropTypes.arrayOf(React.PropTypes.element),

        /**
         * 是否自动轮播
         */
        autoScroll: React.PropTypes.bool,

        /**
         * 自动轮播时间间隔
         */
        autoScrollInterval: React.PropTypes.number,
    };

    static defaultProps = {
        autoScroll: false,
        autoScrollInterval: 1500,
        tabBarPosition: "overlayBottom",
    };

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {};

        this.tabRef = null;
    }

    stopAutoScroll() {
        this.autoScrollTimer && clearInterval(this.autoScrollTimer);
        this.autoScrollTimer = null;
    }

    componentDidMount() {
        if (this.props.autoScroll) {
            this.autoScrollTimer = setInterval(() => {
                if (this.tabRef && this.tabRef.state && this.tabRef.goToPage) {
                    let currentPage = this.tabRef.state.currentPage;
                    let nextPage = currentPage+1 < this.props.contentList.length ? currentPage+1 : 0;
                    this.tabRef.goToPage(nextPage);
                }
            }, this.props.autoScrollInterval);
        }

    }

    componentWillUnmount() {
        this.autoScrollTimer && clearInterval(this.autoScrollTimer);
    }


    render() {
        let Indicator = this.props.indicatorComponent;
        let indicatorProps = this.props.indicatorProps;
        return (
            <ScrollableTabView
                {...this.props}
                ref={(ref) => this.tabRef = ref}
                renderTabBar={(props) => <Indicator {...props} {...indicatorProps} />}
                style={this.props.style}>

                { this.props.contentList }

            </ScrollableTabView>
        );
    }
}