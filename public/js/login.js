//this is a function that handles form submissions for loins
const loginFormHandler = async (event) => {
  //this prevents the default sub form to handle with js
  event.preventDefault();
  const name = document.querySelector("#display_name").value.trim();
  const password = document.querySelector("#password-login").value.trim();
  //this will check for if both password and name are provided
  if (name && password) {
    const response = await fetch("/api/users/session", {
      method: "POST",
      body: JSON.stringify({ display_name: name, password }),
      headers: { "Content-Type": "application/json" },
    });
    //checks if the server reponds successfully
    if (response.ok) {
      document.location.replace("/profile");
    } else {
      //this will redirect the user's profile if succesful
      alert(
        "Login failed, either your password or email is incorrect (skill issue :D)"
      );
    }
  }
};
