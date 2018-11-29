import { Component } from 'react';
interface Props {
    label?: string;
    checked?: boolean;
    onChange?: (checked: boolean) => void;
}
interface State {
    checked: boolean;
}
export default class Checkbox extends Component<Props, State> {
    state: {
        checked: boolean;
    };
    onClick: () => void;
    render(): JSX.Element;
}
export {};
