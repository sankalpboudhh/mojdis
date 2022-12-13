import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import MenFormal from "./formal-men.png";
import MojdiMen from "./mojdi-men.png";
import FormalWomen from "./formal-women.png";
import MojdiWomen from "./mojdi-women.png";
import Accordion from "react-bootstrap/Accordion";

function App() {
  document.body.style.backgroundColor = "#cfc4b2";

  // const handleClick = (e) => {};

  return (
    <Container>
      <div className="body-wrapper">
        <header>
          <h1 className="title">MOJDIS</h1>
          <h5 className="tagline">
            An Indian Sustainable Luxury Footwear Brand
          </h5>
        </header>

        <div className="description">
          <ul>
            <li>
              <span className="mojdi">Mojdis </span>
              Footwear is a sustainable and conscious fashion with strong design
              elements inspired by everything around, while making sure each
              product is comfortable.
            </li>
            <li>
              Each product at Modjis are carefully handcrafted they have
              inherited & perfected their craft for generations. This not only
              supports the broader community but also keeps their craft alive.
            </li>
            <li>
              Mojdis constantly ideates and experiments to take every component
              of each product more sustainable. Whether it is about innovating
              raw materials, pasting technologies, packaging, or anything else,
              it is a constant endeavour to take Mojdi one step closer to
              sustainability.
            </li>
          </ul>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <div>
            <h4>Category</h4>
            <Accordion style={{ backgroundColor: "#cfc4b2" }}>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Men</Accordion.Header>
                <Accordion.Body style={{ backgroundColor: "#cfc4b2" }}>
                  <p>Formal</p>
                  <p>Mojdi</p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item className="accordion-item" eventKey="1">
                <Accordion.Header>Women</Accordion.Header>
                <Accordion.Body style={{ backgroundColor: "#cfc4b2" }}>
                  <p>Formal</p>
                  <p>Mojdi</p>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>

          <div>
            <div>
              <button className="link">
                <img
                  src={MenFormal}
                  alt="Men Formal"
                  className="responsive"
                ></img>
                <p className="tag">Formal Shoes(Men)</p>
              </button>
            </div>

            <div>
              <button className="link">
                <img
                  src={FormalWomen}
                  alt="FormalWomen"
                  className="responsive"
                ></img>
                <p className="tag">Formal Shoes(Women)</p>
              </button>
            </div>
          </div>
          <div>
            <div>
              <button className="link">
                <img src={MojdiMen} alt="MojdiMen" className="responsive"></img>
                <p className="tag">Mojadi (Men)</p>
              </button>
            </div>
            <div>
              <button className="link">
                <img
                  src={MojdiWomen}
                  alt="MojdiWomen"
                  className="responsive"
                ></img>
                <p className="tag">Mojadi (Women)</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default App;
