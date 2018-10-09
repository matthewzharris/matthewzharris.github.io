import React, { Component } from 'react';

export default class Video extends Component {
  static defaultProps = {
    playbackRate: 1,
  };

  element = React.createRef();

  componentDidMount() {
    this.element.current.defaultPlaybackRate = this.props.playbackRate;
    this.element.current.playbackRate = this.props.playbackRate;
  }

  render() {
    const { src, playbackRate, ...other } = this.props;
    return (
      <video ref={this.element} autoPlay loop muted playsInline {...other}>
        <source src={src} type="video/mp4" /> Your browser does not support the
        video tag.
      </video>
    );
  }
}
