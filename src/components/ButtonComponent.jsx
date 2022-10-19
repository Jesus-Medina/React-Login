import React from "react"
import Button from 'react-bootstrap/Button';
import Swal from "sweetalert2";

function ButtonComponent({ buttonState }) {

  function successMesagge() {
    Swal.fire({
      title: "Login Succesfull",
      text:"Do you want to see the source code of this page? click on the ¡Okey! button",
      icon: "success",
      iconColor: "#0d6efd",
      background: "#212529",
      color: "white",
      confirmButtonText: "¡Okey!",
      confirmButtonColor: "#0d6efd"
    }).then(function() {
      window.open("https://github.com/Jesus-Medina/React-Login", "_blank")
    })
  }

  return (
    <React.Fragment>
      <Button onClick={successMesagge} className="px-5" variant="primary" type="submit">
        Submit
      </Button>
    </React.Fragment>
  )
}

export default ButtonComponent