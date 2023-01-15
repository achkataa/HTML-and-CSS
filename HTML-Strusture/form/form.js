function passChange() {
    let iconEl = document.getElementById('icon');
    let buttonEl = document.getElementById('button');
    console.log(buttonEl)

    const iconElOnClickHandler = function() {
        let el = document.getElementById('pass');

        if (el.value != '') {
            if (el.getAttribute('type') == 'password') {
                el.setAttribute('type', 'text');
            } else {
                el.setAttribute('type', 'password');
            }
        }

    }

    const buttonOnClickHandler = function() {
        let usernameEl = document.getElementById('username');
        let h1El = document.getElementById('logo')
        let usernameInfo = usernameEl.value;

        if (usernameInfo != '') {
            h1El.textContent = `Hello ${usernameInfo}`
        }
        
    }
    
    iconEl.addEventListener('click', iconElOnClickHandler);
    buttonEl.addEventListener('click', buttonOnClickHandler);
}