import React from 'react';
interface Props {
    colorType?: 'blue' | 'yellow' | 'gray' | 'red';
    sizeType?: 'small' | 'medium';
    style?: any;
}
declare const Badge: React.SFC<Props>;
export default Badge;
