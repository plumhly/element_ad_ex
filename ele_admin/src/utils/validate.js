export function validUser(username) {
  const map = ['admin', 'editor']
  return map.indexOf(username.trim()) >= 0
}
