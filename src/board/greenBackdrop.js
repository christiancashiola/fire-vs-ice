export default () => {
  const canvas = document.querySelector('#green-backdrop');
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = '#3B8314';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}

