import React from 'react'

function Alert(props) {
  const checkT =(sent) =>{
    if(sent !== null)
    {
      let text = sent.toLowerCase();
      return text.charAt(0).toUpperCase() + text.slice(1);
    }
    else
      return null;
  }
  return (
    <>
    {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
    <strong>{checkT(props.alert.type)} </strong>: {props.alert.msg}
    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>}
    </>
  ) 
}

export default Alert