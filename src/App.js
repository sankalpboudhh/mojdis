import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import MenFormal from "./formal-men.png";
import MojdiMen from "./mojdi-men.png";
import FormalWomen from "./formal-women.png";
import MojdiWomen from "./mojdi-women.png";
import Accordion from "react-bootstrap/Accordion";
import { Box, Button, Modal, Typography } from "@mui/material";
import React from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "#cfc4b2",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function App() {
  document.body.style.backgroundColor = "#cfc4b2";

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
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
                Footwear is a sustainable and conscious fashion with strong
                design elements inspired by everything around, while making sure
                each product is comfortable.
              </li>
              <li>
                Each product at Modjis are carefully handcrafted they have
                inherited & perfected their craft for generations. This not only
                supports the broader community but also keeps their craft alive.
              </li>
              <li>
                Mojdis constantly ideates and experiments to take every
                component of each product more sustainable. Whether it is about
                innovating raw materials, pasting technologies, packaging, or
                anything else, it is a constant endeavour to take Mojdi one step
                closer to sustainability.
              </li>
            </ul>
          </div>

          <div className="content">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: "30vh",
              }}
            >
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
              <div
                style={{
                  marginTop: "5vh",
                }}
              >
                <form>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                    }}
                    className="form-outline w-50"
                  >
                    <input
                      type="text"
                      id="footwear"
                      className="form-control"
                      placeholder="Search for Footwear"
                      style={{ width: "25vh" }}
                    />

                    <button
                      type="submit"
                      className="btn btn-light"
                      style={{ color: "red", backgroundColor: "#cfc4b2" }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        className="bi bi-search-heart"
                        viewBox="0 0 16 16"
                      >
                        <path d="M6.5 4.482c1.664-1.673 5.825 1.254 0 5.018-5.825-3.764-1.664-6.69 0-5.018Z" />
                        <path d="M13 6.5a6.471 6.471 0 0 1-1.258 3.844c.04.03.078.062.115.098l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1.007 1.007 0 0 1-.1-.115h.002A6.5 6.5 0 1 1 13 6.5ZM6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11Z" />
                      </svg>{" "}
                    </button>
                  </div>

                  <div>
                    <button
                      type="button"
                      className="btn"
                      onClick={handleOpen}
                      style={{
                        backgroundColor: "#764637",
                        color: "white",
                        width: "31vh",
                        marginTop: "2vh",
                      }}
                    >
                      Call for Inquiry
                    </button>
                  </div>
                </form>
              </div>
            </div>

            <div>
              <div>
                <button className="link" onClick={handleOpen}>
                  <img
                    src={MenFormal}
                    alt="Men Formal"
                    className="responsive"
                    onClick={handleOpen}
                  ></img>
                  <p className="tag">Formal Shoes(Men)</p>
                </button>
              </div>

              <div>
                <button className="link" onClick={handleOpen}>
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
                <button className="link" onClick={handleOpen}>
                  <img
                    src={MojdiMen}
                    alt="MojdiMen"
                    className="responsive"
                  ></img>
                  <p className="tag">Mojadi (Men)</p>
                </button>
              </div>
              <div>
                <button className="link" onClick={handleOpen}>
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

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Call for Inquiry
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Call on +91 987-654-32XX
          </Typography>
          <div
            style={{ display: "flex", justifyContent: "center", margin: "2vh" }}
          >
            <Button variant="contained" onClick={handleClose}>
              Call
            </Button>
          </div>
        </Box>
      </Modal>
    </>
  );
}

export default App;
