function openEditModal() {
    const articleTitle = document.querySelector('.article-title').innerText;
    const articleContent = document.querySelector('.article-content').innerText;

    document.getElementById('editTitle').value = articleTitle;
    document.getElementById('editContent').value = articleContent;
    document.getElementById('editModal').classList.add('is-active');
}

function closeModal() {
    document.getElementById('editModal').classList.remove('is-active');
    
    const articleKey = 'editedArticle';
    localStorage.removeItem(articleKey); // Clear local storage when closing modal
}

function saveChanges() {
    const editedTitle = document.getElementById('editTitle').value;
    const editedContent = document.getElementById('editContent').value;

    if (editedTitle.trim() !== '' && editedContent.trim() !== '') {
        const articleKey = 'editedArticle';
        localStorage.setItem(articleKey, JSON.stringify({
            title: editedTitle,
            content: editedContent
        }));

        document.querySelector('.article-title.deleteTitle').innerText = editedTitle;
        document.querySelector('.article-content').innerHTML = editedContent;
        closeModal(); // Close modal after updating content
    } else {
        alert('Please enter a valid title and content');
    }
}

function openDeleteModal() {
    const articleTitle = document.querySelector('.title.is-3.article-title.deleteTitle').innerText;
    document.getElementById('deleteTitle').innerText = articleTitle;

    const deleteModal = document.getElementById('confirmationModal');
    if (deleteModal) {
        deleteModal.classList.add('is-active');
    }
}

function cancelDelete() {
    const deleteModal = document.getElementById('confirmationModal');
    if (deleteModal) {
        deleteModal.classList.remove('is-active');
    }
}

function deleteArticle() {
    const articleBox = document.querySelector('.box');
    if (articleBox) {
        articleBox.parentNode.removeChild(articleBox);
    }
    const articleKey = 'editedArticle';
    localStorage.removeItem(articleKey);
    cancelDelete();
}

window.onload = function () {
    const articleKey = 'editedArticle';
    const storedArticle = JSON.parse(localStorage.getItem(articleKey));
    if (storedArticle) {
        const { title, content } = storedArticle;
        document.querySelector('.article-title.deleteTitle').innerText = title;
        document.querySelector('.article-content').innerHTML = content;
    }
};
