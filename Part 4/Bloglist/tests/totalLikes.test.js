const totalLikes = require('../utils/list_helper').totalLikes;
const {listWithManyBlogs, listWithOneBlog} = require('../utils/blogData');

describe('total likes', () => {
  test('when list has one blog, equals the likes of that', () => {
    const result = totalLikes(listWithOneBlog);
    expect(result).toBe(listWithOneBlog[0].likes);
  });

  test('when list has many blogs, equals the total all the likes', () => {
    const result = totalLikes(listWithManyBlogs);
    expect(result).toBe(36);
  });

  test('when list has zero blogs, equals zero', () => {
    const result = totalLikes([]);
    expect(result).toBe(0);
  });
});
