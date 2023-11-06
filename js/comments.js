function showComments(id) {
    const commentsList = document.getElementById(id);
    if (commentsList.style.display === "none" || commentsList.style.display === "") {
        commentsList.style.display = "block";
    } else {
        commentsList.style.display = "none";
    }
}

