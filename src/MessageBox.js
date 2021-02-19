import React from 'react'
import PropTypes from 'prop-types'
import { Modal, ModalBody } from 'reactstrap'
import './DialogBox.css'

const MessageBox = ({ messageBoxBody, messageBox }) => {
  <Modal
    size='sm'
    isOpen={messageBox}
  >
    <ModalBody>
      <div>{messageBoxBody}</div>
    </ModalBody>
  </Modal>
}

MessageBox.PropTypes = {
  messageBox: PropTypes.bool.isRequired,
  messageBoxBody: PropTypes.string.isRequired
}

MessageBox.defaultProps = {
  messageBox: false,
  messageBoxBody: ''
}

export default MessageBox
