"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_2 = require("react");
const react_native_1 = require("react-native");
;
;
class Checkbox extends react_2.Component {
    constructor() {
        super(...arguments);
        this.state = {
            checked: false,
        };
        this.onClick = () => {
            const current = (typeof this.props.checked !== 'undefined') ? this.props.checked : this.state.checked;
            const checked = !current;
            this.setState({ checked });
            if (this.props.onChange) {
                this.props.onChange(checked);
            }
        };
    }
    render() {
        const checked = (typeof this.props.checked !== 'undefined') ? this.props.checked : this.state.checked;
        const { container, checkIcon, iconInner, path1, path2, } = styles;
        return (<react_native_1.TouchableOpacity onPress={() => this.onClick()} style={container}>
        <react_native_1.View style={checkIcon}>
          {checked &&
            <react_native_1.View style={iconInner}>
              <react_native_1.View style={path1}/>
              <react_native_1.View style={path2}/>
            </react_native_1.View>}
        </react_native_1.View>
        {!!this.props.label &&
            <react_native_1.Text>{this.props.label}</react_native_1.Text>}
      </react_native_1.TouchableOpacity>);
    }
}
exports.default = Checkbox;
const styles = react_native_1.StyleSheet.create({
    container: {
        width: '80%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginBottom: 16,
        marginTop: 16,
    },
    checkIcon: {
        width: 24,
        height: 24,
        marginRight: 16,
        borderRadius: 25,
        borderWidth: 2,
        borderColor: '#666',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    checkOffIcon: {
        width: 24,
        height: 24,
        borderRadius: 25,
        borderWidth: 2,
        borderColor: '#666',
        marginRight: 16,
    },
    iconInner: {
        width: 12,
        height: 8,
        position: 'relative',
        transform: [{ rotate: '-45deg' }],
        marginTop: -2,
    },
    path1: {
        width: 3,
        height: 8,
        backgroundColor: '#666',
        position: 'absolute',
        top: 0,
        left: 0
    },
    path2: {
        width: 12,
        height: 3,
        backgroundColor: '#666',
        position: 'absolute',
        bottom: 0,
        left: 0,
    }
});
