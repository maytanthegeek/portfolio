import './Home.css';

import React from 'react';
import { Scroller, Section } from 'react-fully-scrolled';
import IntroTexts from './IntroTexts';


export default function Home() {
  return (
      <Scroller>
        <Section>
          <div className="home-banner">
            <IntroTexts />
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
