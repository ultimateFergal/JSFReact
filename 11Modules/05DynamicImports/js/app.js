video.addEventListener('click', function () {
    console.log('click')
    this.classList.add('hidden')
    import('./player.js').then(({ player }) => { // destrcturación de elementos en el módulo
        console.log(player)
        setTimeout(() => {
            player.play()
        }, 100)
    })
})