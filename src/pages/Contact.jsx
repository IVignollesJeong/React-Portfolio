import React from 'react';
import linkedin from '../assets/linkedin.png';
import github from '../assets/github.png';
import gmail from '../assets/gmaillogo.png'
import repos from '../assets/gitrepos.png'
import linkedpage from '../assets/linkedinpage.png'

export default function Contact() {

  const styles = {
    footer: {
        backgroundColor: "white",
        flexShrink: "none",
    },
    icon: {
        height: 20,
        width: 20,
        marginLeft: 5,
        padding: 5
    }
}

    return (
      <div>
        <h3 className='my-4'>View My LinkedIn Here:</h3>
        <a
                    href="https://www.linkedin.com/in/ian-vignolles-jeong-3916571b0/"
                    rel="noreferrer"
                    target="_blank">

<img src={linkedpage} width="800" height="400" className='mb-5' id="img"></img>
                </a>

                <h3 className='my-4'>View My GitHub Repos Here:</h3>
                
                <a
                    href="https://github.com/IVignollesJeong"
                    rel="noreferrer"
                    target="_blank">

<img src={repos} width="800" height="400" className='mb-5' id="img"></img>
                </a>

                <h3 className='my-4'>Email Any Concerns Here:</h3>
                <a
                    href="https://www.linkedin.com/in/ian-vignolles-jeong-3916571b0/"
                    rel="noreferrer"
                    target="_blank">

                    <img
                        src={gmail}
                        alt="Gmail"
                        style={styles.icon} />
                         Ianvignolles@gmail.com
                </a>
      </div>
    );
  }
  