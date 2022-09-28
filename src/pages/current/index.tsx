import {isAuth} from '../../utils/isAuth'
import { useEffect } from 'react'
import { useNavigate } from 'react-router'

export function Current() {
  let navigate = useNavigate()
  useEffect(()=> {
    if(!isAuth())  navigate('/login', {replace: true})
  },[navigate])
  return (
    <div>Current</div>
  )
}