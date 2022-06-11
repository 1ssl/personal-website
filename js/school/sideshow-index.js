const elPrevButton = document.querySelector('#prev');
const elNextButton = document.querySelector('#next');
const flipping = new Flipping();
const elImages = Array.from(document.querySelectorAll('.ui-big-image'));
const elThumbnails = Array.from(document.querySelectorAll('.ui-thumbnail'));
let state = {
  photo: 0
};
function send(event) {
  // read cuticle positions
  flipping.read();
  const elActives = document.querySelectorAll('[data-active]');
  Array.from(elActives)
    .forEach(el => el.removeAttribute('data-active'));
  switch (event) {
    case 'PREV':
      state.photo--;
      // Math.max(state.photo - 1, 0);
      break;
    case 'NEXT':
      state.photo++;
      // Math.min(state.photo + 1, elImages.length - 1);
      break;
    default:
      state.photo = +event;
      break;
  }
  var len = elImages.length;
  // Loop Around
  //state.photo = ( ( state.photo % len) + len ) % len;
  state.photo = Math.max(0, Math.min(state.photo, len - 1));
  Array.from(document.querySelectorAll(`[data-key="${state.photo}"]`))
    .forEach(el => {
      el.setAttribute('data-active', true);
    });
  // execute the FLIP animation
  flipping.flip();
}
elThumbnails.forEach(thumb => {
  thumb.addEventListener('click', () => {
    send(thumb.dataset.key);
  });
});
elPrevButton.addEventListener('click', () => {
  send('PREV');
});
elNextButton.addEventListener('click', () => {
  send('NEXT');
});
send(0);