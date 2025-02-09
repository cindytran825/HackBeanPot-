import { Card } from "react-bootstrap";
import "./stylerecipe.css"

export default function Recipe() {
     return (
          <div >
               <Card.Img
                    src="./images/LadynTramp.png"
                    height={145}
                    style={{ width: "100vw", height: "100%", display: "block", border: "none", filter: 'blur(.5px)' }} />

               <div style={{ width: '100%', height: '100%', position: 'relative' }}>
                    <div style={{ right: -150, bottom: 65, fontSize: 84, position: 'absolute', textAlign: 'right', color: 'white', fontFamily: 'BIZ UDPMincho', fontWeight: '700', textTransform: 'capitalize', wordWrap: 'break-word', lineHeight: 1, textShadow: "0px 3px 10px #333333" }}>Spaghetti</div>
               </div>
               <div style={{ width: '100%', height: '100%', position: 'relative' }}>
                    <div style={{ right: -150, bottom: 150, position: 'absolute', textAlign: 'right', color: 'white', fontSize: 28, fontFamily: 'BIZ UDPMincho', fontWeight: '700', wordWrap: 'break-word', lineHeight: 1, textShadow: "0px 2px 3px #333333" }}>Lady and the Tramp's </div>
               </div>
               <div className="category-title">Categories</div><br />
               <div>
                    <div className="category-alignment">
                         <div>
                              <img style={{ width: 140, height: 140, left: 50, top: 95, position: 'absolute', borderRadius: 100 }} src="./images/Rata.png" />
                              <b style={{ left: 90, top: 250, position: 'absolute', borderRadius: 100 }}>Disney</b>
                         </div>
                         <div >
                              <img style={{ width: 140, height: 140, left: 220, top: 95, position: 'absolute', borderRadius: 100 }} src="./images/Nick.png" />
                              <b style={{ left: 235, top: 250, position: 'absolute', borderRadius: 100 }}>Nickelodeon</b>
                         </div>
                         <div>
                              <img style={{ width: 140, height: 140, left: 390, top: 95, position: 'absolute', borderRadius: 100 }} src="./images/anime.png" />
                              <b style={{ left: 430, top: 250, position: 'absolute', borderRadius: 100 }}>Anime</b>
                         </div>
                         <div>
                              <img style={{ width: 140, height: 140, left: 560, top: 95, position: 'absolute', borderRadius: 100 }} src="./images/game.png" />
                              <b style={{ left: 608, top: 250, position: 'absolute', borderRadius: 100 }}>Game</b>
                         </div>
                         <div>
                              <img style={{ width: 140, height: 140, left: 730, top: 95, position: 'absolute', borderRadius: 100 }} src="./images/LiveAction.png" />
                              <b style={{ left: 755, top: 250, position: 'absolute', borderRadius: 100 }}>Live Action</b>
                         </div>
                         <div>
                              <img style={{ width: 140, height: 140, left: 900, top: 95, position: 'absolute', borderRadius: 100 }} src="./images/Breakfast.png" />
                              <b style={{ left: 930, top: 250, position: 'absolute', borderRadius: 100 }}>Breakfast</b>
                         </div>
                         <div>
                              <img style={{ width: 140, height: 140, left: 1070, top: 95, position: 'absolute', borderRadius: 100 }} src="./images/Kevin.png" />
                              <b style={{ left: 1115, top: 250, position: 'absolute', borderRadius: 100 }}>Dinner</b>
                         </div>
                         <div>
                              <img style={{ width: 140, height: 140, left: 1240, top: 95, position: 'absolute', borderRadius: 100 }} src="./images/Drinks.png" />
                              <b style={{ left: 1280, top: 250, position: 'absolute', borderRadius: 100 }}>Drinks</b>
                         </div>
                    </div>
                    <br />

                    <div className="delicious-title">Super Delicious</div>

                    <div className="card-alignment">
                         <div style={{ width: 415, height: 482, left: 50, top: 360, position: 'absolute', background: '#D9D9D9', borderRadius: 10, filter: 'blur(5px)' }} />
                         <div style={{ width: 415, height: 478, left: 50, top: 360, position: 'absolute', background: '#F6F1EB', borderRadius: 10 }} />
                         <div style={{ width: 340, height: 106, left: 85, top: 760, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 25, fontWeight: '600', wordWrap: 'break-word' }}>Demon Slayer's Onigiri</div>
                         <img style={{ width: 415, height: 360, left: 50, top: 360, position: 'absolute', borderTopLeftRadius: 10, borderTopRightRadius: 10 }} src="./images/Onigiri.png" />
                    </div>

                    <div className="card-alignment">
                         <div style={{ width: 415, height: 482, left: 530, top: 360, position: 'absolute', background: '#D9D9D9', borderRadius: 10, filter: 'blur(5px)' }} />
                         <div style={{ width: 415, height: 478, left: 530, top: 360, position: 'absolute', background: '#F6F1EB', borderRadius: 10 }} />
                         <div style={{ width: 340, height: 106, left: 570, top: 735, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 25, fontWeight: '600', wordWrap: 'break-word' }}>Princess and The Frog’s Beignets</div>
                         <img style={{ width: 415, height: 360, left: 530, top: 360, position: 'absolute', borderTopLeftRadius: 10, borderTopRightRadius: 10 }} src="./images/Tiana.png" />
                    </div>

                    <div className="card-alignment">
                         <div style={{ width: 415, height: 482, left: 1000, top: 360, position: 'absolute', background: '#D9D9D9', borderRadius: 10, filter: 'blur(5px)' }} />
                         <div style={{ width: 415, height: 478, left: 1000, top: 360, position: 'absolute', background: '#F6F1EB', borderRadius: 10 }} />
                         <div style={{ width: 340, height: 106, left: 1035, top: 760, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 25, fontWeight: '600', wordWrap: 'break-word' }}>Naruto's Ichiraku Ramen</div>
                         <img style={{ width: 415, height: 360, left: 1000, top: 360, position: 'absolute', borderTopLeftRadius: 10, borderTopRightRadius: 10 }} src="./images/naruto.png" />
                    </div><br />

                    <div className="card-alignment-second">
                         <div style={{ width: 415, height: 482, left: 50, top: 250, position: 'absolute', background: '#D9D9D9', borderRadius: 10, filter: 'blur(5px)' }} />
                         <div style={{ width: 415, height: 478, left: 50, top: 250, position: 'absolute', background: '#F6F1EB', borderRadius: 10 }} />
                         <div style={{ width: 340, height: 106, left: 85, top: 650, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 25, fontWeight: '600', wordWrap: 'break-word' }}> Tyler the Creator's Waffles</div>
                         <img style={{ width: 415, height: 360, left: 50, top: 250, position: 'absolute', borderTopLeftRadius: 10, borderTopRightRadius: 10 }} src="./images/Breakfast.png" />
                    </div>

                    <div className="card-alignment-second">
                         <div style={{ width: 415, height: 482, left: 530, top: 250, position: 'absolute', background: '#D9D9D9', borderRadius: 10, filter: 'blur(5px)' }} />
                         <div style={{ width: 415, height: 478, left: 530, top: 250, position: 'absolute', background: '#F6F1EB', borderRadius: 10 }} />
                         <div style={{ width: 340, height: 106, left: 570, top: 650, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 25, fontWeight: '600', wordWrap: 'break-word' }}>Kim Possible's Naco</div>
                         <img style={{ width: 415, height: 360, left: 530, top: 250, position: 'absolute', borderTopLeftRadius: 10, borderTopRightRadius: 10 }} src="./images/Naco.png" />
                    </div>

                    <div className="card-alignment-second">
                         <div style={{ width: 415, height: 482, left: 1000, top: 250, position: 'absolute', background: '#D9D9D9', borderRadius: 10, filter: 'blur(5px)' }} />
                         <div style={{ width: 415, height: 478, left: 1000, top: 250, position: 'absolute', background: '#F6F1EB', borderRadius: 10 }} />
                         <div style={{ width: 340, height: 106, left: 1035, top: 650, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 25, fontWeight: '600', wordWrap: 'break-word' }}>My Little Pony's Pancakes</div>
                         <img style={{ width: 415, height: 360, left: 1000, top: 250, position: 'absolute', borderTopLeftRadius: 10, borderTopRightRadius: 10 }} src="./images/pony.png" />
                    </div><br />

                    <div className="cinema-title">Cinematic Collections</div>
                    <div className="card-alignment-third">
                         <div style={{ width: 650, height: 570, left: 50, top: 510, position: 'absolute', background: '#D9D9D9', borderRadius: 10, filter: 'blur(5px)' }} />
                         <div style={{ width: 650, height: 570, left: 50, top: 510, position: 'absolute', background: '#F6F1EB', borderRadius: 10 }} />
                         <div style={{ width: 360, height: 500, left: 190, top: 960, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 30, fontWeight: '600' }}>Jump into the world of anime</div>
                         <img style={{ width: 650, height: 420, left: 50, top: 510, position: 'absolute', borderTopLeftRadius: 10, borderTopRightRadius: 10 }} src="./images/Noodle.png" />
                    </div>
                    <div className="card-alignment-third">
                         <div style={{ width: 650, height: 570, left: 770, top: 510, position: 'absolute', background: '#D9D9D9', borderRadius: 10, filter: 'blur(5px)' }} />
                         <div style={{ width: 650, height: 570, left: 770, top: 510, position: 'absolute', background: '#F6F1EB', borderRadius: 10 }} />
                         <div style={{ width: 360, height: 500, left: 920, top: 960, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 30, fontWeight: '600', wordWrap: 'break-word' }}>Learn 30 different ways to make a burger</div>
                         <img style={{ width: 650, height: 420, left: 770, top: 510, position: 'absolute', borderTopLeftRadius: 10, borderTopRightRadius: 10 }} src="./images/Burger.png" />
                    </div><br />
                    <div className="card-alignment-third">
                         <div style={{ width: 650, height: 570, left: 50, top: 1120, position: 'absolute', background: '#D9D9D9', borderRadius: 10, filter: 'blur(5px)' }} />
                         <div style={{ width: 650, height: 570, left: 50, top: 1120, position: 'absolute', background: '#F6F1EB', borderRadius: 10 }} />
                         <div style={{ width: 360, height: 500, left: 190, top: 1570, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 30, fontWeight: '600' }}>Enjoy all the goodies Nickelodeon has to offer!</div>
                         <img style={{ width: 650, height: 420, left: 50, top: 1120, position: 'absolute', borderTopLeftRadius: 10, borderTopRightRadius: 10 }} src="./images/squid.png" />
                    </div>
                    <div className="card-alignment-third">
                         <div style={{ width: 650, height: 570, left: 770, top: 1120, position: 'absolute', background: '#D9D9D9', borderRadius: 10, filter: 'blur(5px)' }} />
                         <div style={{ width: 650, height: 570, left: 770, top: 1120, position: 'absolute', background: '#F6F1EB', borderRadius: 10 }} />
                         <div style={{ width: 360, height: 500, left: 920, top: 1570, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 30, fontWeight: '600', wordWrap: 'break-word' }}>International Foods</div>
                         <img style={{ width: 650, height: 420, left: 770, top: 1120, position: 'absolute', borderTopLeftRadius: 10, borderTopRightRadius: 10 }} src="./images/Korean.png" />
                    </div>

                   

               </div>
          </div>


     )


}