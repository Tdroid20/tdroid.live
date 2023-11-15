const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
    const appendAlert = (message, type) => {
        const wrapper = document.createElement('div')
        wrapper.innerHTML = [
            `<div class="alert alert-${type} alert-dismissible" role="alert">`,
            `   <div>${message}</div>`,
            '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
            '</div>'
        ].join('')

        alertPlaceholder.append(wrapper)
    }

const alertTrigger = document.getElementsByClassName('about_header_list_text')[0]
if (alertTrigger) {
    alertTrigger.addEventListener('click', () => {
        console.log("test")
        appendAlert('Nice, you triggered this alert message! <3', 'success')
    })
}

function showAlert(element) {
    element.addEventListener('click', () => {
        console.log("test")
        appendAlert('Nice, you triggered this alert message! <3', 'success')
    })
}
let test = 'aaa'