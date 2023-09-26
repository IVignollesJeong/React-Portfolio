import res from "../assets/R1.png"

export default function Resume() {
    return (
      <div>
        <h3>Resume</h3>
     <a href="./src/assets/R1.png" target="_blank" download="R1">
      <img src={res} width="500" height="600" id="img"
          alt="Resume" />
          </a>
      </div>
     
    );
  }
  