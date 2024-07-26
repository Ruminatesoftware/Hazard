import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretUp,
  faCaretLeft,
  faCaretRight,
} from "@fortawesome/free-solid-svg-icons";

import "./Hazard.css";

//Define sounds
// const primary = new Audio(require("../utils/Cheap_thrills_ Songs.mp3"));
// const wail = new Audio(require("../utils/english_love_songs.mp3"));
// const alert = new Audio(require("../utils/English_love_songs.mp3"));
// const sec = new Audio(require("../utils/English_songs_2019.mp3"));
// const siren2 = new Audio(require("../utils/English_Songs.mp3"));
// const man = new Audio(require("../utils/Iphone_Songs.mp3"));
// const alt = new Audio(require("../utils/New_English_Songs.mp3"));
// const light = new Audio(require("../utils/No_Sleep_ Martin.mp3"));
// const radio = new Audio(require("../utils/Senorita_Songs.mp3"));
// const up = new Audio(require("../utils/She_English Song.mp3"));
// const left = new Audio(require("../utils/Clean_Bandit_Rather.mp3"));
// const right = new Audio(require("../utils/Symphonies_Clean_Bandit.mp3"));

const Hazard = () => {
  //Modal
  const [show, setShow] = useState(false);
  const handleClose = () => {
    stopAllAudio();
    setMusic("");
    setShow(false);
  };
  const handleShow = () => setShow(true);

  const [music, setMusic] = useState<string>("");

  // Stop all audio and cleartime
  const stopAllAudio = () => {
    // primary.pause();
    // primary.currentTime = 0;
    // wail.pause();
    // wail.currentTime = 0;
    // alert.pause();
    // alert.currentTime = 0;
    // sec.pause();
    // sec.currentTime = 0;
    // siren2.pause();
    // siren2.currentTime = 0;
    // right.pause();
    // right.currentTime = 0;
    // up.pause();
    // up.currentTime = 0;
    // left.pause();
    // left.currentTime = 0;
    // man.pause();
    // man.currentTime = 0;
    // alt.pause();
    // alt.currentTime = 0;
    // light.pause();
    // light.currentTime = 0;
    // radio.pause();
    // radio.currentTime = 0;
  };

  //Button functionality
  const handleButton = (type: string) => {
    // By default
    stopAllAudio();

    switch (type) {
      case "primary":
        // primary.play();
        setMusic("primary");
        return;
      case "wail":
        // wail.play();
        setMusic("wail");
        return;
      case "alert":
        //alert.play();
        setMusic("alert");
        return;
      case "sec":
        //sec.play();
        setMusic("sec");
        return;
      case "siren2":
        //siren2.play();
        setMusic("siren2");
        return;
      case "right":
        //right.play();
        setMusic("right");
        return;
      case "up":
        //up.play();
        setMusic("up");
        return;
      case "left":
        //left.play();
        setMusic("left");
        return;
      case "man":
        // man.play();
        setMusic("man");
        return;
      case "alt":
        //alt.play();
        setMusic("alt");
        return;
      case "light":
        //light.play();
        setMusic("light");
        return;
      case "radio":
        //radio.play();
        setMusic("radio");
        return;
      default:
        //console.log("default");
        return;
    }
  };

  //Clear Button functionality
  const handleClear = () => {
    switch (music) {
      case "primary":
        //primary.pause();
        //primary.currentTime = 0;
        setMusic("");
        return;
      case "wail":
        //wail.pause();
        //wail.currentTime = 0;
        setMusic("");
        return;
      case "alert":
        //alert.pause();
        //alert.currentTime = 0;
        setMusic("");
        return;
      case "sec":
        //sec.pause();
        //sec.currentTime = 0;
        setMusic("");
        return;
      case "siren2":
        //siren2.pause();
        //siren2.currentTime = 0;
        setMusic("");
        return;
      case "right":
        //right.pause();
        //right.currentTime = 0;
        setMusic("");
        return;
      case "up":
        //up.pause();
        //up.currentTime = 0;
        setMusic("");
        return;
      case "left":
        //left.pause();
        //left.currentTime = 0;
        setMusic("");
        return;
      case "man":
        // man.pause();
        //man.currentTime = 0;
        setMusic("");
        return;
      case "alt":
        //alt.pause();
        //alt.currentTime = 0;
        setMusic("");
        return;
      case "light":
        //light.pause();
        //light.currentTime = 0;
        setMusic("");
        return;
      case "radio":
        //radio.pause();
        //radio.currentTime = 0;
        setMusic("");
        return;
      default:
        //console.log("default");
        return;
    }
  };

  return (
    <>
      {/* Modal start */}
      <Button variant="primary" onClick={handleShow}>
        Launch Hazard
      </Button>

      <Modal
        className="hazard-modal"
        size="lg"
        show={show}
        onHide={handleClose}
      >
        <Modal.Body>
          <div className="hazard-systems-wrap">
            <div className="hazard-systems-block">
              <div className="hazard-systems-row">
                <div className="hazard-systems-col1">
                  <ul>
                    <li>
                      <div>
                        <button
                          onClick={() => handleButton("primary")}
                          className="primary-btn"
                        >
                          {music && music === "primary" ? (
                            <div className="led-green"></div>
                          ) : (
                            ""
                          )}
                          <span>Primary</span>
                        </button>
                      </div>
                      <div>
                        <label>Backlight</label>
                        <button onClick={() => handleButton("wail")}>
                          {(music && music === "wail") || music === "alert" ? (
                            <div className="led-green"></div>
                          ) : (
                            ""
                          )}
                          <span>
                            Wail
                            <br />
                            Yelp
                          </span>
                        </button>
                      </div>
                    </li>
                    <li>
                      <div>
                        <button onClick={() => handleButton("sec")}>
                          {music && music === "sec" ? (
                            <div className="led-green"></div>
                          ) : (
                            ""
                          )}
                          <span>Sec</span>
                        </button>
                      </div>
                      <div>
                        <button onClick={() => handleButton("up")}>
                          {music && music === "up" ? (
                            <div className="led-green"></div>
                          ) : (
                            ""
                          )}
                          <span>
                            <FontAwesomeIcon
                              icon={faCaretUp}
                              className="carretIcon"
                            />
                          </span>
                        </button>
                      </div>
                      <div>
                        <label>Frequency</label>
                        <button onClick={() => handleButton("siren2")}>
                          {music && music === "siren2" ? (
                            <div className="led-green"></div>
                          ) : (
                            ""
                          )}
                          <span>
                            Siren
                            <br />2
                          </span>
                        </button>
                      </div>
                    </li>
                    <li>
                      <div>
                        <label>Down</label>
                        <button
                          className="down-btn"
                          onClick={() => handleButton("left")}
                        >
                          {music && music === "alert" ? (
                            <div className="led-green-blink"></div>
                          ) : (
                            ""
                          )}

                          {music && music === "left" ? (
                            <div className="led-green"></div>
                          ) : (
                            ""
                          )}
                          <span>
                            <FontAwesomeIcon
                              icon={faCaretLeft}
                              className="carretIcon"
                            />
                          </span>
                        </button>
                      </div>
                      <div>
                        <label>Up</label>
                        <button
                          className="up-btn"
                          onClick={() => handleButton("right")}
                        >
                          {music && music === "alert" ? (
                            <div className="led-green-blink"></div>
                          ) : (
                            ""
                          )}
                          {music && music === "right" ? (
                            <div className="led-green"></div>
                          ) : (
                            ""
                          )}
                          <span>
                            <FontAwesomeIcon
                              icon={faCaretRight}
                              className="carretIcon"
                            />
                          </span>
                        </button>
                      </div>
                      <div>
                        <label>Volume</label>
                        <button onClick={() => handleButton("man")}>
                          {music && music === "man" ? (
                            <div className="led-green"></div>
                          ) : (
                            ""
                          )}
                          <span>Man</span>
                        </button>
                      </div>
                    </li>
                    <li>
                      <div>
                        <button
                          className="alt-btn"
                          onClick={() => handleButton("alt")}
                        >
                          {music && music === "alt" ? (
                            <div className="led-green"></div>
                          ) : (
                            ""
                          )}
                          <span>Alt</span>
                        </button>
                      </div>
                      <div>
                        <button onClick={() => handleButton("light")}>
                          {music && music === "light" ? (
                            <div className="led-green"></div>
                          ) : (
                            ""
                          )}
                          <span>Light</span>
                        </button>
                      </div>
                      <div>
                        <label>Program</label>
                        <button onClick={() => handleButton("radio")}>
                          {music && music === "radio" ? (
                            <div className="led-green"></div>
                          ) : (
                            ""
                          )}
                          <span>Radio</span>
                        </button>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="hazard-systems-col2">
                  <div>
                    <button
                      className="alert-btn"
                      onClick={() => handleButton("alert")}
                    >
                      {music && music === "alert" ? (
                        <div className="led-red-wrap">
                          <div className="led-red"></div>
                          <div className="led-red"></div>
                        </div>
                      ) : (
                        ""
                      )}
                      <span>Alert</span>
                    </button>
                  </div>
                  <div className="hscol2-block">
                    <img src={"/images/logo.png"} height="45" alt="logo" />
                    <div className="light-line">
                      <div></div>
                    </div>
                    <h6>M3 - Slic</h6>
                  </div>
                  <div>
                    <button className="clear-btn" onClick={handleClear}>
                      <span>Clear</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
      {/* Modal over */}
    </>
  );
};
export default Hazard;
