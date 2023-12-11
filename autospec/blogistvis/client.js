let postSubmitted = false;
let allPosts = [];
const postsPerPage = 40;

$(function () {
  $("#rating").rateYo({
    rating: 0,
    starWidth: "20px",
  });

 
  const dummyPosts = generateDummyPosts(100); 
  allPosts = dummyPosts;
  displayPosts(allPosts, 1);
});

function openModal() {
  if (!postSubmitted) {
    document.getElementById('myModal').style.display = 'block';
  }
}

function closeModal() {
  document.getElementById('myModal').style.display = 'none';
  clearInputFields();
}
function clearInputFields() {
  $("#text").val('');
  $("#rating").rateYo("rating", 0);
  $("#image").val('');
  $("#email").val('');
  $("#photo-preview").attr("src", "").hide();
}
function submitForm() {
  if (!postSubmitted) {
    const image = $("#image")[0].files[0];
    const text = $("#text").val();
    const rating = $("#rating").rateYo("rating");
    const email = $("#email").val();

    // Simulate adding the post to the list (you will replace this with actual AJAX call)
    const newPost = {
      image: image ? URL.createObjectURL(image) : null,
      text,
      rating,
      email,
    };

    // Add the new post to the array
    allPosts.unshift(newPost);

    // Reset the form settings
    clearInputFields();
    closeModal();

   
    const totalPages = Math.ceil(allPosts.length / postsPerPage);
    displayPosts(allPosts, totalPages);

    
    postSubmitted = false;

    
    postSubmitted=closeModal();
  }
}



function displayPosts(posts, currentPage) {
  const startIndex = (currentPage - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  const paginatedPosts = posts.slice(startIndex, endIndex);

  const postContainer = $("#postContainer");
  postContainer.empty();

  for (const post of paginatedPosts) {
    const postElement = $("<div>").addClass("post");

    if (post.image) {
      const imageElement = $("<img>").attr("src", post.image).attr("alt", "Post Image");
      postElement.append(imageElement);
    }

    postElement.append($("<div>").addClass("post-text").text(post.text));
    postElement.append($("<p>").text(`შეფასება: ${post.rating}`)); 
    postElement.append($("<p>").text(`სახელი: ${post.email}`));

    postContainer.append(postElement);
  }

  
  const paginationContainer = $("#pagination");
  paginationContainer.empty();

  for (let i = 1; i <= totalPages; i++) {
    const pageLink = $("<span>")
      .addClass("page-link")
      .text(i)
      .on("click", function () {
        displayPosts(allPosts, i);
      });

    if (i === currentPage) {
      pageLink.addClass("active");
    }

    paginationContainer.append(pageLink);
  }
}

   