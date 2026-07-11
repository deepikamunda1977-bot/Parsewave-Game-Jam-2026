const player = document.getElementById('player');
let x = 100, y = 100;

document.addEventListener('keydown', (e) => {
    if(e.key === 'ArrowUp') y -= 32;
    if(e.key === 'ArrowDown') y += 32;
    if(e.key === 'ArrowLeft') x -= 32;
    if(e.key === 'ArrowRight') x += 32;
    player.style.top = y + 'px';
    player.style.left = x + 'px';
});