import React, { Component } from 'react';
import { Scroller, Section } from 'react-fully-scrolled';
import WOW from 'wowjs';
import 'animate.css/animate.min.css';
import './Home.css';

export default class Home extends Component {
  introFirst;

  introSecond;

  introThird;

  constructor(props) {
    super(props);
    this.state = {
      introFirst: {
        in: true,
        active: true,
      },
      introSecond: {
        in: true,
        active: false,
      },
      introThird: {
        in: true,
        active: false,
      },
    };
    this.introFirst = React.createRef();
    this.introSecond = React.createRef();
    this.introThird = React.createRef();
  }

  componentDidMount() {
    const wow = new WOW.WOW({
      live: false,
    });
    wow.init();
    this.introFirst.current.addEventListener('animationend', () => { this.nextAnimate('second'); });
    this.introSecond.current.addEventListener('animationend', () => { this.nextAnimate('third'); });
    this.introThird.current.addEventListener('animationend', () => { this.nextAnimate('first'); });
  }

  // Very crude
  nextAnimate(nextElem) {
    switch (nextElem) {
      case 'second':
        if (this.state.introFirst.in) {
          this.setState({
            introFirst: {
              in: false,
              active: true,
            },
          });
        } else {
          this.setState({
            introFirst: {
              in: true,
              active: false,
            },
            introSecond: {
              in: true,
              active: true,
            },
          });
        }
        break;
      case 'third':
        if (this.state.introSecond.in) {
          this.setState({
            introSecond: {
              in: false,
              active: true,
            },
          });
        } else {
          this.setState({
            introSecond: {
              in: true,
              active: false,
            },
            introThird: {
              in: true,
              active: true,
            },
          });
        }
        break;
      case 'first':
        if (this.state.introThird.in) {
          this.setState({
            introThird: {
              in: false,
              active: true,
            },
          });
        } else {
          this.setState({
            introThird: {
              in: true,
              active: false,
            },
            introFirst: {
              in: true,
              active: true,
            },
          });
        }
        break;
      default: break;
    }
  }

  render() {
    return (
      <Scroller>
        <Section>
          <div className="home-banner">
            <div>
              <div ref={this.introFirst} className={`wow intro-text ${this.state.introFirst.in ? 'bounceIn ' : 'bounceOut '}${this.state.introFirst.active ? 'active' : 'inactive'}`} data-wow-duration="3s">
                I AM TANMAY
              </div>
              <div ref={this.introSecond} className={`wow intro-text ${this.state.introSecond.in ? 'bounceIn ' : 'bounceOut '}${this.state.introSecond.active ? 'active' : 'inactive'}`} data-wow-duration="3s">
                I MAKE PROGRAMS LOOK GOOD
              </div>
              <div ref={this.introThird} className={`wow intro-text ${this.state.introThird.in ? 'bounceIn ' : 'bounceOut '}${this.state.introThird.active ? 'active' : 'inactive'}`} data-wow-duration="3s">
                AND A BIT INTELLIGENT
              </div>
            </div>
          </div>
        </Section>
        <Section>
          <div style={{ background: 'green', height: '100%', width: '100%' }} />
        </Section>
        <Section>
          <div style={{ background: 'blue', height: '100%', width: '100%' }} />
        </Section>
      </Scroller>
    );
  }
}
