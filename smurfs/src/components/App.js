import React, { useEffect } from "react";
import {connect} from 'react-redux';
import "./App.css";
import { getAllSmurfs } from "../actions/actions";
import AddSmurfs from "./AddSmurfs";
function App (props) {

  useEffect(() => (
      props.getAllSmurfs()
  ), [])

    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <h4>Smurf List:</h4>
        <div>{props.smurfs.map(smurf => (
          <div>{smurf.name}</div>
        ))}</div>
        <AddSmurfs />
      </div>
    );
}

const mapStateToProps = state => ({
  smurfs: state.smurfs
})

export default connect(mapStateToProps, { getAllSmurfs })(App);
