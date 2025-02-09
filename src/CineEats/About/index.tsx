import "./styleabout.css";

export default function About() {
     return (
          <div className="about-page">
               <div className="about-us-title">
                    <h1>About Us</h1>
               </div>

               <div className="bio-container">
                    {/* Victoria Section */}
                    <div className="bio-card">
                         <img className="bio-image" src="images/vicky.png" alt="Victoria" />
                         <h3>Victoria Whisnant</h3>
                         <p className="bio-text">
                              Hello! My name is Victoria. I'm passionate about UX/UI and had a lot of fun working on this project.
                              I learned so much more about Web Development and web layouts, and I hope this site brings a lighthearted
                              and nostalgic experience for many! We hope you enjoy! <br /><br />
                              <a href="https://www.linkedin.com/in/victoria-whisnant"> My Linkedin</a>
                         </p>
                    </div>

                    {/* Cindy Section */}
                    <div className="bio-card">
                         <img className="bio-image" src="images/cindy.png" alt="Cindy" />
                         <h3>Cindy Tran</h3>
                         <p className="bio-text">
                              Hi, I'm Cindy and I'm a CS + Design student. I really enjoyed working on this website.
                              I had so much fun revisiting foods and recipes from movies I used to love. CineEats is a hub for
                              everyone to search for mouth-watering foods they see on screen and have the opportunity to bring them to life. <br /><br />
                              <a href="https://www.linkedin.com/in/cindyhtran/">My Linkedin</a>
                         </p>
                    </div>

               </div>
          </div>
     );
}