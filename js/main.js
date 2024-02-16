
if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
   
    navigator.mediaDevices.getUserMedia({ video: true })
      .then(function(stream) {
    
        var videoElement = document.getElementById('videoElement');
        videoElement.srcObject = stream;
      })
      .catch(function(error) {
        console.error('Erro ao acessar a câmera web: ', error);
      });
  } else {
    console.error('A API de Mídia não é suportada neste navegador.');
  }