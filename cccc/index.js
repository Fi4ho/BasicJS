import fs from "fs";
fs.writeFileSync("user_info.txt",  "Bob Bobski is the best student in school");
const books = 
[
    {id: 1, title: 'Book Title 1', author: 'Book Author 1', genre: 'Book Genre 1'},
    {id: 2, title: 'Book Title 2', author: 'Book Author 2', genre: 'Book Genre 2'},
    {id: 3, title: 'Book Title 3', author: 'Book Author 3', genre: 'Book Genre 3'}
]
const booksData = JSON.stringify(books, null, 2);


fs.writeFile('booksData.txt', booksData, (err) => {
  if (err) {
    console.error('Error writing file:', err);
    return;
  }
  console.log('Books data has been saved to booksData.txt');
});
