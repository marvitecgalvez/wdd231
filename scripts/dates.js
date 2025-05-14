const currentyear = document.querySelector("#currentyear");

const lastModified = document.querySelector("#lastModified");

const today = new Date();


const nowtime = new Date();


currentyear.innerHTML = `${today.getFullYear()}`;



lastModified.innerHTML = document.lastModified;



//////////////////////// Author's Name /////////////////////////////////////////////////

const authorName = document.querySelector('#authorName');

const myName = document.querySelector('#myName');

myName = authorName.getAttribute('content');

myName.innerHTML = document.contains;
