var COMMENTID = 0
var posts = new Database('posts')

function displayAllPosts() {
	for (var post of posts.getAll()) {
		addNewPost(createPost(post))
	}
}
displayAllPosts()

function newPost() {
	var post = posts.create({
		text: getPostText(),
		user: getUser(),
		date: new Date(),
	})
	var elem = createPost(post)
	addNewPost(elem)
}

function getCommentId() {
	return ++COMMENTID
}
function getPostText() {
	var postInputElement = document.getElementById('post_text')
	return postInputElement.value
}

function getUser() {
	var userNameElement = document.getElementById('username')
	return userNameElement.value
}

function createPost(post) {
	return `
		<div id="post-${post.id}" class="post container">
			<div class="post_title">
				${post.user}
			</div>
			<div class="post_text">
				${post.text}
			</div>
			${createPostLikes(post)}
			<div class="comments_container">
				<textarea class="comment_input_text"></textarea>
				<button class="new_comment" onclick="newComment(${post.id})">
					add comment
				</button>
				<div class="comments_feed">
				</div>
			</div>
		</div>
	`
}

function createComment(comment) {
	return `<div class="comment_container">
		<div class="comment_text">
		${comment.text}
		</div>
	</div>`
}

function newComment(postId) {
	var postElem = document.getElementById(`post-${postId}`)
	var comment_input = postElem.querySelector('textarea.comment_input_text')
	const comment = {
		text: comment_input.value
	}
	addNewComment(createComment(comment), postId)
}

function addNewComment(elem, postId) {
	var postElem = document.getElementById(`post-${postId}`)
	var postComments = postElem.querySelector('div.comments_feed')
	var commentContainer = document.createElement('div')
	commentContainer.innerHTML = elem
	postComments.insertAdjacentElement('afterbegin', commentContainer)
}

function createPostLikes(post) {
	return `
		<div class="post_likes_container">
			<div class="post_likes_info">
				<span class="post_likes_count">
					0
				</span> 
				likes
			</div>
			<button class="post_like_button" onclick="newLike(${post.id})">
				like
			</button>
			<button class="post_like_button" onclick="deletePost(${post.id})">
				delete
			</button>
		</div>
	`
}

function deletePost(postId) {
	var postElem = document.getElementById(`post-${postId}`)
	postElem.parentNode.removeChild(postElem)
	posts.delete(postId)
}

function newLike(postId) {
	var postElem = document.getElementById(`post-${postId}`)
	var postLikes = postElem.querySelector('div.post_likes_info')
	var postLikesCountElem = postLikes.querySelector('span.post_likes_count')
	var postLikesCount = Number(postLikesCountElem.innerText)
	postLikesCountElem.innerText = ++postLikesCount
}

function addNewPost(elem) {
	var posts = document.getElementById('posts')
	var post = document.createElement('div')
	post.innerHTML = elem
	posts.insertAdjacentElement('afterbegin', post)
}
