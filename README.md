# Dialog Box for Admin

> This project is created to automate dialog box creation in projects. It uses reactstrap modal for creating the dialog box.

## Installation

`npm i @ammar.khalid/dialog-box`

## Usage

```python
    <DialogBox
      dialogBoxHeader="Header"
      dialogBoxBody="Body"
      dialogBox=true
      loadingAction=true
      confirmationClick={() => this.someFunction()}
      rejectionClick={() => this.anotherFunction()}
      toggleClose={() => this.toggle()}
   />
```

## Properties

```python
   dialogBox: PropTypes.bool.isRequired,
   loadingAction: PropTypes.bool.isRequired,
   dialogBoxHeader: PropTypes.string.isRequired,
   dialogBoxBody: PropTypes.string.isRequired,
   confirmationClick: PropTypes.func,
   rejectionClick: PropTypes.func,
   toggleClose: PropTypes.func
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
