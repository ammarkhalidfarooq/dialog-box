// Replace this file with your actual React component
import React from 'react'
import PropTypes from 'prop-types'
import { Modal, ModalHeader, ModalBody } from 'reactstrap'
import './DialogBox.css'

const DialogBox = ({ dialogBox, onClick, dialogBoxHeader, dialogBoxBody }) => (
  <Modal
    size='sm'
    isOpen={dialogBox}
  >
    <ModalHeader
      toggle={() => this.setState({
        dialogBox: false
      })}
    >
      <div className='grey'>{dialogBoxHeader}</div>
    </ModalHeader>
    <ModalBody>
      <div>{dialogBoxBody}</div>
    </ModalBody>
  </Modal>
)

DialogBox.propTypes = {
  dialogBox: PropTypes.bool.isRequired,
  dialogBoxHeader: PropTypes.string.isRequired,
  DialogBoxBody: PropTypes.string.isRequired,
  onClick: PropTypes.func
}

DialogBox.defaultProps = {
  dialogBox: false,
  onClick: () => {}
}

export default DialogBox
