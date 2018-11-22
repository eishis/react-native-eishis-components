"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(require("react"));
const react_native_1 = require("react-native");
const styles_1 = require("../../../styles");
const Button = (props) => {
    const { onPress, children, style, type = 'blue', disabled, isOutline, } = props;
    const { buttonBaseStyle, textStyle, outlineButtonStyle } = styles;
    // 色
    const buttonColor = buttonColors[type];
    const selectedButtonColor = disabled ? buttonColor.disabled : buttonColor.button;
    return (<react_native_1.TouchableOpacity onPress={onPress} style={[
        buttonBaseStyle,
        (isOutline && outlineButtonStyle),
        { borderColor: (isOutline && selectedButtonColor) },
        { backgroundColor: (isOutline ? styles_1.Colors.white : selectedButtonColor) },
        style,
    ]} disabled={disabled}>
      <react_native_1.Text style={[textStyle, { color: (isOutline ? selectedButtonColor : styles_1.Colors.white) }]}>{children}</react_native_1.Text>
    </react_native_1.TouchableOpacity>);
};
const buttonColors = {
    blue: {
        button: styles_1.Colors.blue,
        disabled: `${styles_1.Colors.blue}50`,
    },
    yellow: {
        button: styles_1.Colors.yellow,
        disabled: `${styles_1.Colors.yellow}50`,
    },
    gray: {
        button: styles_1.Colors.gray,
        disabled: `${styles_1.Colors.gray}50`,
    },
    red: {
        button: styles_1.Colors.red,
        disabled: `${styles_1.Colors.red}50`,
    },
};
const styles = react_native_1.StyleSheet.create({
    buttonBaseStyle: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: 10,
        width: 240,
        height: 40,
        borderRadius: 80,
    },
    textStyle: {
        fontSize: 15,
        textAlign: 'center',
    },
    outlineButtonStyle: {
        borderWidth: 2,
    },
});
exports.default = Button;
