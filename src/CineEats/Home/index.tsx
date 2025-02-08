import { Card } from "react-bootstrap";

export default function Home() {
     return (
          <div className="home-page">

               <Card style={{ width: "100vw",height: "450px", margin: 0, padding: 0, marginTop: "-200px"}}>
                    <Card.Img
                         src="/images/studio_g.png"
                         height={365}
                         style={{ width: "100vw", height:"100%", objectFit: "cover", display: "block" }}
                    />
                   <Card.Text className="wd_content">“Food always comes to those who love to cook”</Card.Text>

               </Card>

          </div>


     )
}