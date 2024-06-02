// Switch funciton 
const switchTheme = ( ) => {
    // Get root element and the data theme value
    const rootElem = document.documentElement
    let dataTheme = rootElem.getAttribute('data-theme'),
        newTheme
    
    
    // if statement with ternary operator setting the value of newTheme accordingly
    newTheme = (dataTheme === 'light') ? 'dark' : 'light'

    rootElem.setAttribute('data-theme', newTheme)

    // Set new local storage item 
    localStorage.setItem('theme' , newTheme)
}

// Add event listener for the theme switcher button
document.querySelectorAll('#theme-switcher').forEach(switcher => {
    switcher.addEventListener('click', switchTheme);
});

let lastScrollTop = 0;
        const navbar = document.querySelector('.custom-navbar-bottom');
    
        window.addEventListener('scroll', function() {
            const currentScroll = window.scrollY || document.documentElement.scrollTop;
    
            if (currentScroll > lastScrollTop) {
                // Scrolling down
                navbar.classList.add('hidden');
            } else {
                // Scrolling up
                navbar.classList.remove('hidden');
            }
    
            lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // For Mobile or negative scrolling
        });