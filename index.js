const rs = document.querySelector(":root");
const toggleBtn = document.querySelector("#toggle");


function toggleTheme() {
    let rcs = getComputedStyle(rs);
    if (rcs.getPropertyValue('--primary-color') === 'black') {
        rs.style.setProperty('--secondary-color', '#555555');
        rs.style.setProperty('--extra-color', 'black');
        rs.style.setProperty('--primary-color', 'white');
    }
    else {
        rs.style.setProperty('--secondary-color', '#5050aa');
        rs.style.setProperty('--extra-color', 'white');
        rs.style.setProperty('--primary-color', 'black')
    }
}

//toggleBtn.addEventListener("click", toggleTheme);


