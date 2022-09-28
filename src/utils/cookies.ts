import Cookie from 'js-cookie'


export function setCookie(name: string, value:string) {
  return Cookie.set(name, value, {expires: 7})
}

export function getCookie(name:string) {
  return Cookie.get(name)
}

export function removeCookie(name:string) {
  Cookie.remove(name)
}