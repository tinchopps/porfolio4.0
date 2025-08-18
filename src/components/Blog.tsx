import React, { useState, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Search, Clock } from 'lucide-react';
import Modal from './Modal';

const Blog: React.FC = () => {
  const { t } = useTranslation();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [modalOpen, setModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  const blogPosts = [

    {
      id: 2,
      title: 'My Journey from Student to Full Stack Developer',
      excerpt: 'Sharing my experiences, challenges, and lessons learned while transitioning into a career in software development.',
      category: 'personal',
      readTime: 6,
      date: '2024-01-10',
      status: 'draft',
      available: false,
      image: 'https://images.pexels.com/photos/3184299/pexels-photo-3184299.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      id: 3,
      title: 'Teaching Programming: Best Practices for IT Educators',
      excerpt: 'Effective strategies for teaching programming concepts and creating engaging learning experiences for students.',
      category: 'education',
      readTime: 10,
      date: '2024-01-05',
      status: 'published',
      available: false,
      image: 'https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      id: 4,
      title: 'AI in Education: Developing Academic Chatbots',
      excerpt: 'How AI-powered chatbots are revolutionizing student support and academic information systems.',
      category: 'technical',
      readTime: 12,
      date: '2023-12-28',
      status: 'draft',
      available: false,
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      id: 5,
      title: 'The Future of Web Development in 2024',
      excerpt: 'Exploring emerging trends and technologies that will shape the future of web development.',
      category: 'trends',
      readTime: 7,
      date: '2023-12-20',
      status: 'published',
      available: false,
      image: 'https://images.pexels.com/photos/5240543/pexels-photo-5240543.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      id: 6,
      title: 'Building REST APIs with Node.js and Express',
      excerpt: 'A step-by-step tutorial on creating robust and scalable REST APIs using Node.js and Express framework.',
      category: 'technical',
      readTime: 15,
      date: '2023-12-15',
      status: 'published',
      available: false,
      image: 'https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
  ];

  const categories = ['all', 'technical', 'personal', 'education', 'career', 'trends'];

  const filteredPosts = useMemo(() => {
    return blogPosts.filter(post => {
      const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  const handleBlogClick = (post: typeof blogPosts[0]) => {
    if (post.available) {
      // Handle navigation for available posts
      console.log('Navigate to blog post:', post.id);
    } else {
      // Show modal for draft posts
      setModalMessage(t('blog.inProgressMessage'));
      setModalOpen(true);
    }
  };

  return (
    <>
      <section id="blog" className="py-20">
        <div className="container mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {t('blog.title')}
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto"></div>
          </div>

          {/* Search and Filter */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              {/* Search Bar */}
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder={t('blog.searchPlaceholder')}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors"
                />
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                      selectedCategory === category
                        ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white'
                        : 'bg-gray-800/50 text-gray-400 hover:text-white border border-gray-700 hover:border-purple-500'
                    }`}
                  >
                    {category === 'all' ? 'All' : t(`blog.categories.${category}`)}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <article
                key={post.id}
                className="group bg-gray-800/50 dark:bg-gray-800/50 light:bg-white backdrop-blur-sm border border-gray-700/50 dark:border-gray-700/50 light:border-gray-200 rounded-xl overflow-hidden hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-300 transform hover:scale-[1.02] cursor-pointer"
                onClick={() => handleBlogClick(post)}
              >
                {/* Post Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-purple-600/90 text-white text-xs rounded-full font-medium">
                      {t(`blog.categories.${post.category}`)}
                    </span>
                  </div>
                </div>

                {/* Post Content */}
                <div className="p-6">
                  <div className="flex items-center space-x-4 text-gray-400 dark:text-gray-400 light:text-gray-500 text-sm mb-3">
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                    <div className="flex items-center space-x-1">
                      <Clock size={14} />
                      <span>{post.readTime} {t('blog.minutes')}</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white dark:text-white light:text-gray-900 mb-3 group-hover:text-purple-400 transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-gray-400 dark:text-gray-400 light:text-gray-600 mb-4 text-sm leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="text-purple-400 hover:text-purple-300 font-medium text-sm transition-colors">
                    {t('blog.readMore')} →
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* No Results */}
          {filteredPosts.length === 0 && (
            <div className="text-center py-16">
              <div className="text-gray-500 text-lg mb-4">{t('blog.noResults')}</div>
              <p className="text-gray-400">{t('blog.adjustFilters')}</p>
            </div>
          )}
        </div>
      </section>

      {/* Modal */}
      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
        <div className="text-center">
          <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl">📝</span>
          </div>
          <h3 id="modal-title" className="text-xl font-bold text-gray-900 dark:text-white mb-4">
            {t('blog.modalTitle')}
          </h3>
          <p className="text-lg text-center text-gray-700 dark:text-gray-300">
            {modalMessage}
          </p>
        </div>
      </Modal>
    </>
  );
};

export default Blog;