import maryzeImg from "../assets/maryze.png";
import krapyakImg from "../assets/Krapyak.png";
import employee from "../assets/node.png";
import passgen from "../assets/passgen.png";
import shiftImg from "../assets/shiftTalk.png";
import jate from "../assets/JATE.png";

export default function Portfolio() {
    return (
        <div class="container text-center">
            <h3>Portfolio Projects</h3>
            <div class="row">


                <div class="card w-75 mx-auto mb-3 text-white bg-dark" >
                    <a href="https://t1p3-4fd94440c532.herokuapp.com/" target="_blank">
                        <img src={shiftImg} class="card-img-top"
                            alt="JavaScript password-generator" />
                    </a>
                    <div class="card-body text-center">
                        <a href="https://t1p3-4fd94440c532.herokuapp.com/" class="btn btn-primary" target="_blank">
                            <h5 class="card-title">Shift Talk</h5>
                        </a>
                        <p class="card-text">
                        Shift Talk is an automobile enthusiasts social website where a user can create an account, login, and post about about their favorite or least favorite cars.
                        </p>
                        <p class="card-text">
                            <small class="text-muted">
                                <a href="https://github.com/Ronin1702/Shift-Talk" class="btn btn-secondary" target="_blank">GitHub Repo</a>
                            </small>
                        </p>
                    </div>
                </div>

                <div class="card w-75 mx-auto mb-3 text-white bg-dark" >
                    <a href="https://maryze-t1p2-1c897d7fd819.herokuapp.com/" target="_blank">
                        <img src={maryzeImg} class="card-img-top"
                            alt="JavaScript password-generator" />
                    </a>
                    <div class="card-body text-center">
                        <a href="https://maryze-t1p2-1c897d7fd819.herokuapp.com/" class="btn btn-primary" target="_blank">
                            <h5 class="card-title">Maryze</h5>
                        </a>
                        <p class="card-text">
                            Maryze is a website where users can create, edit, store and manage custom generated CV's for job applications
                        </p>
                        <p class="card-text">
                            <small class="text-muted">
                                <a href="https://github.com/Ronin1702/maryze" class="btn btn-secondary" target="_blank">GitHub Repo</a>
                            </small>
                        </p>
                    </div>
                </div>



                <div class="card w-75 mx-auto mb-3 text-white bg-dark">
                    <a href="https://ronin1702.github.io/krapyak/" target="_blank">
                        <img src={krapyakImg} class="card-img-top"
                            alt="JavaScript password-generator" />
                    </a>
                    <div class="card-body text-center">
                        <a href="https://ronin1702.github.io/krapyak/" class="btn btn-primary" target="_blank">
                            <h5 class="card-title">Krapyak</h5>
                        </a>
                        <p class="card-text">
                            Krapyak is a website where users can discover the WORST establishments in a given location. Utilizes Yelp
                            Fusion/Google API's to retrieve business and location data.
                        </p>
                        <p class="card-text">
                            <small class="text-muted">
                                <a href="https://github.com/Ronin1702/krapyak" class="btn btn-secondary" target="_blank">GitHub Repo</a>
                            </small>
                        </p>
                    </div>
                </div>



                <div class="card w-75 mx-auto mb-3 text-white bg-dark">
                    <a href="https://github.com/IVignollesJeong/SQL-employee-tracker" target="_blank">
                        <img src={employee} class="card-img-top"
                            alt="JavaScript password-generator" />
                    </a>
                    <div class="card-body text-center">
                        <a href="https://github.com/IVignollesJeong/SQL-employee-tracker" class="btn btn-primary" target="_blank">
                            <h5 class="card-title">Node.js/MySQL Employee Tracker</h5>
                        </a>
                        <p class="card-text">
                            This is a CLI program that allows users to manage an employee database using Inquirer prompts to access
                            and manage MySQL employee databases.
                        </p>
                        <p class="card-text">
                            <small class="text-muted">
                                <a href="https://github.com/IVignollesJeong/SQL-employee-tracker" class="btn btn-secondary" target="_blank">GitHub Repo</a>
                            </small>
                        </p>
                    </div>
                </div>



                <div class="card w-75 mx-auto mb-3 text-white bg-dark">
                    <a href="https://ivignollesjeong.github.io/password-generator/" target="_blank">
                        <img src={passgen} class="card-img-top"
                            alt="JavaScript password-generator" />
                    </a>
                    <div class="card-body text-center">
                        <a href="https://ivignollesjeong.github.io/password-generator/" class="btn btn-primary" target="_blank">
                            <h5 class="card-title">JavaScript Simple Password Generator</h5>
                        </a>
                        <p class="card-text">
                            This is a simple web app that utilizes JavaScript and browser alerts to quickly generate unique passwords.
                        </p>
                        <p class="card-text">
                            <small class="text-muted">
                                <a href="https://github.com/IVignollesJeong/password-generator" class="btn btn-secondary" target="_blank">GitHub Repo</a>
                            </small>
                        </p>
                    </div>
                </div>



                <div class="card w-75 mx-auto mb-3 text-white bg-dark">
                    <a href="https://hidden-crag-78459-c5072bd38f82.herokuapp.com/" target="_blank">
                        <img src={jate} class="card-img-top"
                            alt="JavaScript password-generator" />
                    </a>
                    <div class="card-body text-center">
                        <a href="https://hidden-crag-78459-c5072bd38f82.herokuapp.com/" class="btn btn-primary" target="_blank">
                            <h5 class="card-title">PWA Text Editor</h5>
                        </a>
                        <p class="card-text">
                            This project is a progressive web application where users can practice coding within an in-browser text editor both online and offline.
                        </p>
                        <p class="card-text">
                            <small class="text-muted">
                                <a href="https://github.com/IVignollesJeong/pwa-text-editor" class="btn btn-secondary" target="_blank">GitHub Repo</a>
                            </small>
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
}
