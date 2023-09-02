const lodash = require('lodash');
const dummy = (blogs) => {
  return 1;
};

const totalLikes = (posts) => {
  const reducer = (total, blog) => {
    return total + blog.likes;
  };
  return posts.reduce(reducer, 0);
};

const favouriteBlog = (posts) => {
  let favorite = {};
  let maxNumLikes = 0;

  for (const post of posts){
    if (maxNumLikes < post.likes){
      favorite = post;
      maxNumLikes = post.likes;
    }
  }

  const {title, author, likes} = favorite;
  return {title, author, likes};
};

const getMax = (result, blogs) => {
  const temp = lodash.sortBy(result, (key, value) => value);
  temp.sort((a, b) => a - b);
  const targetCount = lodash.nth(temp, -1);
  for (const blog of blogs){
    const value = result[`${blog.author}`];
    if (value === targetCount){
      return {
        author: blog.author,
        value: value
      };
    }
  }
  return {};
};

const mostBlogs = (blogs) => {
  const result = lodash.countBy(blogs, (blog) => blog.author);
  const authorWithMostBlogs = getMax(result, blogs);
  return {
    author: authorWithMostBlogs.author,
    blogs: authorWithMostBlogs.value
  };
};

const mostLikes = (blogs) => {
  const reducer = (result, value) => {
    const author = value.author;
    if (result[author]){
      result[author] += Number(value.likes);
    } else{
      result[author] = Number(value.likes);
    }
    return result;
  };

  const likesMap = lodash.reduce(blogs, reducer, {});
  const result = getMax(likesMap, blogs);
  return {
    author: result.author,
    likes: result.value
  };
};

module.exports = {
  dummy,
  totalLikes,
  favouriteBlog,
  mostBlogs,
  mostLikes
};

