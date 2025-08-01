  // Bloquear clique com o botão direito do mouse
    document.addEventListener('contextmenu', event => event.preventDefault());

    // Bloquear teclas específicas que abrem ferramentas do desenvolvedor
    document.addEventListener('keydown', function (event) {
      // F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U
      if (
        event.key === 'F12' ||
        (event.ctrlKey && event.shiftKey && (event.key === 'I' || event.key === 'J')) ||
        (event.ctrlKey && event.key === 'U')
      ) {
        event.preventDefault();
      }
    });