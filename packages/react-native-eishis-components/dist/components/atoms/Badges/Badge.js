"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const styles_1 = require("../../../styles");
const Badge = (props) => {
    const { colorType = 'blue', sizeType = 'medium', style, } = props;
    return (<react_native_1.View>
      <react_native_1.View style={[
        styles.badgeStyle,
        badgeColors[colorType],
        badgeSizes[sizeType],
        style
    ]}></react_native_1.View>
      {props.children}
    </react_native_1.View>);
};
const badgeColors = {
    blue: {
        backgroundColor: styles_1.Colors.blue,
    },
    yellow: {
        backgroundColor: styles_1.Colors.yellow,
    },
    gray: {
        backgroundColor: styles_1.Colors.gray,
    },
    red: {
        backgroundColor: styles_1.Colors.red,
    },
};
const badgeSizes = {
    small: {
        width: 10,
        height: 10,
        borderRadius: 5,
        top: 0,
        right: -2,
    },
    medium: {
        width: 20,
        height: 20,
        borderRadius: 10,
        top: -6,
        right: -8,
    },
};
const styles = react_native_1.StyleSheet.create({
    buttonBaseStyle: {
        position: 'relative',
    },
    badgeStyle: {
        position: 'absolute',
    }
});
exports.default = Badge;
