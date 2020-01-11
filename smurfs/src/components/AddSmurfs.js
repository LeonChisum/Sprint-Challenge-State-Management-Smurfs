import React, { useState } from 'react'

export default function AddSmurfs() {

    const [ newSmurf, setNewSmurf ] = useState({
        name: '',
        age: 0,
        height: 0,
    })

    
    return (
        <div>
            <form >
                <label>
                    Name: {''}
                <input 
                    type='text'
                    value={newSmurf.name}
                    onChange={(e) => (setNewSmurf({name: e.target.value}))} />
                </label>
                <label>
                    Age: {''}
                <input 
                    type='text'
                    value={newSmurf.age}
                    onChange={(e) => (setNewSmurf({age: e.target.value}))} />
                </label>
                <label>
                    Height: {''}
                <input 
                    type='text'
                    value={newSmurf.height}
                    onChange={(e) => (setNewSmurf({height: e.target.value}))} />
                </label>
                <button>Add Smurf</button>
            </form>
        </div>
    )
}
