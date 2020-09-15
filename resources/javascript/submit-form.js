const form = document.getElementById('rsvp-form');
const submit = document.getElementById('rsvp-submit');
const button = document.getElementById('submit');

button.onclick = function () {
    form.style.display = 'none';
    submit.style.display = 'block';
}