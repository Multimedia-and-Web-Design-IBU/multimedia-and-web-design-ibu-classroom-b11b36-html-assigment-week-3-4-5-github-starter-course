
// To prevent errors I've commented out the exercises one by one. If you want to test them, just uncomment the relevant section.





// =======================================================Week 8 ===============================================




// //exercise 1.1 done in the browser console:

// // An array is an ordered list of values 
// const fruits = ["apple", "banana", "cherry", "date"]; 

// // Access items by index (counting starts at 0) 
// console.log(fruits[0]); // "apple" 
// console.log(fruits[2]); // "cherry" 
// console.log(fruits.length); // 4 

// //Change an item
// fruits[1] = "blueberry"; 
// console.log(fruits); // ["apple", "blueberry", "cherry", "date"] 

// // Last item (using length - 1) 
// console.log(fruits[fruits.length - 1]); // "date"









// //exercise 1.2 
// const scores = [85, 92, 78]; 

// // push() adds one or more items to the END 
// scores.push(95); 
// console.log(scores); // [85, 92, 78, 95] 

// // pop() removes and returns the LAST item 
// const removed = scores.pop(); 
// console.log(removed); // 95

// console.log(scores); // [85, 92, 78] 
 
// // unshift() adds to the FRONT 
// scores.unshift(70); 
// console.log(scores); // [70, 85, 92, 78] 

// // shift() removes from the FRONT scores.shift(); 
// console.log(scores); // [85, 92, 78]










// //exercise 1.3
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

// // map() transforms every item and returns a NEW array
// const doubled = numbers.map(n => n * 2); 
// console.log(doubled); // [2, 4, 6, 8, 10, 12, 14, 16]

// // filter() keeps only items where the function returns true
// const evens = numbers.filter(n => n % 2 === 0); 
// console.log(evens); // [2, 4, 6, 8]

// // find() returns the FIRST item where the function returns true
// const firstBig = numbers.find(n => n > 5); 
// console.log(firstBig); // 6

// // Chain them: get the doubled values of even numbers only 
// const result = numbers.filter(n => n % 2 === 0).map(n => n * 2); 
// console.log(result); // [4, 8, 12, 16]










// //Solo Exercise 1.4 
// const scores = [42, 78, 55, 91, 63, 88, 34, 70, 95, 60];

// // 1. Total number of scores
// console.log("Total scores:", scores.length);

// // 2. Scores >= 70 (pass)
// const pass = scores.filter(score => score >= 70);
// console.log("Passing scores:", pass);

// // 3. Scores < 70 (fail)
// const fail = scores.filter(score => score < 70);
// console.log("Failing scores:", fail);

// // 4. Scaled scores (+5%)
// const scaled = scores.map(score => Math.round(score * 1.05));
// console.log("Scaled scores:", scaled);

// // 5. First score above 90
// const firstAbove90 = scores.find(score => score > 90);
// console.log("First score above 90:", firstAbove90);

// // Bonus: Average using reduce
// // reduce() takes an array and reduces it to a single value
// // acc = accumulator; initially set to 0; score = current item in the array
// const sum = scores.reduce((acc, score) => acc + score, 0);
// const average = sum / scores.length;
// console.log("Average score:", average);













// // Objects
// // exercise 2.1
// // An object groups related properties together 
// const student = { 
//     name: "Alex", 
//     age: 20, 
//     city: "Skopje", 
//     isEnrolled: true 
// };

// // Access properties with dot notation 
// console.log(student.name); // "Alex" 
// console.log(student.age); // 20

// // Access with bracket notation (useful when key is dynamic) 
// const key = "city"; 
// console.log(student[key]); // "Skopje"

// // Add or update properties 
// student.grade = "A"; 
// student.age = 21; 
// console.log(student);











// //exercise 2.2
// const rectangle = {
//   width: 10,
//   height: 5,

//   // A method is a function stored as a property
//   area: function () {
//     return this.width * this.height;
//   },

//   // Modern shorthand method syntax
//   perimeter() {
//     return 2 * (this.width + this.height);
//   },

//   describe() {
//     return `Rectangle: ${this.width} × ${this.height}, area = ${this.area()}`;
//   }
// };

// console.log(rectangle.area());        // 50
// console.log(rectangle.perimeter());   // 30
// console.log(rectangle.describe());    // "Rectangle: 10 × 5, area = 50"











// //exercise 2.3 - array of objects
// const products = [
//   { id: 1, name: "Laptop", price: 999, inStock: true },
//   { id: 2, name: "Mouse", price: 29, inStock: true },
//   { id: 3, name: "Monitor", price: 349, inStock: false },
//   { id: 4, name: "Keyboard", price: 79, inStock: true }
// ];

// // Get all in-stock items
// const available = products.filter(p => p.inStock);
// console.log(available);
// console.log(available.length); // 3

// // Get just the names
// const names = products.map(p => p.name);
// console.log(names); // ["Laptop", "Mouse", "Monitor", "Keyboard"]

// // Find a specific product by id
// const laptop = products.find(p => p.id === 1);
// console.log(laptop.name); // "Laptop"












// // solo exercise 2.4
// const library = [
//   {
//     title: "1984",
//     author: "George Orwell",
//     year: 1949,
//     available: true,

//     // Bonus method
//     summary() {
//       return `${this.title} by ${this.author} (${this.year})`;
//     }
//   },
//   {
//     title: "To Kill a Mockingbird",
//     author: "Harper Lee",
//     year: 1960,
//     available: true
//   },
//   {
//     title: "The Great Gatsby",
//     author: "F. Scott Fitzgerald",
//     year: 1925,
//     available: false
//   },
//   {
//     title: "Moby Dick",
//     author: "Herman Melville",
//     year: 1851,
//     available: true
//   }
// ];

// // 1. Log the title of the first book
// console.log(library[0].title); // "1984"

// // 2. Filter available books
// const availableBooks = library.filter(book => book.available);
// console.log(availableBooks);

// // 3. Map to string
// const formatted = library.map(
//   book => `${book.title} by ${book.author} (${book.year})`
// );
// console.log(formatted);

// // 4. Add a new book
// library.push({
//   title: "Pride and Prejudice",
//   author: "Jane Austen",
//   year: 1813,
//   available: true
// });
// console.log(library);

// // 5. Find a book by title
// const foundBook = library.find(book => book.title === "1984");
// console.log(foundBook);

// // Bonus: use the summary method
// console.log(library[0].summary()); // "1984 by George Orwell (1949)"





















// //DOM Manipulation
// //exercise 3.1
// // Select a single element by its id
// const title = document.getElementById("title");
// console.log(title); 
// // the <h1> element
// console.log(title.textContent); 
// // "Hello"

// // querySelector works like a CSS selector
// const btn = document.querySelector("#btn");
// const firstLi = document.querySelector("li"); 
// // first <li> on the page
// console.log(firstLi);

// // querySelectorAll returns ALL matching elements (a NodeList)
// const allParagraphs = document.querySelectorAll("p");
// console.log(allParagraphs);


















// // ecercise 3.2
// // Select the element by its id
// const title = document.getElementById("title");

// // Change the visible text
// title.textContent = "Welcome to JavaScript!";

// // Change inline CSS styles
// title.style.color = "blue";
// title.style.fontSize = "2rem";

// // Add or remove CSS classes
// title.classList.add("highlight");
// title.classList.remove("highlight");
// title.classList.toggle("active"); 
// // adds if absent, removes if present

// // Change an attribute
// const link = document.querySelector("a");

// if (link) {
//   link.setAttribute("href", "https://example.com");
// }



















// //exercise 3.3
// // Build a list dynamically from an array
// const fruits = ["Apple", "Banana", "Cherry"];
// const list = document.getElementById("list");

// fruits.forEach(fruit => {
//   // 1. Create a new <li> element
//   const item = document.createElement("li");

//   // 2. Set its text
//   item.textContent = fruit;

//   // 3. Append it to the <ul>
//   list.appendChild(item);
// });

// // innerHTML lets you set HTML directly (use carefully)
// const output = document.getElementById("output");
// output.innerHTML = "<strong>List built!</strong> 3 items added.";













// // solo exercise 3.4
// const products = [
//   { name: "Laptop", price: 999 },
//   { name: "Mouse", price: 29 },
//   { name: "Keyboard", price: 79 }
// ];

// // 1. Select the <ul id="list">
// const list = document.getElementById("list");

// // 5. Change the <h1> text
// const title = document.getElementById("title");
// title.textContent = "Product Catalogue";

// // 2. Loop through products
// products.forEach(product => {
//   // 3. Create <li> element
//   const item = document.createElement("li");

//   // Set text using template literal
//   item.textContent = `${product.name} — $${product.price}`;

//   // 4. Append to list
//   list.appendChild(item);

//   // Bonus: style expensive products
//   if (product.price > 500) {
//     item.style.color = "red";
//   }
// });


















// //EVENTS
// //exercise 4.1
// const btn = document.getElementById("btn");
// // const output = document.getElementById("output");

// let clickCount = 0;

// // addEventListener(eventName, callbackFunction)
// btn.addEventListener("click", function () {
//   clickCount++;

//   output.textContent = `Button clicked ${clickCount} time(s).`;
// });

// // Arrow function syntax (preferred)
// btn.addEventListener("click", () => {
//   btn.style.backgroundColor = "green";
//   btn.textContent = "Clicked!";
// });

















// //exercise 4.2
// const search = document.getElementById("search");
// const output = document.getElementById("output");

// // 'input' fires on every keystroke
// search.addEventListener("input", (event) => {
//   // event.target is the element that triggered the event
//   const typed = event.target.value;

//   output.textContent = `You typed: "${typed}" (${typed.length} chars)`;
// });

// // 'keydown' fires when any key is pressed
// search.addEventListener("keydown", (event) => {
//   if (event.key === "Enter") {
//     output.textContent = `Searched for: "${search.value}"`;
//     search.value = ""; // clear the input
//   }
// });


















// // exercise 4.3
// // const list = document.getElementById("list");

// // One listener on the parent handles clicks on any child
// list.addEventListener("click", (event) => {
//   // event.target is the actual element that was clicked
//   if (event.target.tagName === "LI") {
//     event.target.style.textDecoration = "line-through";
//     event.target.style.color = "grey";
//   }
// });




















// //solo exercise 4.4
// const taskInput = document.getElementById("taskInput");
// const addBtn = document.getElementById("addBtn");
// const tasks = document.getElementById("tasks");

// // 1–4: Add task on button click
// addBtn.addEventListener("click", () => {
//   const value = taskInput.value.trim();

//   // Do nothing if input is empty
//   if (value === "") return;

//   // 2. Create <li> and append
//   const li = document.createElement("li");
//   li.textContent = value;
//   tasks.appendChild(li);

//   // 3. Clear input
//   taskInput.value = "";
// });

// // 5. Event delegation: mark task as done
// tasks.addEventListener("click", (event) => {
//   if (event.target.tagName === "LI") {
//     event.target.style.textDecoration = "line-through";
//   }
// });

// // Bonus: Enter key adds task
// taskInput.addEventListener("keydown", (event) => {
//   if (event.key === "Enter") {
//     addBtn.click();
//   }
// });













// //Fetch API
// //exercise 5.1
// // fetch() returns a Promise — it does not block the rest of your code
// fetch("https://jsonplaceholder.typicode.com/todos/1")
//   .then(response => response.json()) // parse the response as JSON
//   .then(data => {
//     console.log(data);
//     // { userId: 1, id: 1, title: "...", completed: false }
//   })
//   .catch(error => {
//     console.error("Something went wrong:", error);
//   });














//   //exercise 5.2
//   async function loadUser(id) {
//   try {
//     const response = await fetch(
//       `https://jsonplaceholder.typicode.com/users/${id}`
//     );

//     const user = await response.json();

//     console.log(user.name); // "Leanne Graham"
//     console.log(user.email); // "Sincere@april.biz"
//     console.log(user.address.city); // "Gwenborough"
//   } catch (error) {
//     console.error("Failed to load user:", error);
//   }
// }
// loadUser(1);













// // exercise 5.3
// async function loadPosts() {
//   const list = document.getElementById("list");

//   list.innerHTML = "<li>Loading...</li>";

//   try {
//     const response = await fetch(
//       "https://jsonplaceholder.typicode.com/posts?_limit=5"
//     );

//     const posts = await response.json(); // posts is an array of objects

//     list.innerHTML = ""; // clear loading message

//     posts.forEach(post => {
//       const item = document.createElement("li");
//       item.textContent = post.title;
//       list.appendChild(item);
//     });

//     document.getElementById("title").textContent =
//       `Loaded ${posts.length} posts`;

//   } catch (error) {
//     list.innerHTML = "<li>Error loading posts.</li>";
//   }
// }
// loadPosts();
























// //solo exercise 5.4
// async function showUsers() {
//   const list = document.getElementById("list");
//   const title = document.getElementById("title");

//   list.innerHTML = "<li>Loading...</li>";

//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     const users = await response.json(); // array of 10 users

//     list.innerHTML = ""; // clear loading text

//     users.forEach(user => {
//       const li = document.createElement("li");
//       li.textContent = `${user.name} — ${user.email}`;
//       list.appendChild(li);
//     });

//     title.textContent = `${users.length} Users Loaded`;

//   } catch (error) {
//     list.innerHTML = "<li>Error loading users.</li>";
//   }
// }

// // Bonus: load on button click
// const btn = document.getElementById("btn");
// btn.textContent = "Load Users";
// btn.addEventListener("click", showUsers);













//What is the difference between map() and filter()? Give an example of when you would use each.
// map() transforms every item in an array and returns a NEW array of the same length.
// filter() keeps only the items where the function returns true and returns a NEW array that may be shorter than the original.

//In your own words, what is the DOM and why do we need JavaScript to interact with it?
// The DOM (Document Object Model) is a programming interface for HTML and XML documents. It represents the page as a tree of objects that can be manipulated with JavaScript. We need JavaScript to interact with the DOM because it allows us to dynamically change the content, structure, and style of a webpage in response to user actions or other events.

// What does async mean, and why does JavaScript need asynchronous code at all?
// async is a keyword that allows us to write asynchronous code in a more readable way using await. JavaScript needs asynchronous code because many operations (like fetching data from a server) take time to complete, and we don't want to block the entire program while waiting for those operations. Asynchronous code allows other parts of the program to run while waiting for long-running tasks to finish.

// Write one thing that confused you today and bring it to the next class.
// I found the concept of event delegation a bit confusing at first, but after seeing it in action, it makes sense how it allows us to handle events more efficiently by attaching a single listener to a parent element instead of multiple listeners to each child element.



















// ======================================================Week 9 ===============================================






// // exercise 6.1
// async function safeGet(url) {
//   try {
//     const response = await fetch(url);

//     // response.ok is true for status codes 200–299
//     if (!response.ok) {
//       throw new Error(`HTTP error: ${response.status} ${response.statusText}`);
//     }

//     const data = await response.json();
//     return data;

//   } catch (error) {
//     console.error("Request failed:", error.message);
//     return null; // return null so the caller can check
//   }
// }

// async function runTests() {
//   // Test with a valid URL
//   const user = await safeGet(
//     "https://jsonplaceholder.typicode.com/users/1"
//   );

//   if (user) console.log(user.name);

//   // Test with a bad URL
//   const missing = await safeGet(
//     "https://jsonplaceholder.typicode.com/users/9999"
//   );

//   console.log(missing);
// }

// runTests();

















// // exercise 6.2
// async function createPost(title, body) {
//   const response = await fetch(
//     "https://jsonplaceholder.typicode.com/posts",
//     {
//       method: "POST", // HTTP method

//       headers: {
//         "Content-Type": "application/json" // tell server what we are sending
//       },

//       body: JSON.stringify({
//         // convert JS object → JSON string
//         title: title,
//         body: body,
//         userId: 1
//       })
//     }
//   );

//   if (!response.ok) throw new Error(`Failed: ${response.status}`);

//   const newPost = await response.json();

//   console.log("Created post with id:", newPost.id);
//   // JSONPlaceholder returns id: 101 (simulated)

//   return newPost;
// }

// createPost("My First Post", "This is the content.");



















// //Exercise 6.3
// async function loadDashboard() {
//   const BASE = "https://jsonplaceholder.typicode.com";

//   // Start all three requests at the same time
//   const [usersRes, postsRes, todosRes] = await Promise.all([
//     fetch(`${BASE}/users`),
//     fetch(`${BASE}/posts?_limit=10`),
//     fetch(`${BASE}/todos?_limit=5`)
//   ]);

//   // Parse all three responses
//   const [users, posts, todos] = await Promise.all([
//     usersRes.json(),
//     postsRes.json(),
//     todosRes.json()
//   ]);

//   console.log(`Users: ${users.length}`); // 10
//   console.log(`Posts: ${posts.length}`); // 10
//   console.log(`Todos: ${todos.length}`); // 5

//   return { users, posts, todos };
// }
// loadDashboard();
















// // exercise 6.4
// let allPosts = []; // cache fetched data

// async function initSearch() {
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//   allPosts = await res.json(); // store 100 posts in memory

//   renderResults(allPosts);
// }

// function renderResults(posts) {
//   const list = document.getElementById("results");
//   list.innerHTML = "";

//   posts.slice(0, 10).forEach(post => {
//     const li = document.createElement("li");
//     li.textContent = post.title;
//     list.appendChild(li);
//   });
// }

// document
//   .getElementById("searchBox")
//   .addEventListener("input", (e) => {
//     const query = e.target.value.toLowerCase();

//     const filtered = allPosts.filter(p =>
//       p.title.toLowerCase().includes(query)
//     );

//     renderResults(filtered);
//   });

// initSearch();
















// // solo exercise 6.5
// async function loadComments(postId) {
//   const list = document.getElementById("list");
//   const title = document.getElementById("title");

//   list.innerHTML = "<li>Loading...</li>";

//   try {
//     const response = await fetch(
//       `https://jsonplaceholder.typicode.com/comments?postId=${postId}`
//     );

//     if (!response.ok) {
//       throw new Error(`HTTP error: ${response.status}`);
//     }

//     const comments = await response.json();

//     list.innerHTML = "";

//     comments.forEach(comment => {
//       const li = document.createElement("li");
//       li.textContent = `${comment.name} — ${comment.email}`;
//       list.appendChild(li);
//     });

//     title.textContent = `${comments.length} comments loaded`;

//   } catch (error) {
//     list.innerHTML = "<li>Error loading comments.</li>";
//   }
// }

// // Load postId 1 on page load
// loadComments(1);

// // Bonus: buttons
// document.getElementById("post1").addEventListener("click", () => loadComments(1));
// document.getElementById("post2").addEventListener("click", () => loadComments(2));
// document.getElementById("post3").addEventListener("click", () => loadComments(3));














// //Block 7 DOM Deep Dive
// //  exercise 7.1
// const list = document.getElementById("list");

// // Children
// console.log(list.children); // HTMLCollection of <li> elements
// console.log(list.firstElementChild); // first <li>
// console.log(list.lastElementChild); // last <li>
// console.log(list.children.length); // number of items

// // Parent
// const item = list.firstElementChild;
// console.log(item.parentElement); // the <ul>
// console.log(item.parentElement.id); // "list"

// // Siblings
// console.log(item.nextElementSibling); // second <li>
// console.log(item.previousElementSibling); // null (it is first)

// // Remove an element
// list.lastElementChild.remove(); // deletes last <li>

// // Insert before a specific child
// const newItem = document.createElement("li");
// newItem.textContent = "Inserted first";
// list.insertBefore(newItem, list.firstElementChild);
// console.log(list.firstElementChild); // <li>Inserted first</li>
















// // exercise 7.2
// // Example HTML you might generate dynamically:
// // <li data-id="3" data-price="999" data-category="electronics">Laptop</li>
// const list = document.getElementById("list");

// const product = {
//   id: 3,
//   price: 999,
//   category: "electronics",
//   name: "Laptop"
// };

// const li = document.createElement("li");

// // Setting data attributes
// li.dataset.id = product.id;
// li.dataset.price = product.price;
// li.dataset.category = product.category;

// li.textContent = product.name;

// list.appendChild(li);

// // Reading data attributes
// const item = document.querySelector("li");

// console.log(item.dataset.id);        // "3" (always a string)
// console.log(item.dataset.price);     // "999"
// console.log(Number(item.dataset.price)); // 999 (converted to number)

// // Setting data attributes
// item.dataset.status = "selected";
// // Now the element has: data-status="selected"

// // Practical example: click a list item to log its id
// document.getElementById("list")
//   .addEventListener("click", (e) => {
//     if (e.target.tagName === "LI") {
//       const id = e.target.dataset.id;
//       console.log("Clicked item id:", id);
//     }
// });



















// // exercise 7.3
// // A function that creates and returns a DOM element
// function createUserCard(user) {
//   const card = document.createElement("div");
//   card.className = "card";

//   // Store user ID as a data attribute
//   card.dataset.userId = user.id;

//   const name = document.createElement("h3");
//   name.textContent = user.name;

//   const email = document.createElement("p");
//   email.textContent = user.email;

//   const city = document.createElement("p");
//   city.textContent = `City: ${user.address.city}`;

//   card.appendChild(name);
//   card.appendChild(email);
//   card.appendChild(city);

//   // return the element, don't append yet
//   return card;
// }

// async function renderUserCards() {
//   const container = document.getElementById("cards");

//   const res = await fetch("https://jsonplaceholder.typicode.com/users");
//   const users = await res.json();

//   users.forEach(user => {
//     const card = createUserCard(user);
//     container.appendChild(card);
//   });
// }

// renderUserCards();
















// // exercise 7.4
// async function loadStats() {
//   // Show loading state immediately
//   document.getElementById("title").textContent = "Loading stats...";
//   document.getElementById("output").textContent = "";

//   const [users, posts, todos] = await Promise.all([
//     fetch("https://jsonplaceholder.typicode.com/users").then(r => r.json()),
//     fetch("https://jsonplaceholder.typicode.com/posts").then(r => r.json()),
//     fetch("https://jsonplaceholder.typicode.com/todos").then(r => r.json())
//   ]);

//   // Update the DOM with real data
//   document.getElementById("title").textContent = "API Dashboard";

//   const stats = [
//     `Users: ${users.length}`,
//     `Posts: ${posts.length}`,
//     `Todos: ${todos.length}`,
//     `Done: ${todos.filter(t => t.completed).length}`
//   ];

//   const list = document.getElementById("list");
//   list.innerHTML = "";

//   stats.forEach(stat => {
//     const li = document.createElement("li");
//     li.textContent = stat;
//     list.appendChild(li);
//   });
// }

// loadStats();


















// // solo exercise 7.5 interactive photo gallery
// async function loadPhotos() {
//   const title = document.querySelector("h1");
//   const list = document.getElementById("list");
//   const output = document.getElementById("output");

//   // 1. Fetch photos from albumId 1
//   const res = await fetch("https://jsonplaceholder.typicode.com/photos?albumId=1");
//   const photos = await res.json();

//   // 5. Update title
//   title.textContent = `Album 1 — ${photos.length} Photos`;

//   // Clear old content
//   list.innerHTML = "";
//   output.innerHTML = "";

//   // 2 + 3. Create <li> for each photo and add data-url
//   photos.forEach(photo => {
//     const li = document.createElement("li");

//     li.textContent = photo.title;
//     // li.dataset.url = photo.thumbnailUrl;
//     li.dataset.url = `https://picsum.photos/seed/${photo.id}/150`;
//     list.appendChild(li);
//   });

//   // 4 + Bonus: Event delegation
//   list.addEventListener("click", (e) => {
//     if (e.target.tagName === "LI") {
//       const url = e.target.dataset.url;

//       // Log URL
//       console.log("Thumbnail URL:", url);

//       // Bonus: show image instead of only logging
//       const img = document.createElement("img");
//       img.src = url;
//       img.alt = "thumbnail";

//       output.appendChild(img);
//     }
//   });
// }

// loadPhotos();























// //Block 8 JSON & API requests/responses

// //exercise 8.1
// // ── A JavaScript object (lives in memory) ──────────────────
// const user = {
//   name: "Ana",
//   age: 22,
//   skills: ["HTML", "CSS", "JavaScript"],
//   address: {
//     city: "Skopje",
//     country: "MK"
//   }
// };

// // ── Converting JS → JSON string (for sending to a server) ──
// const jsonString = JSON.stringify(user);

// console.log(jsonString);
// // '{"name":"Ana","age":22,"skills":["HTML","CSS","JavaScript"],
// // "address":{"city":"Skopje","country":"MK"}}'

// // Pretty-print with indentation (useful for debugging)
// console.log(JSON.stringify(user, null, 2));

// // ── Converting JSON string → JS object (after receiving data) ──
// const received = '{"id":1,"title":"Hello","done":false}';
// const parsed = JSON.parse(received);

// console.log(parsed.title); // "Hello"
// console.log(parsed.done);  // false (boolean, not string)

// // ── Key difference: JSON keys MUST use double quotes ────────
// // Valid JSON: {"name": "Ana"}
// // Invalid JSON: {name: 'Ana'} ← no quotes on key, single quotes

















// //exercise 8.2
// async function inspectResponse() {
//   const response = await fetch(
//     "https://jsonplaceholder.typicode.com/posts/1"
//   );

//   // ── Response metadata ──────────────────────────────────
//   console.log(response.status);        // 200
//   console.log(response.statusText);    // "OK"
//   console.log(response.ok);            // true (200–299 range)
//   console.log(response.url);           // full URL that was fetched

//   console.log(
//     response.headers.get("content-type")
//   ); // "application/json; charset=utf-8"

//   // ── Response body ───────────────────────────────────────
//   // .json() reads the body stream and parses it as JSON
//   const data = await response.json();

//   console.log(data);
//   // { userId: 1, id: 1, title: "sunt aut facere...", body: "..." }
// }

// inspectResponse();




















// // exercise 8.4
// // ── Query parameters (appended to the URL) ─────────────────

// // ?_limit=5 tells the server to return only 5 items
// // &userId=1 filters to posts by user 1

// async function run() {
//   // ── Query parameters ─────────────────

//   const url =
//     "https://jsonplaceholder.typicode.com/posts?_limit=5&userId=1";

//   const params = new URLSearchParams({
//     _limit: 5,
//     userId: 1
//   });

//   const safeUrl =
//     `https://jsonplaceholder.typicode.com/posts?${params}`;

//   console.log(safeUrl);

//   // ── Authorization header ───────────────

//   const API_TOKEN = "your-token-here";

//   const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
//     method: "GET",
//     headers: {
//       "Authorization": `Bearer ${API_TOKEN}`,
//       "Content-Type": "application/json",
//       "Accept": "application/json"
//     }
//   });

//   // ── POST request ───────────────

//   const newComment = await fetch(
//     "https://jsonplaceholder.typicode.com/comments",
//     {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify({
//         postId: 1,
//         name: "Ana",
//         email: "ana@example.com",
//         body: "Great post!"
//       })
//     }
//   );

//   const created = await newComment.json();

//   console.log("New comment id:", created.id);
// }

// run();






























//solo exercise 8.5
async function exploreAPI() {
  const list = document.getElementById("list");

  // ── Build URL with URLSearchParams (bonus) ───────────────
  const params = new URLSearchParams({
    fields: "name,capital,population"
  });

  const url = `https://restcountries.com/v3.1/region/europe?${params}`;

  console.log("Request URL:", url);

  try {
    const response = await fetch(url);

    // ── Check response validity ───────────────────────────
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    // ── Log response metadata ─────────────────────────────
    console.log("Status:", response.status);
    console.log(
      "Content-Type:",
      response.headers.get("content-type")
    );

    // ── Parse JSON ────────────────────────────────────────
    const data = await response.json();

    console.log("Countries returned:", data.length);

    // ── Filter population > 5M ────────────────────────────
    const filtered = data.filter(
      country => country.population > 5_000_000
    );

    // ── Extract names ─────────────────────────────────────
    let names = filtered.map(
      country => country.name.common
    );

    // ── Sort alphabetically (bonus) ───────────────────────
    names.sort();

    // ── Render to DOM ──────────────────────────────────────
    list.innerHTML = "";

    names.forEach(name => {
      const li = document.createElement("li");
      li.textContent = name;
      list.appendChild(li);
    });

  } catch (error) {
    console.error("Error fetching countries:", error);
  }
}

exploreAPI();






















// Block 9 Introduction to Frontend Frameworks
// No code for this block, just reading examples of React, Vue, Angular, etc. since I have no setup for them yet. 


// solo exercise 9.5
// 1. State
// The items array (let items = []) is the state because it stores the data that determines what gets displayed.

// 2. Re-render
// The call to renderList() after items.push(text) is the manual re-render, since it rebuilds the UI based on updated data.

// 3. Component
// The renderList() function acts like a component because it is responsible for generating and updating the UI (the <li> elements).

// 4. Props
// The text parameter in addItem(text) behaves like props because it is external input passed into the logic that affects the state.


// Bonus
// import { useState } from "react";

// function ItemList() {
//   const [items, setItems] = useState([]);
//   const [input, setInput] = useState("");

//   function addItem() {
//     if (!input.trim()) return;

//     // update state (instead of push)
//     setItems([...items, input]);

//     setInput("");
//   }

//   return (
//     <div>
//       <input
//         value={input}
//         onChange={(e) => setInput(e.target.value)}
//         placeholder="Add item"
//       />

//       <button onClick={addItem}>Add</button>

//       <ul>
//         {items.map((item, index) => (
//           <li key={index}>{item}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }






















// Final exam prep section C
// Given an array of product objects, write code that uses filter() and map() to return a formatted list of in-stock product names with their prices.

const products = [
  { name: "Laptop", price: 1000, inStock: true },
  { name: "Phone", price: 600, inStock: false },
  { name: "Tablet", price: 400, inStock: true }
];

const result = products
  .filter(product => product.inStock)
  .map(product => `${product.name} - $${product.price}`);

console.log(result);
















// Complete a partially written event listener that reads from a text input, validates it is not empty, creates a new <li> element, and appends it to a <ul>. Handle the Enter key as well as a button click.

const input = document.getElementById("taskInput");
const btn = document.getElementById("addBtn");
const list = document.getElementById("tasks");

function addTask() {
  const value = input.value.trim();
  if (value === "") return;

  const li = document.createElement("li");
  li.textContent = value;

  list.appendChild(li);

  input.value = "";
}

btn.addEventListener("click", addTask);

input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    addTask();
  }
});

















// Write an async function that fetches data from a provided URL, checks response.ok and the HTTP status code, parses the JSON response, uses JSON.stringify to log the raw payload, renders items as a DOM list, and handles fetch failure with an error message in the UI.
async function loadData(url) {
  const output = document.getElementById("output");
  const list = document.getElementById("list");

  // Clear UI first
  output.textContent = "Loading...";
  list.innerHTML = "";

  try {
    const response = await fetch(url);

    console.log("Status:", response.status);

    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }

    const data = await response.json();

    console.log("Raw JSON:");
    console.log(JSON.stringify(data, null, 2));

    output.textContent = "Data loaded successfully";

    data.forEach(item => {
      const li = document.createElement("li");

      li.textContent =li.textContent = item.name;

      list.appendChild(li);
    });

  } catch (error) {
    console.error(error);
    output.textContent = `Error: ${error.message}`;
  }
}
// loadData("https://jsonplaceholder.typicode.com/users");