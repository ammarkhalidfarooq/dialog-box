import React from "react";
import PropTypes from "prop-types";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
import "./DialogBox.css";

const DialogBox = ({
  dialogBox,
  confirmationClick,
  rejectionClick,
  dialogBoxHeader,
  dialogBoxBody,
  loadingAction,
  toggleClose,
}) => (
  <Modal size="sm" isOpen={dialogBox}>
    <ModalHeader toggle={toggleClose}>
      <div className="grey">{dialogBoxHeader}</div>
    </ModalHeader>
    <ModalBody>
      <div>{dialogBoxBody}</div>
      <div className="float-right">
        <button
          type="button"
          className={`${
            loadingAction ? "disabled fa fa-spinner" : ""
          } btn btn-success`}
          style={{ marginRight: 5 }}
          onClick={confirmationClick}
        >
          Yes
        </button>
        <button
          style={{
            color: "#fff",
            backgroundColor: "#dc3545",
            borderColor: "#dc3545",
          }}
          type="button"
          className={`${loadingAction ? "disabled" : ""} btn`}
          onClick={rejectionClick}
        >
          No
        </button>
      </div>
    </ModalBody>
  </Modal>
);

DialogBox.propTypes = {
  dialogBox: PropTypes.bool.isRequired,
  loadingAction: PropTypes.bool.isRequired,
  dialogBoxHeader: PropTypes.string.isRequired,
  DialogBoxBody: PropTypes.string.isRequired,
  confirmationClick: PropTypes.func,
  rejectionClick: PropTypes.func,
  toggleClose: PropTypes.func,
};

DialogBox.defaultProps = {
  dialogBox: false,
  loadingAction: false,
  dialogBoxHeader: "",
  dialogBoxBody: "",
  confirmationClick: () => {},
  rejectionClick: () => {},
  toggleClose: () => {},
};

export default DialogBox;
