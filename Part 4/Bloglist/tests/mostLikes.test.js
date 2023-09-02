const mostLikes = require('../utils/list_helper').mostLikes;
const {listWithManyBlogs, listWithOneBlog} = require('../utils/blogData');

describe('most likes', () => {
  test('when list has only one blog, equals the autor of that', () => {
    const result = mostLikes(listWithOneBlog);
    const expected = {
      author: 'Michael Chan',
      likes: 7
    };

    expect(result).toEqual(expected);
  });

  test('when list has many blogs, equals the result of most liked author', () => {
    const result = mostLikes(listWithManyBlogs);
    const expected = {
      author: 'Edsger W. Dijkstra',
      likes: 17
    };
    expect(result).toEqual(expected);
  });

  test('when list has no blogs, equals {\'\', 0}', () => {
    const result = mostLikes([]);
    const expected = {};
    expect(result).toEqual(expected);
  });
});


