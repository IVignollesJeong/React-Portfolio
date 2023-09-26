import headshot from "../assets/headshot.png"

export default function About() {
    return (
      <div>
        <h2>About Me:</h2>
        <img src={headshot} width="300" height="400"></img>
      <p>Welcome to the Ian Vignolles-Jeong's professional portfolio! As an aspiring web app developer, it brings me
        great joy creating new applications and having the opportunity to showcase them here! Below are a few examples
        of my work. More applications will be displayed on this page as time progresses, with varying uses and designs!
      </p>
      <p>My coding experience includes HTML, CSS, JavaScript, Node.js, and SQL. As a student currently enrolled in the
        Ohio State University Web App Development Bootcamp, I intend to become adept in these languages as well as branch out to other languages. As these skills are attained and more applications are deployed, this webpage will be updated
        with applications that reflect these new skills!</p>
      </div>
    );
  }
  