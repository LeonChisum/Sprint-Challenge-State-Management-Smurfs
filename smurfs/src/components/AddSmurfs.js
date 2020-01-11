import React, { useState } from 'react'
import { connect } from 'react-redux';
import { addSmurf } from '../actions/actions'

function AddSmurfs(props) {

    const [ newSmurf, setNewSmurf ] = useState({
        name: '',
        age: 0,
        height: '',
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        props.addSmurf(newSmurf)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Name: {''}
                <input 
                    type='text'
                    value={newSmurf.name}
                    onChange={(e) => (setNewSmurf({...newSmurf, name: e.target.value}))} />
                </label>
                <label>
                    Age: {''}
                <input 
                    type='text'
                    value={newSmurf.age}
                    onChange={(e) => (setNewSmurf({...newSmurf, age: e.target.value}))} />
                </label>
                <label>
                    Height: {''}
                <input 
                    type='text'
                    value={newSmurf.height}
                    onChange={(e) => (setNewSmurf({...newSmurf, height: e.target.value}))} />
                </label>
                <button onClick={handleSubmit}>Add Smurf</button>
            </form>
        </div>
    )
}

export default connect(null, { addSmurf })(AddSmurfs)