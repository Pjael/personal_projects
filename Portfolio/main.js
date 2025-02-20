// whenever you leave a review in the footer of the contact page there is pop up
const rate = document.getElementById('click'); 

rate.addEventListener(
    'click', (event)=> alert('Thank you for your feeback !'));


//light and dark mode switch
let darkmode = localStorage.getItem('darkmode')
const themeSwitch = document.getElementById('theme-switch')

const enableDarkmode = () => {
    document.body.classList.add('darkmode')
    localStorage.setItem('darkmode', 'active')
}

const disableDarkmode = () => {
    document.body.classList.remove('darkmode')
    localStorage.removeItem('darkmode')
}

if(darkmode === "active") enableDarkmode()

//if you click the dark mode comes on and if not  it removes darkmode
themeSwitch.addEventListener('click', () => {
    darkmode = localStorage.getItem('darkmode')
    if(darkmode !== 'active') {
        enableDarkmode()
    }
    else {
        disableDarkmode()
    }
})