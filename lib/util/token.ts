const getToken = () => {
  const token = localStorage.getItem("token")

  if (token) {
    return token
  } else {
    return null
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