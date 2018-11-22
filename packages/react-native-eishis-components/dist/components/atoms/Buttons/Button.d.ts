import * as React from 'react';
interface Props {
    onPress?: () => void;
    style?: any;
    type?: 'blue' | 'yellow' | 'green' | 'red';
    disabled?: boolean;
    isOutline?: boolean;
}
declare const Button: React.SFC<Props>;
export default Button;
