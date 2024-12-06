// Función para inicializar un reproductor Video.js
function initializePlayer(playerId) {
    var player = videojs(playerId, {
        autoplay: false,
        controls: true,
        responsive: true,
        fluid: true
    });

    // Manejar errores de reproducción
    player.on('error', function() {
        var error = player.error();
        console.error('Error de reproducción en ' + playerId + ':', error);
        alert('Hubo un error al reproducir el video: ' + error.message);
    });
}

// Inicializar ambos reproductores
initializePlayer('video_player_1');
initializePlayer('video_player_2');
