// @flow

import React, {Component} from 'react'
import ViewSlider from './index'
import TransitionContext from 'react-transition-context'
import type {Prefixer} from 'inline-style-prefixer'

type TransitionState = 'in' | 'out' | 'entering' | 'leaving'

export type PageProps = {
  index: number,
  key: number,
  active: boolean,
  transitionState: TransitionState,
  className: string,
  style: Object,
  ref: (element: HTMLElement) => any,
}

export type Classes = {
  root: string,
  viewport: string,
  page: string,
  fillParent: string,
}

export type Props = {
  activePage: number,
  numPages: number,
  renderPage: (props: PageProps) => React.Element<any>,
  animateHeight?: boolean,
  transitionTimeout?: number,
  prefixer?: Prefixer,
  fillParent?: boolean,
  transitionHeight?: boolean,
  className?: string,
  style?: Object,
  viewportClassName?: string,
  viewportStyle?: Object,
  classes?: Classes,
}


export default class ViewSliderWithTransitionContext extends Component<void, Props, void> {
  renderPage: (props: PageProps) => React.Element<any> = (props: PageProps): React.Element<any> => {
    return (
      <TransitionContext key={props.key} transitionState={props.transitionState}>
        {this.props.renderPage(props)}
      </TransitionContext>
    )
  }

  render(): React.Element<any> {
    return (
      <ViewSlider {...this.props} renderPage={this.renderPage} />
    )
  }
}

