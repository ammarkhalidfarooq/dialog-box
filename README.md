# Dialog Box for Admin

> This project is created to automate dialog box creation in projects. It uses reactstrap modal for creating the dialog box.

## Installation

1. Install using `npm i @ammar.khalid/dialog-box`.

## Usage

```python
    <DialogBox
      dialogBoxHeader="Header"
      dialogBoxBody="Body"
      dialogBox=true
      loadingAction=true
      confirmationClick={() => this.someFunction()}
      rejectionClick={() => this.anotherFunction()}
   />
```

   dialogBox: PropTypes.bool.isRequired,
   loadingAction: PropTypes.bool.isRequired,
   dialogBoxHeader: PropTypes.string.isRequired,
   dialogBoxBody: PropTypes.string.isRequired,
   confirmationClick: PropTypes.func,
   rejectionClick: PropTypes.func`
