const postTitle = document.querySelector('#titulo-post')
const postAuthor = document.querySelector('#autor-post')
const postContent = document.querySelector('#conteudo-post')
const postCreateButton = document.querySelector('button')
const postContainer = document.querySelector('#container-de-posts')


let postList = []

const createPost = list => {
	postContainer.textContent = ''
	console.log('tamanho: ' + list.length)

	for ( const postItem  of list ) {
		//clear post list

		const {title, author, content} = postItem
		const article = document.createElement('article')

		const articleTitle = document.createElement('h2')
		articleTitle.textContent = title

		const articleAuthor = document.createElement('cite')
		articleAuthor.textContent = author

		const articleContent = document.createElement('div')
		articleContent.textContent = content

		console.log(`Adicionando novo post:
			title: ${title}
			author: ${author}
			content:${content}`
		)
		article.append(articleTitle, articleAuthor, articleContent)
		postContainer.append(article)
	}
}

const clearInputs = () => {
	postTitle.value = postAuthor.value = postContent.value = ''
}

const addPost= event => {
	const postInfo = {
		title: postTitle.value,
		author: postAuthor.value,
		content: postContent.value
	}

	postList.push(postInfo)

	createPost(postList)
	clearInputs()

}


postCreateButton.onclick = addPost


