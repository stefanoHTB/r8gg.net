// Function to fetch blog data from JSON file
//--------------------------------------------------------------------
//--------------------------------------------------------------------
//--------------------------------------------------------------------
  async function fetchBlogById(id) {
    try {
      const response = await fetch(`/data/blogs.json`);
      const data = await response.json();
      const blog = data.find(blog => blog.id === id);
      return blog;
    } catch (error) {
      console.error('Error fetching blog:', error);
      return null;
    }
  }
  
// Function to display blog content on the page
//--------------------------------------------------------------------
//--------------------------------------------------------------------
//--------------------------------------------------------------------
  async function displayBlogContent() {
    const queryParams = new URLSearchParams(window.location.search);
    const blogId = queryParams.get('id');
    const blogContent = document.getElementById('blogContent');
    
    if (!blogId) {
      blogContent.innerHTML = '<p>No blog ID provided.</p>';
      return;
    }
  
    const blog = await fetchBlogById(blogId);
    
    if (!blog) {
      blogContent.innerHTML = '<p>Blog not found.</p>';
      return;
    }
  
    const { title, date, author, category, readTime, paragraphs, imageSrc } = blog;
  
    blogContent.innerHTML = `
      <div class="blog-title">${title}</div>
      <img src="${imageSrc}" alt="Image">
      <div class="blog-meta">Date: ${date} | Author: ${author} | Category: ${category} | Read Time: ${readTime}</div>
      <div class="blog-content">
        ${paragraphs.map(paragraph => `
          <p>${paragraph.content}</p>
          ${paragraph.imageSrc ? `<img src="${paragraph.imageSrc}" alt="Image">` : ''}
        `).join('')}
      </div>
    `;
  }
  
  // Display blog content when the page loads
  window.onload = displayBlogContent;
  