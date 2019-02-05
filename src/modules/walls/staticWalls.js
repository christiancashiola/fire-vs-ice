export default () => {

  const canvas = document.querySelector('#green-backdrop');
  const ctx = canvas.getContext('2d');
  let img = new Image();
  img.src = '../../../public/gameImages/walls/wall.png';

  img.addEventListener('load', () => {
    let y = 0, i = 0, x;
    while (i < 43) {
      if (i > 20) {
        x = (i % 21) * 50;
        y = 500;
      } else {
        x = i * 50;
      }

      ctx.drawImage(img, x, y);
      i++;
    }

    x = 0;
    i = 0;
    while (i < 19) {
      if (i > 8) {
        x = 1000;
        y = (i % 9) * 50 + 50;
      } else {
        y = i * 50 + 50;
      }

      ctx.drawImage(img, x, y);
      i++;
    }

    y = 100;
    i = 0;
    let divisor = 9;
    while (i < 36) {
      if (i % 10 === divisor) {
        divisor--;
        y += 100;
      } 
      
      x = (i % 9) * 100 + 100;
      ctx.drawImage(img, x, y);
      i++;
    }
  });
}
