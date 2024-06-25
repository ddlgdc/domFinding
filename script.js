// 1:
document.getElementById('container');

// 2: 
document.querySelector('#container');

// 3:
document.getElementsByClassName('second');

// 4: 
document.querySelector('ol li.third');

// 5: 
let y = document.getElementById('container');
y.innerText = 'Hello';

// 6:
let x = document.querySelector('.footer');
x.className += 'main';

// 7: 
// let x = document.querySelector('.footer');
x.classList.remove('main');

// 8: 
let newLi = document.createElement('li');

// 9:
newLi.innerText('four');

// 10: 
let list = document.querySelector('ul');
list.appendChild(newLi);

// 11: 
let olElements = document.querySelector('ol li');
for (let i = 0; i < olElements.length; i++){
    olElements[i].style.backgroundColor = 'green';
}

// 12:
let footer = document.querySelector('.footer');
footer.remove();
