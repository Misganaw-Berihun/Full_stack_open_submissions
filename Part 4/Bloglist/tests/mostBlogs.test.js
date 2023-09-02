const mostBlogs = require('../utils/list_helper').mostBlogs;
const {listWithManyBlogs, listWithOneBlog} = require('../utils/blogData');

describe('many blogs', () => {
  test('when list has only one blog, equals the autor of that', () => {
    const result = mostBlogs(listWithOneBlog);
    const expected = {
      author: 'Michael Chan',
      blogs: 1
    };

    expect(result).toEqual(expected);
  });

  test('when list has many blogs, equals the result of many blog author', () => {
    const result = mostBlogs(listWithManyBlogs);
    const expected = {
      author: 'Robert C. Martin',
      blogs: 3
    };
    expect(result).toEqual(expected);
  });

  test('when list has no blogs, equals {\'\', 0}', () => {
    const result = mostBlogs([]);
    const expected = {};
    expect(result).toEqual(expected);
  });
});


