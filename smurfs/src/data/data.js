import axios from 'axios'
import { useState } from 'react'

const [village, setVillage] = useState([])

export default Data = () => {
axios.get('http://localhost:3333/smurfs')
                        .then(res => {
                            console.log(res.data)
                            setVillage(res.data)
                        })
                        .catch(err => (
                            console.log(err)
                        ))}