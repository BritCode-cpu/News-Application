 
 
 
 //These variables contain HTML data such as the 
 //form input text field, form submit button, and 
 //the container div for the news list.

 const searchForm = document.querySelector('.search');
 const input = document.querySelector('.input');
 const newsList = document.querySelector('.news-list');


 //Event Listner: Listen for submit button then save search term as topic.

 searchForm.addEventListener('submit', function(e){
	e.preventDefault(e);
	const apiKey = 'e916685ad20a4ff7a29f47b3cecd3cce';
	let topic = input.value;
	let url = `https://newsapi.org/v2/everything?q=${topic}&from=2022-05-17&to=2022-05-17&sortBy=popularity&apiKey=${apiKey}`

//Fetch data from the url and return Json data
	fetch(url).then((res)=>{
		return res.json()
	}).then((data)=>{
		    //Creat HTML elements, grab data from api
			//and post it to the HTML body

		    data.articles.forEach(article =>{
			let li = document.createElement('li');
			let p = document.createElement('p');
			let a = document.createElement('a');

            a.setAttribute('href', article.url);	
			a.setAttribute('target', '_blank');
			a.textContent = article.title;
			p.textContent = article.description;

            li.appendChild(a);
			li.appendChild(p);
			
			newsList.appendChild(li);
			console.log(data)
			
		});

	}).catch((err)=>{
    //Run code if error occurs 
	});
 });

 

 