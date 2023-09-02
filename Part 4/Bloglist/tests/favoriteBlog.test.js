const favoriteBlog = require('../utils/list_helper').favouriteBlog;
const logger = require('../utils/logger');
const {listWithManyBlogs, listWithOneBlog} = require('../utils/blogData');

describe('favorite blog', () => {

  test('when list has one blog, equals the blog itself', () => {
    const result = favoriteBlog(listWithOneBlog);
    const expected = {
      title: listWithOneBlog[0].title,
      author: listWithOneBlog[0].author,
      likes: listWithOneBlog[0].likes
    };
    logger.info(expected);
    expect(result).toEqual(expected);
  });

  test('when list has many blogs, equals to the list with max likes', () => {
    const result = favoriteBlog(listWithManyBlogs);
    const expected = {
      title: 'Canonical string reduction',
      author: 'Edsger W. Dijkstra',
      likes: 12,
    };

    expect(result).toEqual(expected);
  });

  test('when list has no blogs, equals to {}', () => {
    const result = favoriteBlog([]);
    const expected = {};
    expect(result).toEqual(expected);
  });
});
