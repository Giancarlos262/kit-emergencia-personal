(() => {
  const dialog = document.getElementById('videoDialog');
  const player = document.getElementById('videoPlayer');
  const title = document.getElementById('videoTitle');
  const close = document.getElementById('closeDialog');

  const stopVideo = () => {
    player.pause();
    player.removeAttribute('src');
    player.load();
  };

  document.querySelectorAll('[data-video]').forEach((button) => {
    button.addEventListener('click', () => {
      title.textContent = button.dataset.title || 'Video educativo';
      player.src = button.dataset.video;
      if (typeof dialog.showModal === 'function') {
        dialog.showModal();
      } else {
        dialog.setAttribute('open', '');
      }
      player.play().catch(() => {});
    });
  });

  close.addEventListener('click', () => dialog.close());
  dialog.addEventListener('close', stopVideo);
  dialog.addEventListener('click', (event) => {
    if (event.target === dialog) dialog.close();
  });
})();
