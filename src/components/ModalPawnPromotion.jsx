import React, { useEffect } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Row,
  Col,
} from "reactstrap";
import {
  BishopBlackPiece,
  BishopWhitePiece,
  KnightBlackPiece,
  KnightWhitePiece,
  QueenBlackPiece,
  QueenWhitePiece,
  RookBlackPiece,
  RookWhitePiece,
} from "./Piece";
import { PieceSide } from "../constant/PieceSide";

const blackList = [
  BishopBlackPiece(),
  KnightBlackPiece(),
  RookBlackPiece(),
  QueenBlackPiece(),
];
const whiteList = [
  BishopWhitePiece(),
  KnightWhitePiece(),
  RookWhitePiece(),
  QueenWhitePiece(),
];

const ModalPawnPromotion = ({ tile, modalOpen, toggle, handleClick }) => {
  return (
    <div>
      <Modal isOpen={modalOpen} toggle={toggle} size="sm" backdrop="static">
        {/* <ModalHeader toggle={toggle}>Modal title</ModalHeader> */}
        <ModalBody>
          <Row className="flex text-center">
            {tile?.piece.side === PieceSide.White ? (
              // White Team
              <Col>
                {whiteList.map((item) => {
                  return (
                    <button
                      type="button"
                      className="btn btn-light"
                      style={{
                        minWidth: "10px",
                        minHeight: "10px",
                      }}
                      name={item.side + " " + item.type}
                      key={item.side + " " + item.type}
                      onClick={() => {
                        toggle();
                        handleClick({ item: item });
                      }}
                      color={"light"}
                    >
                      {item.icon}
                    </button>
                  );
                })}
              </Col>
            ) : (
              // Black Team
              <Col>
                {blackList.map((item) => {
                  return (
                    <button
                      type="button"
                      className="btn btn-light"
                      style={{
                        minWidth: "10px",
                        minHeight: "10px",
                      }}
                      name={item.side + " " + item.type}
                      key={item.side + " " + item.type}
                      onClick={() => {
                        toggle();
                        handleClick({ item: item });
                      }}
                      color={"light"}
                    >
                      {item.icon}
                    </button>
                  );
                })}
              </Col>
            )}
          </Row>
        </ModalBody>
        {/* <ModalFooter>
          <Button color="danger" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter> */}
      </Modal>
    </div>
  );
};

export default ModalPawnPromotion;
