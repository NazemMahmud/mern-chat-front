export const getAccessToken = localStorage.getItem('accessToken') || ''
export const getUserData = () => {
    const userData = localStorage.getItem('userData') || ''
    return userData ? JSON.parse(userData) : {}
}
