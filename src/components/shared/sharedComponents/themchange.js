export const themeChange = () => {document.addEventListener('DOMContentLoaded', function() {
    const themeChangeElements = document.querySelectorAll('.theme-change');
    const button = document.getElementById('main');
    const darkCheck = document.getElementById('isDark');
    let isDark = darkCheck.classList.contains('dark-theme');

    button.addEventListener('click', function() {
        isDark = !isDark;
        
        themeChangeElements.forEach(element => {
            setTimeout(() => {
                if (isDark) {
                    element.classList.replace('dark-theme', 'light-theme');
                } else {
                    element.classList.replace('light-theme', 'dark-theme');
                }
            }, 500);
        });
    });
});
}


export const themeChangeFooter = () => {document.addEventListener('DOMContentLoaded', function() {
    const themeChangeElements = document.querySelectorAll('.theme-change');
    const button = document.getElementById('main2');
    const darkCheck = document.getElementById('isDark');
    let isDark = darkCheck.classList.contains('dark-theme');

    button.addEventListener('click', function() {
        isDark = !isDark;
        
        themeChangeElements.forEach(element => {
            setTimeout(() => {
                if (isDark) {
                    element.classList.replace('dark-theme', 'light-theme');
                } else {
                    element.classList.replace('light-theme', 'dark-theme');
                }
            }, 500);
        });
    });
});
}


