"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const Input = (props) => {
    const { label } = props, rest = __rest(props, ["label"]);
    return (<react_native_1.View style={styles.inner}>
      <react_native_1.Text style={styles.label}>{label}</react_native_1.Text>
      <react_native_1.TextInput style={styles.input} {...rest}/>
    </react_native_1.View>);
};
const styles = react_native_1.StyleSheet.create({
    inner: {
        width: '100%',
        padding: 16,
    },
    label: {
        paddingBottom: 8,
    },
    input: {
        padding: 8,
        borderRadius: 4,
        backgroundColor: '#eeeeee',
    }
});
exports.default = Input;
