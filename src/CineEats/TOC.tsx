import Nav from "react-bootstrap/Nav";

export default function TOC() {
  return (
    <div className="nav-container">
      <Nav className="nav-links" variant="pills">
        <Nav.Item>
          <Nav.Link href="#/Home">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#/CineEats">CineEats</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#/CineEats/Recipe">Recipe</Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
}