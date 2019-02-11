export default () => {
  const canvas = document.querySelector('#green-backdrop');
  if (canvas.getContext) {
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = '#3B8314';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  } else {
  // one time alert in case browser does not support canvas
    alert(
      'Sorry. This games only operates' +
      'on browsers that support HTML canvas.'
    );
  }
}

