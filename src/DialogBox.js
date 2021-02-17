// Replace this file with your actual React component
import React from 'react'
import PropTypes from 'prop-types'
import { Modal, ModalHeader, ModalBody } from 'reactstrap'
import './DialogBox.css'

const DialogBox = ({ dialogBox, onClick, dialogBoxHeader, dialogBoxBody, loadingAction }) => (
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
      <div className='float-right'>
        <button
          type='button'
          className={`${loadingAction ? 'disabled fa fa-spinner' : ''} btn btn-success`}
          style={{ marginRight: 5 }}
          onClick={() => this.onClick()}
        >
          Yes
        </button>
        <button
          type='button'
          className={`${loadingAction ? 'disabled' : ''} btn btn-primary`}
          onClick={() => this.onClick()}
        >
          No
        </button>
      </div>
    </ModalBody>
  </Modal>
)

DialogBox.propTypes = {
  dialogBox: PropTypes.bool.isRequired,
  loadingAction: PropTypes.bool.isRequired,
  dialogBoxHeader: PropTypes.string.isRequired,
  DialogBoxBody: PropTypes.string.isRequired,
  onClick: PropTypes.func
}

DialogBox.defaultProps = {
  dialogBox: false,
  loadingAction: false,
  dialogBoxHeader: '',
  dialogBoxBody: '',
  onClick: () => {}
}

export default DialogBox
