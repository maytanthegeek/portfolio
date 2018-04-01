import React, {Component} from 'react';

const background = './assets/images/me.jpg';

const IntroText = () => (
    <div style={{position: 'absolute', top: '65%', width: '100%', textAlign: 'center', color: 'white', fontSize: '40px'}}>
        I AM TANMAY
    </div>
);

class Home extends Component {
    render() {
        return (
            <div className="home__snap-page">
                <div style={{position: "relative", background: "url("+background+")", backgroundSize: "cover",height: "100%", width: "100%"}}>
                    <IntroText />
                </div>
                <div style={{background: "green", height: "100%", width: "100%"}}></div>
                <div style={{background: "blue", height: "100%", width: "100%"}}></div>
            </div>
        );
    }
}

export default Home;