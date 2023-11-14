document.addEventListener('DOMContentLoaded', () => {
    const addArticleButton = document.getElementById('addArticleButton');
    const addArticleModal = document.getElementById('addArticleModal');
    const closeAddArticleModal = document.getElementById('closeAddArticleModal');
    const addArticleForm = document.getElementById('addArticleForm');
  
    const editArticleButton = document.getElementById('editArticleButton');
    const editArticleModal = document.getElementById('editArticleModal');
    const closeEditArticleModal = document.getElementById('closeEditArticleModal');
    const editArticleForm = document.getElementById('editArticleForm');
  
    const addCategoryButton = document.getElementById('addCategoryButton');
    const addCategoryModal = document.getElementById('addCategoryModal');
    const closeAddCategoryModal = document.getElementById('closeAddCategoryModal');
    const addCategoryForm = document.getElementById('addCategoryForm');
  
    const editCategoryButton = document.getElementById('editCategoryButton');
    const editCategoryModal = document.getElementById('editCategoryModal');
    const closeEditCategoryModal = document.getElementById('closeEditCategoryModal');
    const editCategoryForm = document.getElementById('editCategoryForm');
  
    addArticleButton.addEventListener('click', () => { addArticleModal.classList.add('is-active'); });
    closeAddArticleModal.addEventListener('click', () => { addArticleModal.classList.remove('is-active'); });
    addArticleModal.addEventListener('click', (event) => { if (event.target === addArticleModal) { addArticleModal.classList.remove('is-active'); } });
  
    addArticleForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const formData = new FormData(addArticleForm);
      fetch('/api/articles', { method: 'POST', body: formData, })
      .then(response => response.json())
      .then(data => {
        updateArticleList(data);
        addArticleModal.classList.remove('is-active');
      })
      .catch(error => { console.error('Error:', error); });
    });
  
    editArticleButton.addEventListener('click', () => { editArticleModal.classList.add('is-active'); });
    closeEditArticleModal.addEventListener('click', () => { editArticleModal.classList.remove('is-active'); });
    editArticleModal.addEventListener('click', (event) => { if (event.target === editArticleModal) { editArticleModal.classList.remove('is-active'); } });
  
    editArticleForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const formData = new FormData(editArticleForm);
      const articleId = formData.get('articleId');
      fetch(`/api/articles/${articleId}`, { method: 'PUT', body: formData, })
      .then(response => response.json())
      .then(data => {
        updateArticle(data);
        editArticleModal.classList.remove('is-active');
      })
      .catch(error => { console.error('Error:', error); });
    });
  
    addCategoryButton.addEventListener('click', () => { addCategoryModal.classList.add('is-active'); });
    closeAddCategoryModal.addEventListener('click', () => { addCategoryModal.classList.remove('is-active'); });
    addCategoryModal.addEventListener('click', (event) => { if (event.target === addCategoryModal) { addCategoryModal.classList.remove('is-active'); } });
  
    addCategoryForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const formData = new FormData(addCategoryForm);
      fetch('/api/categories', { method: 'POST', body: formData, })
      .then(response => response.json())
      .then(data => {
        updateCategoryList(data);
        addCategoryModal.classList.remove('is-active');
      })
      .catch(error => { console.error('Error:', error); });
    });
  
    editCategoryButton.addEventListener('click', () => { editCategoryModal.classList.add('is-active'); });
    closeEditCategoryModal.addEventListener('click', () => { editCategoryModal.classList.remove('is-active'); });
    editCategoryModal.addEventListener('click', (event) => { if (event.target === editCategoryModal) { editCategoryModal.classList.remove('is-active'); } });
  
    editCategoryForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const formData = new FormData(editCategoryForm);
      const categoryId = formData.get('categoryId');
      fetch(`/api/categories/${categoryId}`, { method: 'PUT', body: formData, })
      .then(response => response.json())
      .then(data => {
        updateCategory(data);
        editCategoryModal.classList.remove('is-active');
      })
      .catch(error => { console.error('Error:', error); });
    });
  
    function updateArticleList(data) {
        const articlesContainer = document.getElementById('articlesContainer');
        articlesContainer.innerHTML = '';
      
        data.forEach(article => {
          const articleElement = document.createElement('div');
          articleElement.classList.add('article');
          
          const titleElement = document.createElement('h3');
          titleElement.textContent = article.title;
          
          const contentElement = document.createElement('p');
          contentElement.textContent = article.content;
          
          articleElement.appendChild(titleElement);
          articleElement.appendChild(contentElement);
          
          articlesContainer.appendChild(articleElement);
        });
      }
      
      function updateArticle(data) {
        const articleId = data.id;
        const articleElement = document.getElementById(`article-${articleId}`);
        
        if (articleElement) {
          articleElement.querySelector('h3').textContent = data.title;
          articleElement.querySelector('p').textContent = data.content;
        }
      }
      
      function updateCategoryList(data) {
        const categoriesContainer = document.getElementById('categoriesContainer');
        categoriesContainer.innerHTML = '';
      
        data.forEach(category => {
          const categoryElement = document.createElement('div');
          categoryElement.classList.add('category');
          categoryElement.textContent = category.name;
          categoriesContainer.appendChild(categoryElement);
        });
      }
      
      function updateCategory(data) {
        const categoryId = data.id;
        const categoryElement = document.getElementById(`category-${categoryId}`);
        
        if (categoryElement) {
          categoryElement.textContent = data.name;
        }
      }
      
  });
  