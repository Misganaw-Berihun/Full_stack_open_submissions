const totalLikes = require('../utils/list_helper').totalLikes;

describe('total likes', () => {
  const listWithOneBlog = [
    {
      _id: '5a422aa71b54a676234d17f8',
      title: 'Go To Statement Considered Harmful',
      author: 'Edsger W. Dijkstra',
      url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
      likes: 5,
      __v: 0
    }
  ];

  const listWithManyBlogs = [
    {
      '_id': '5a422aa71b54a676234d17f8',
      'title': 'Go To Statement Considered Harmful',
      'author': 'Edsger W. Dijkstra',
      'url': 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
      'likes': 5,
      '__v': 0
    },
    {
      '_id': '5a422aa71b54a676234d17f9',
      'title': 'Title of Blog Post 2',
      'author': 'Author 2',
      'url': 'http://example.com/blogpost2',
      'likes': 10,
      '__v': 1
    },
    {
      '_id': '5a422aa71b54a676234d17fa',
      'title': 'Title of Blog Post 3',
      'author': 'Author 3',
      'url': 'http://example.com/blogpost3',
      'likes': 15,
      '__v': 2
    },
    {
      '_id': '5a422aa71b54a676234d17fb',
      'title': 'Title of Blog Post 4',
      'author': 'Author 4',
      'url': 'http://example.com/blogpost4',
      'likes': 20,
      '__v': 3
    },
    {
      '_id': '5a422aa71b54a676234d17fc',
      'title': 'Title of Blog Post 5',
      'author': 'Author 5',
      'url': 'http://example.com/blogpost5',
      'likes': 25,
      '__v': 4
    }
  ];


  test('when list has one blog, equals the likes of that', () => {
    const result = totalLikes(listWithOneBlog);
    expect(result).toBe(listWithOneBlog[0].likes);
  });

  test('when list has many blogs, equals the total all the likes', () => {
    const result = totalLikes(listWithManyBlogs);
    expect(result).toBe(75);
  });

  test('when list has zero blogs, equals zero', () => {
    const result = totalLikes([]);
    expect(result).toBe(0);
  });
});
