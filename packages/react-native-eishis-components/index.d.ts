import * as React from 'react'

export interface ButtonProps {
  children?: any
  style?: any
  disabled?: boolean
  isOutline?: boolean
  type?: 'blue' | 'yellow' | 'gray' | 'red'
  onPress?: () => void
}

export class Button extends React.Component<ButtonProps> {}