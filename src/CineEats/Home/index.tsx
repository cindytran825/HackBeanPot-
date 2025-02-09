import { Card, Nav } from "react-bootstrap";
import "./stylehome.css";


export default function Home() {
     return (

          <div >



               <Card style={{ width: "100vw", height: "450px", margin: 0, padding: 0, marginTop: "-100px", border: "none", }}>
                    <Card.Img
                         src="/images/studio_g.png"
                         height={365}
                         style={{ width: "100vw", height: "100%", display: "block", border: "none", filter: 'blur(1.5px)' }}
                    />
                    <p className="wd_content" style={{ textAlign: "center" }}>“Food always comes to those who love to cook.” <div className="wd_content_movie ">-Ratatouille</div>
                         <Card.Text
                              className="row justify-content-center align-items-center wd_content_bio">  Ever watched a movie or show and wished you could taste the delicious dishes on screen? Our menu brings those iconic animated meals to life, letting you cook and savor the foods you’ve craved from your favorite films, shows, and games.
                         </Card.Text>
                    </p>
                    <div style={{ width: '100%', height: '100%', position: 'relative' }}>
                         <div style={{ width: 323, height: 128, right: 25, bottom: 360, fontSize: 84, position: 'absolute', textAlign: 'right', color: 'white', fontFamily: 'BIZ UDPMincho', fontWeight: '700', textTransform: 'capitalize', wordWrap: 'break-word', lineHeight: 1, textShadow: "0px 3px 10px #333333" }}>Spirited Away</div>
                    </div>
                    <div style={{ width: '100%', height: '100%', position: 'relative' }}>
                         <div style={{ right: 30, bottom: 485, position: 'absolute', textAlign: 'right', color: 'white', fontSize: 28, fontFamily: 'BIZ UDPMincho', fontWeight: '700', wordWrap: 'break-word', lineHeight: 1, textShadow: "0px 2px 3px #333333" }}>Studio Ghibli’s </div>
                    </div>
                    <div className="popular-title">Popular Dishes</div>
                    
                    <Nav.Item>
<div className="card-alignment">
    {/* Wrap the entire div in a Link */}
    <Nav.Link href="#/CineEats/KrabbyPatty">
        {/* Blurred Background */}
        <div 
            style={{ 
                width: 415, 
                height: 482, 
                left: 50, 
                top: 1, 
                position: 'absolute', 
                background: '#D9D9D9', 
                borderRadius: 10, 
                filter: 'blur(5px)' 
            }} 
        />
        {/* Main Card Background */}
        <div 
            style={{ 
                width: 415, 
                height: 478, 
                left: 50, 
                top: 0, 
                position: 'absolute', 
                background: '#F6F1EB', 
                borderRadius: 10 
            }} 
        />
        {/* Title */}
        <div 
            style={{ 
                width: 340, 
                height: 106, 
                left: 85, 
                top: 400, 
                position: 'absolute', 
                textAlign: 'center', 
                color: 'black', 
                fontSize: 25, 
                fontWeight: '600', 
                wordWrap: 'break-word' 
            }}
        >
            Spongebob’s Krabby Patty
        </div>
        {/* Image */}
        <img 
            style={{ 
                width: 415, 
                height: 360, 
                left: 50, 
                top: 0.42, 
                position: 'absolute', 
                borderTopLeftRadius: 10, 
                borderTopRightRadius: 10 
            }} 
            src="./images/spongebob.png" 
            alt="Krabby Patty" 
        />
    </Nav.Link>
    
</div>
</Nav.Item>

                    <div className="card-alignment">
                         <div style={{ width: 415, height: 482, left: 530, top: 1, position: 'absolute', background: '#D9D9D9', borderRadius: 10, filter: 'blur(5px)' }} />
                         <div style={{ width: 415, height: 478, left: 530, top: 0, position: 'absolute', background: '#F6F1EB', borderRadius: 10 }} />
                         <div style={{ width: 340, height: 106, left: 570, top: 380, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 25, fontWeight: '600', wordWrap: 'break-word' }}>Princess and The Frog’s Beignets</div>
                         <img style={{ width: 415, height: 360, left: 530, top: 0.42, position: 'absolute', borderTopLeftRadius: 10, borderTopRightRadius: 10 }} src="./images/Tiana.png" />
                    </div>

                    <div className="card-alignment">
                         <div style={{ width: 415, height: 482, right: 50, top: 1, position: 'absolute', background: '#D9D9D9', borderRadius: 10, filter: 'blur(5px)' }} />
                         <div style={{ width: 415, height: 478, right: 50, top: 0, position: 'absolute', background: '#F6F1EB', borderRadius: 10 }} />
                         <div style={{ width: 340, height: 106, right: 85, top: 400, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 25, fontWeight: '600', wordWrap: 'break-word' }}>Naruto's Ichiraku Ramen</div>
                         <img style={{ width: 415, height: 360, right: 50, top: 0.42, position: 'absolute', borderTopLeftRadius: 10, borderTopRightRadius: 10 }} src="./images/naruto.png" />
                    </div>

                    <div className="latest-title">Latest Dishes</div>
                    <div className="card-alignment-second">
                         <div style={{ width: 280, height: 308, left: 60, top: 1, position: 'absolute', background: '#D9D9D9', borderRadius: 10, filter: 'blur(5px)' }} />
                         <div style={{ width: 290, height: 306, left: 50, top: 0, position: 'absolute', background: '#F6F1EB', borderRadius: 10 }} />
                         <div style={{ width: 400, height: 25, top: 260, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 20, fontWeight: '600', wordWrap: 'break-word' }}>Ratatouille</div>
                         <img style={{ width: 290, height: 240, left: 50, top: 0.42, position: 'absolute', borderTopLeftRadius: 10, borderTopRightRadius: 10 }} src="./images/Rata.png" />
                    </div>
                    <div className="card-alignment-second">
                         <div style={{ width: 290, height: 308, left: 410, top: 1, position: 'absolute', background: '#D9D9D9', borderRadius: 10, filter: 'blur(5px)' }} />
                         <div style={{ width: 290, height: 306, left: 410, top: 0, position: 'absolute', background: '#F6F1EB', borderRadius: 10 }} />
                         <div style={{ width: 400, height: 25, left: 355, top: 260, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 20, fontWeight: '600', wordWrap: 'break-word' }}>Fortnite's Durr Burger</div>
                         <img style={{ width: 290, height: 240, left: 410, top: 0.42, position: 'absolute', borderTopLeftRadius: 10, borderTopRightRadius: 10 }} src="./images/Durr.png" />
                    </div>
                    <Nav.Item>
                    <div className="card-alignment-second">
                    <Nav.Link href="#/CineEats/Coraline"> 
                         <div style={{ width: 290, height: 308, left: 770, top: 1, position: 'absolute', background: '#D9D9D9', borderRadius: 10, filter: 'blur(5px)' }} />
                         <div style={{ width: 290, height: 306, left: 770, top: 0, position: 'absolute', background: '#F6F1EB', borderRadius: 10 }} />
                         <div style={{ width: 400, height: 25, left: 715, top: 260, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 20, fontWeight: '600', wordWrap: 'break-word' }}>Coraline's Cake</div>
                         <img style={{ width: 290, height: 240, left: 770, top: 0.42, position: 'absolute', borderTopLeftRadius: 10, borderTopRightRadius: 10 }} src="./images/Coraline.png" />
                         </Nav.Link>
                    </div>
                    </Nav.Item>
                    <div className="card-alignment-second">
                         <div style={{ width: 290, height: 308, right: 50, top: 1, position: 'absolute', background: '#D9D9D9', borderRadius: 10, filter: 'blur(5px)' }} />
                         <div style={{ width: 290, height: 306, right: 50, top: 0, position: 'absolute', background: '#F6F1EB', borderRadius: 10 }} />
                         <div style={{ width: 400, height: 25, left: 1075, top: 260, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 20, fontWeight: '600', wordWrap: 'break-word' }}>The Office's Chilli</div>
                         <img style={{ width: 290, height: 240, right: 50, top: 0.42, position: 'absolute', borderTopLeftRadius: 10, borderTopRightRadius: 10 }} src="./images/Kevin.png" />
                    </div><br />

                    <div className="card-alignment-third">
                         <div style={{ width: 280, height: 308, left: 60, top: 1, position: 'absolute', background: '#D9D9D9', borderRadius: 10, filter: 'blur(5px)' }} />
                         <div style={{ width: 290, height: 306, left: 50, top: 0, position: 'absolute', background: '#F6F1EB', borderRadius: 10 }} />
                         <div style={{ width: 400, height: 25, top: 245, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 20, fontWeight: '600', wordWrap: 'break-word' }}>Demon Slayer's Yamakake <br />Udon</div>
                         <img style={{ width: 290, height: 240, left: 50, top: 0.42, position: 'absolute', borderTopLeftRadius: 10, borderTopRightRadius: 10 }} src="./images/DemonSlayer.png" />
                    </div>
                    <div className="card-alignment-third">
                         <div style={{ width: 290, height: 308, left: 410, top: 1, position: 'absolute', background: '#D9D9D9', borderRadius: 10, filter: 'blur(5px)' }} />
                         <div style={{ width: 290, height: 306, left: 410, top: 0, position: 'absolute', background: '#F6F1EB', borderRadius: 10 }} />
                         <div style={{ width: 400, height: 25, left: 355, top: 260, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 20, fontWeight: '600', wordWrap: 'break-word' }}>My Little Pony's Pancakes</div>
                         <img style={{ width: 290, height: 240, left: 410, top: 0.42, position: 'absolute', borderTopLeftRadius: 10, borderTopRightRadius: 10 }} src="./images/pony.png" />
                    </div>
                    <div className="card-alignment-third">
                         <div style={{ width: 290, height: 308, left: 770, top: 1, position: 'absolute', background: '#D9D9D9', borderRadius: 10, filter: 'blur(5px)' }} />
                         <div style={{ width: 290, height: 306, left: 770, top: 0, position: 'absolute', background: '#F6F1EB', borderRadius: 10 }} />
                         <div style={{ width: 400, height: 25, left: 715, top: 260, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 20, fontWeight: '600', wordWrap: 'break-word' }}>iCarly's Spaghetti Taco</div>
                         <img style={{ width: 290, height: 240, left: 770, top: 0.42, position: 'absolute', borderTopLeftRadius: 10, borderTopRightRadius: 10 }} src="./images/Taco.png" />
                    </div>
                    <div className="card-alignment-third">
                         <div style={{ width: 290, height: 308, right: 50, top: 1, position: 'absolute', background: '#D9D9D9', borderRadius: 10, filter: 'blur(5px)' }} />
                         <div style={{ width: 290, height: 306, right: 50, top: 0, position: 'absolute', background: '#F6F1EB', borderRadius: 10 }} />
                         <div style={{ width: 400, height: 25, left: 1075, top: 260, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 20, fontWeight: '600', wordWrap: 'break-word' }}>Demon Slayer's Onigiri</div>
                         <img style={{ width: 290, height: 240, right: 50, top: 0.42, position: 'absolute', borderTopLeftRadius: 10, borderTopRightRadius: 10 }} src="./images/Onigiri.png" />
                    </div><br /><br /><br />

            
                         <h1 className="thank-you">Thank you for viewing our page!</h1>
                 
               </Card >
          </div >


     )
}