const changeTheme = () => {
    const theme = document.documentElement.getAttribute('data-bs-theme')
    document.documentElement.setAttribute('data-bs-theme', theme === 'dark' ? 'light' : 'dark')
    const button = document.getElementById('mode-button')
    button.className = theme === 'light' ? 'fa-solid fa-sun fa-2x' : 'fa-solid fa-moon fa-2x'
}