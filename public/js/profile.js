// Define the function to handle the form submission for creating a new post
const newFormHandler = async (event) => {
  event.preventDefault();

  // Get the title and description of the new post from the form inputs
  const title = document.querySelector("#post-name").value.trim();
  const description = document.querySelector("#post-desc").value.trim();

  // Check if the title and description are not empty
  if (title && description) {
    // Send a POST request to the server to create a new post
    const response = await fetch(`/api/posts`, {
      method: "POST",
      body: JSON.stringify({ title, description }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    // Check if the response is successful (status code 200-299)
    if (response.ok) {
      // Redirect the user to the profile page after successful post creation
      document.location.replace("/profile");
    } else {
      // Display an error message if post creation failed
      alert("Failed to create post");
    }
  }
};

// Attach the form submission event handler to the "Create" button
document
  .querySelector(".new-post-form")
  .addEventListener("submit", newFormHandler);

// Define the function to handle the click event for deleting a post
const delButton = async (event) => {
  // Check if the clicked element has the data-id attribute
  if (event.target.hasAttribute("data-id")) {
    // Get the post id from the data-id attribute
    const postId = event.target.getAttribute("data-id");

    try {
      // Send a DELETE request to the server to delete the post with the specified id
      const response = await fetch(`/api/posts/${postId}`, {
        method: "DELETE",
      });

      // Check if the response is successful (status code 200-299)
      if (response.ok) {
        // Redirect the user to the profile page after successful post deletion
        document.location.replace("/profile");
      } else {
        // Display an error message if post deletion failed
        const errorMessage = await response.json();
        alert(errorMessage.message || "Failed to delete post");
      }
    } catch (err) {
      console.log("Error while deleting post:", err);
      alert("Failed to delete post");
    }
  }
};

// Attach the click event handler to the "DELETE" buttons for each post
document.querySelector(".post-list").addEventListener("click", delButton);

// Updated code for viewing post details
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
