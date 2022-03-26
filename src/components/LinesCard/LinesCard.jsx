import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styles from './LinesCard.module.css'
import * as authService from '../../services/authService'

const LinesCard = ({ lines }) => {
  return (
    <>
      <div className="card">
        <p>{lines.line}</p>
      </div>
    </>
  )
}


export default LinesCard