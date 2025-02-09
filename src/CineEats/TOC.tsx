import Nav from "react-bootstrap/Nav";

export default function TOC() {
  return (
    <div className="nav-container">
      <Nav className="nav-links" >
        <Nav.Item>
          <Nav.Link href="#/CineEats/Home">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#/CineEats/Recipe">Recipe</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#/CineEats/About">About</Nav.Link>
        </Nav.Item>
        
       
      </Nav>
    </div>
  );
}