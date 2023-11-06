// gallery.js

function likeFunction(buttonElement) {
    // いいねの数を増やす
    const likeCountElement = buttonElement.nextElementSibling;
    let currentCount = parseInt(likeCountElement.textContent, 10);
    likeCountElement.textContent = currentCount + 1;
}

function addComment(buttonElement) {
    // コメントを追加する機能
    const inputElement = buttonElement.previousElementSibling;
    const comment = inputElement.value.trim();

    if (comment) {
        // コメントが空でない場合、新しいコメントとして追加
        const commentSection = buttonElement.parentElement;
        const newComment = document.createElement('p');
        newComment.textContent = comment;
        commentSection.appendChild(newComment);

        // 入力フィールドをクリア
        inputElement.value = '';
    } else {
        // コメントが空の場合、何もしない
        alert('コメントを入力してください。');
    }
}
