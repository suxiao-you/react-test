import { getCookie } from "./cookies"

export function isAuth():boolean {
  if(getCookie('token') === 'yes') return true
  else return false
}