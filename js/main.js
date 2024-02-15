// Function to fetch blog data from JSON file
//--------------------------------------------------------------------
//--------------------------------------------------------------------
//--------------------------------------------------------------------

async function fetchBlogs() {
    try {
      const response = await fetch('/data/blogs.json');
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching blogs:', error);
      return [];
    }
  }

  // Function to display and create blog card
  //--------------------------------------------------------------------
  //--------------------------------------------------------------------
  //--------------------------------------------------------------------

  async function displayBlogs() {
    const blogList = document.getElementById('blogList');
    const blogs = await fetchBlogs();
  
    // Clear previous content
    blogList.innerHTML = '';
  
    // Iterate over blogs and create HTML for each blog card
    blogs.forEach(blog => {
      const blogCard = document.createElement('div');
      blogCard.classList.add('blog-card');
      blogCard.style.marginBottom = '20px'; // Example style
    
      const titleElement = document.createElement('h2');
      titleElement.textContent = blog.title;
      titleElement.style.fontSize = '20px'; // Example style

      const imageElement = document.createElement('img');
      imageElement.src = blog.imageSrc;
      imageElement.alt = blog.title;
      imageElement.style.width = '100%'; // Example style
  
      const dateElement = document.createElement('p');
      dateElement.textContent = `Date: ${blog.date}`;
  
      const descriptionElement = document.createElement('p');
      descriptionElement.textContent = blog.description;
      descriptionElement.style.fontWeight = 'normal'; // Example style
  
      const authorElement = document.createElement('p');
      authorElement.textContent = `Author: ${blog.author}`;
  
  
      // Create a link element to wrap the blog card
      const linkElement = document.createElement('a');
      linkElement.href = `/pages/blog_page.html?id=${blog.id}`; // Update the href attribute with the correct path
      linkElement.appendChild(blogCard);
  
      // Append elements to the blog card
      blogCard.appendChild(titleElement);
      blogCard.appendChild(imageElement);
      blogCard.appendChild(dateElement);
      blogCard.appendChild(descriptionElement);
      blogCard.appendChild(authorElement);
  
      // Append the blog card to the blog list
      blogList.appendChild(linkElement);
    });
  }
  
  // Display blogs when the page loads
  window.onload = displayBlogs;
  