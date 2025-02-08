import { Card } from "react-bootstrap";
import "./style.css";
export default function Home() {
     return (
          <div className="home-page">

               <Card style={{ width: "100vw",height: "450px", margin: 0, padding: 0, marginTop: "-100px", border: "none"}}>
                    <Card.Img
                         src="/images/studio_g.png"
                         height={365}
                         style={{ width: "100vw", height:"100%", display: "block", border: "none"}}
                    />
                   <p className="wd_content">“Food always comes to those who love to cook” <div className="wd_content_movie ">-Ratatouille</div>
                   <Card.Text
                         className="row justify-content-center align-items-center wd_content_bio">  Ever watched a movie or show and wished you could taste the delicious dishes on screen? Our menu brings those iconic animated meals to life, letting you cook and savor the foods you’ve craved from your favorite films, shows, and games
                    </Card.Text>
                   </p>
                 
                    
                    
               </Card>

          </div>


     )
}