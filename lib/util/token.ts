const getToken = () => {
  const token = typeof window !== 'undefined' ? localStorage.getItem("token") : ''
  if (token !== null) {
    return token
  } else {
    return ''
  }
};

const setToken = (token: string) => {
  if (!token) {
    return false
  }
  localStorage.setItem("token", token)
};

const delToken = () => {
  localStorage.removeItem("token")
  location.reload()
}

export { getToken, setToken, delToken }