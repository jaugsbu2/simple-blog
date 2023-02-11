console.log("comment js loaded")
document.getElementById("post-id").style.display = "none";

const commentFormHandler = async (event) => {
  event.preventDefault();

  const content = document.querySelector('#comment-content').value.trim();
  const postIdEl = document.querySelector('#post-id');
  const postId = postIdEl.innerHTML
  console.log(content)
  console.log(postId)
  
  if (content && postId) {
    const response = await fetch('/api/comment', {
      method: 'POST',
      body: JSON.stringify({ postId, content }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace(`/post/${postId}`);
    } else {
      alert('Failed to make post.');
    }
  }
};

document
  .querySelector('.comment-form')
  .addEventListener('submit', commentFormHandler);
