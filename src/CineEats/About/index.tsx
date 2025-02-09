// import "./styleabout.css";
// export default function About() {
//      return (
//           <div className="about-page">
//                <div className="about-us-title"><h1>About us</h1></div>
//                <div className="bio">
//                <img className="vicky-image" src="images/vicky.png" /><br />
//     <img className="cindy-image" src="images/cindy.png" /><br />
//     <div className="vicky fw-medium">
//       <h3> Victoria Whisnant </h3> <br/>
//       <p className="vicky-bio">Hello! My name is Victoria. I'm passionate about UX/UI and I had a lot of fun working on this project. 
//       From this, I learned so much more about Web Development and web layouts and I hope this site is to be lighthearted and nostalgic for many!
//       We hope you enjoy!</p>
//     </div>
// </div>

// <div className="cindy fw-medium">
//    <h3>Cindy Tran</h3> <br/>
//    <p className="cindy-bio">Hi, I'm Cindy and I'm a CS + Design student. I really enjoyed working this website. I had so much fun coming up
//    revisiting foods and recipes from movies I used to love. CineEats is a hub for everyone to search for mouth-watering foods they see on a screen and have the opportunity to
//    bring them to life. </p>
// </div>


//           </div>


//      )
// }

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
                        and nostalgic experience for many! We hope you enjoy!
                    </p>
                </div>

                {/* Cindy Section */}
                <div className="bio-card">
                    <img className="bio-image" src="images/cindy.png" alt="Cindy" />
                    <h3>Cindy Tran</h3>
                    <p className="bio-text">
                        Hi, I'm Cindy and I'm a CS + Design student. I really enjoyed working on this website. 
                        I had so much fun revisiting foods and recipes from movies I used to love. CineEats is a hub for 
                        everyone to search for mouth-watering foods they see on screen and have the opportunity to bring them to life.
                    </p>
                </div>
            </div>
        </div>
    );
}
