// Sample blog posts for testing
const samplePosts = [
  {
    id: 'sample-1',
    title: 'Welcome to My Blog!',
    content: `Welcome to my new blog section! I'm excited to share my thoughts, experiences, and learnings about web development, technology, and life as a developer.

In this space, you'll find articles about:
- Web development tutorials and tips
- My experiences with different technologies
- Project insights and behind-the-scenes stories
- Career advice and lessons learned
- Random thoughts about the tech industry

I hope you find the content useful and engaging. Feel free to reach out if you have any questions or suggestions for future topics!

Stay tuned for more exciting content!`,
    tags: ['welcome', 'introduction', 'blog'],
    createdAt: '2025-01-15T10:00:00.000Z',
    updatedAt: '2025-01-15T10:00:00.000Z'
  },
  {
    id: 'sample-2',
    title: 'Building This Portfolio with React',
    content: `Recently, I've been working on this portfolio website using React, and I thought I'd share some insights about the development process.

The main technologies I used:
- React for the frontend framework
- CSS for styling with a retro terminal theme
- Local Storage for blog post management
- Conway's Game of Life for the animated background

One of the interesting challenges was creating the terminal-like startup animation. I wanted to give the portfolio a hacker/developer aesthetic while keeping it professional.

The blog functionality you're reading right now was built with a simple admin panel that allows me to create, edit, and manage posts. It uses localStorage for persistence, which is perfect for a static site.

Next steps include adding proper backend integration and maybe implementing a comment system. What do you think? Let me know!`,
    tags: ['react', 'portfolio', 'web-development', 'frontend'],
    createdAt: '2025-01-10T14:30:00.000Z',
    updatedAt: '2025-01-10T14:30:00.000Z'
  },
  {
    id: 'sample-3',
    title: 'My Journey into Full-Stack Development',
    content: `Three years ago, I started my journey into web development, and it's been an incredible ride so far.

Starting with the basics:
I began with HTML, CSS, and JavaScript - the holy trinity of web development. Those early days of struggling with CSS positioning and JavaScript scope feel like a lifetime ago!

Discovering React:
When I first encountered React, it felt like magic. The component-based architecture and the way it handled state management opened up so many possibilities.

Backend Adventures:
Learning Node.js and databases was a game-changer. Suddenly, I could build full applications that actually did something useful!

Current Focus:
These days, I'm focused on improving my skills in:
- TypeScript for better code quality
- Advanced React patterns
- Database optimization
- Cloud deployment and DevOps

The learning never stops in this field, and that's what I love most about it. Every project brings new challenges and opportunities to grow.

Where are you in your development journey? I'd love to hear about it!`,
    tags: ['career', 'learning', 'full-stack', 'journey', 'development'],
    createdAt: '2025-01-05T09:15:00.000Z',
    updatedAt: '2025-01-05T09:15:00.000Z'
  }
];

// Function to initialize sample posts (only if no posts exist)
export const initializeSamplePosts = () => {
  const existingPosts = localStorage.getItem('blogPosts');
  if (!existingPosts || JSON.parse(existingPosts).length === 0) {
    localStorage.setItem('blogPosts', JSON.stringify(samplePosts));
    console.log('Sample blog posts initialized!');
    return true;
  }
  return false;
};

// Function to reset posts (for testing)
export const resetToSamplePosts = () => {
  localStorage.setItem('blogPosts', JSON.stringify(samplePosts));
  console.log('Blog posts reset to sample data!');
};

export default samplePosts;
