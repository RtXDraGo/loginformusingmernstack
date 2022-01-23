import React from 'react';
import { useHistory } from 'react-router-dom';
export default function Hompage(props) {
  const history=useHistory()
  return (
  <div>
    <div className="card">
  <div className="card-header">
    These is the homepage of {props.val.name}
  </div>
  <div className="card-body">
    <h5 className="card-title">Best Of his Kind</h5>
    <p className="card-text">Here is some content about worlds best person please go through it.You will learn a lot of things </p>
    <a href="#" className="btn btn-primary" onClick={()=>history.push("/login")}>LOGOUT</a>
  </div>
</div>
  </div>
  )
}
