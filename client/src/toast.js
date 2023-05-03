import Toastify from 'toastify-js'

export function showToast(text) {
    Toastify({
        text: text,
        duration: 1500
    }).showToast();
}
