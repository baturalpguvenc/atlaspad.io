import React from 'react';
import { ReactComponent as IconFacebook } from './assets/icons/facebook.svg';
import { ReactComponent as IconTwitter } from './assets/icons/twitter.svg';
import { ReactComponent as IconGithub } from './assets/icons/github.svg';
import "./App.css";
import Icon from '@mdi/react';
import { mdiLinkedin, mdiTwitter, mdiGithub } from '@mdi/js';


class App extends React.Component {
  render = () => {
    return (
      <div className="card">
        <div className="header">
          <div className="logo">
            <a href="."> <img src="/logo.png" width={100} /> </a>
          </div>
          <div className="social">
            <a href="https://www.linkedin.com/company/atlaspad/mycompany/?viewAsMember=true" title="Linkedin" target="_blank" rel="noopener noreferrer">
            <Icon path={mdiLinkedin} size={1} />

            </a>
            <a href="https://twitter.com/Atlaspad" title="Twitter" target="_blank" rel="noopener noreferrer">
            <Icon path={mdiTwitter} size={1} />
            </a>
            <a href="https://github.com/AtlasPAD" title="GitHub" target="_blank" rel="noopener noreferrer">
            <Icon path={mdiGithub} size={1} />
            </a>
          </div>
        </div>
        <div className="content">
          <div className="title-holder">
            <h1>Coming Soon...</h1>
            <p>AtlasPad stands as a pioneering Launchpad and IDO platform tailored for the Web3 projects, geared towards introducing their innovative concepts to the public and igniting their token ecosystems.</p>
          </div>
          <a href="mailto:info@atlaspad.io">
            <div className="cta">Send us an email</div>
          </a>
        </div>
        <div className="footer">
          <span>made by <a className="underlined" href="https://github.com/AtlasPAD" target="_blank" rel="noopener noreferrer">Atlaspad Developer Team</a> using <a className="underlined" href="https://doc.atlaspad.io/atlaspad-solutions/all-solutions-of-atlaspad/atlaspad-ecosystem-solutions-for-defi" title="ReactJS" target="_blank" rel="noopener noreferrer">Blockchain</a> | <a className="underlined" href="https://doc.atlaspad.io/atlas-ecosystem/pitchdeck" title="Document Book" target="_blank" rel="noopener noreferrer"> Docs</a></span>
        </div>
      </div>
    );
  }
}

export default App;