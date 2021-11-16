function showIhfo() {
    Swal.fire({
        title: 'Таня Иванова',
        width: 300,
        padding: '2em',
        text: 'username@mail.com',
        imageUrl: '/assets/images/header/user.png',
        imageWidth: 100,
        imageAlt: 'user image',
    })
}
document.getElementById("user").onclick = showIhfo;