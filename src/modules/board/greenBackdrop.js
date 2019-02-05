export default () => {
  const canvas = document.querySelector('#green-backdrop');
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = '#54C86D';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}