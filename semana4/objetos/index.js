// Elements in main page
const postCreateButton = document.querySelector('#criar-post')
const postListIndex = document.querySelector('#lista-posts')
const postPage = document.querySelector('.ver-posts')

// Elements created to navigation
const postContainer = document.createElement('section')
const postListPage = document.createElement('section')
const formPage = document.createElement('button')

// Setting button values
formPage.textContent = 'Voltar para Formulario'
//postPage.textContent = 'Voltar para Posts'
// Hide button on form page
//formPage.style.display = 'none'
//postPage.style.display = 'none'



let postList = []

const createPost = post => {
	console.log({post})
	const {title, author, image, content} = post

	const article = document.createElement('article')

	const articleTitle = document.createElement('h2')
	articleTitle.textContent = title

	const articleAuthor = document.createElement('cite')
	articleAuthor.textContent = author

	const articleImage = document.createElement('img')
	articleImage.src = image
	articleImage.onerror = event => {
		alert('Algumas imagens inseridas são inválidas!\n \
			Vou mudar para um aleatória para não ficar sem...')
		const newImgLink = 'https://picsum.photos/400/300'
		wrongImg = postList.findIndex(post => post.image === articleImage.src)
		console.log({wrongImg})
		//console.log({articleImage.src})
		console.log(articleImage.src)
		//console.log({postList[wrongImg]})
		postList[wrongImg].image = articleImage.src = 'https://picsum.photos/400/300'
	}

	const articleContent = document.createElement('div')
	articleContent.textContent = content

	article.append(articleTitle, articleAuthor, articleImage, articleContent)

	return article
}

const goToPostListPage = posts => {
	for (const post  of posts) {
		const article = createPost(post)
	}
	postContainer.replaceChildren(article)
}

const clearInputs = () => {
	//postTitle.value = postAuthor.value = postImage.value = postContent.value = ''
}

const addPost= event => {
	const formInputs = document.querySelectorAll(
		'.formulario > input, .formulario > textarea'
	)

	const post = {};
	[post.title, post.author, post.image, post.content] = 
		[...formInputs].map(input => input.value)

	for(item in post) {
		if(!post[item]) return
	}

	//const regex = /^(http|https):\/\/\\w*(.jpg$|.png$)/gi
	const regex = /^(https|http):\/\/(\w.?)*.(jpg|png)$/
	const result = regex.test(post.image)

	if(!result) {
		alert('insira corretamente o link da imagem!')
	} else {
		postList.push(post)

		const postLinkContainer = document.createElement('li')
		const postLink = document.createElement('a')
		postLink.textContent = post.title
		postLink.href = postList.length

		postLinkContainer.append(postLink)
		postListIndex.append(postLinkContainer)

		formInputs.forEach(input => input.value = '')
	}
}

const goToArticle = event => {
	if (event.target.tagName === 'A') {
		event.preventDefault()
		const postNumber = event.target.href.match(/\d{1,2}$/i)
		const post = postList[postNumber - 1]
		const postTitle = postList[postNumber -1].title
		const form = document.querySelector('.formulario')

		form.classList.toggle('invisible')
		postContainer.classList.remove('invisible')

		history.replaceState(location.hostname, 'Post Page', postTitle)

		const article = createPost(post)

		//console.log({article})

		postContainer.replaceChildren()
		postContainer.append(article, formPage)
		document.body.appendChild(postContainer)
	}
}

const backToForm = event => {
	console.log({event})
	const form = document.querySelector('.formulario')
	form.classList.toggle('invisible')
	postContainer.classList.toggle('invisible')
	postListPage.classList.toggle('invisible')
}

const goToPosts = event => {
	const form = document.querySelector('.formulario')
	form.classList.toggle('invisible')

	for(post of postList) {
		postListPage.appendChild(createPost(post))
		console.log(`post no for: ${post}`)
		//console.log(postListPage)
	}
	postListPage.appendChild(formPage)
	document.body.appendChild(postListPage)

	postListPage.classList.remove('invisible')

	console.log(postListPage)
}


postCreateButton.onclick = addPost
postListIndex.onclick = goToArticle
formPage.onclick = backToForm
postPage.onclick = goToPosts
//postListPage.onclick = ''



