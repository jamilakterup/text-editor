
const textArea = document.getElementById('area');
function changeStyle(value) {
    textArea.classList.toggle(value);
}

document.getElementById('bold').addEventListener('click', () => {
    changeStyle('bold');
});

document.getElementById('italic').addEventListener('click', () => {
    changeStyle('italic')
});

document.getElementById('underline').addEventListener('click', () => {
    changeStyle('underline');
});

// text alignment-------------

function textAlign(id1, id2, id3, id4) {
    textArea.classList.add(id1);
    textArea.classList.remove(id2);
    textArea.classList.remove(id3);
    textArea.classList.remove(id4);
}

document.getElementById('left').addEventListener('click', () => {
    textAlign('left', 'right', 'center', 'justify')
});
document.getElementById('right').addEventListener('click', () => {
    textAlign('right', 'left', 'center', 'justify')
});
document.getElementById('center').addEventListener('click', () => {
    textAlign('center', 'right', 'left', 'justify')
});
document.getElementById('justify').addEventListener('click', () => {
    textAlign('justify', 'right', 'center', 'left')
});


// last section style------------

document.getElementById('font').addEventListener('click', () => {
    textArea.classList.toggle('font');
});


document.getElementById('range').addEventListener('click', (e) => {
    const value = e.target.value;
    textArea.style.fontSize = value + 'px';
});

document.getElementById('color').addEventListener('change', (e) => {
    const textColor = e.target.value;
    textArea.style.color = textColor;
});