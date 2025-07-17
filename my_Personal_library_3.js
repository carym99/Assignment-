const books = [
{title: 'things fall apart', descr: 'an african story', noOfpages: 54, author: 'Chinua Achebe',reading: true},
{title: 'Purple Hibiscus', descr: 'A Nigerian family drama', noOfpages: 312, author: 'Chimamanda Ngozi Adichie',
  reading: false},
{title: 'The Alchemist', descr: 'A journey of self-discovery', noOfpages: 208, author: 'Paulo Coelho',reading: false
  }];

// Loop through the array
for (let i = 0; i < books.length; i++) {
  if (books[i].reading === true) {
    console.log(books[i]);
  }
}