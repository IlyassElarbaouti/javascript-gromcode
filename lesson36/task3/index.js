const fetchUser = async userId => {
  try {
    const response = await fetch(`https://api.github.com/users/${userId}`);
    if (!response.ok) {
      return null;
    }

    const data = await response.json();
    return data;
  } catch (err) {
    throw new Error('Failed to fetch user');
  }
};

export const getUsersBlogs = usersId => {
  try {
    const promises = usersId.map(el => fetchUser(el).then(response => response.blog));

    return Promise.all(promises);
  } catch {
    throw new Error('Failed to fetch');
  }
};