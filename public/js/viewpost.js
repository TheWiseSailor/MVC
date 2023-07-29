const viewPost = async (postId) => {
  try {
    const response = await fetch(`/api/posts/${postId}`);
    if (response.ok) {
      const postData = await response.json();
      // Display the post details in a modal or redirect to the post details page
      // You can customize the implementation based on your UI requirements
      console.log(postData);
    } else {
      alert("Failed to fetch post details.");
    }
  } catch (err) {
    console.log("Error while fetching post details:", err);
    alert("Failed to fetch post details.");
  }
};

// Attach click event handler to post links
document.querySelector(".post-list").addEventListener("click", (event) => {
  if (event.target.matches("a[data-id]")) {
    event.preventDefault();
    const postId = event.target.getAttribute("data-id");
    viewPost(postId);
  }
});
