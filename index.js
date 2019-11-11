console.log(location.href);
console.log(location.hash);

function change_hash() {
    location.hash = '#anchor01';
    console.log(location.href);
    console.log(location.hash);
}
function display_message() {
    console.log('Hash part in URL is changed');
}
setTimeout(change_hash, 2000);
window.onhashchange = display_message;