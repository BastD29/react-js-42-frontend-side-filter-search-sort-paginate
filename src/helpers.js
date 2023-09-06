export const filterUsers = (users, selectedJob) =>
  users.filter((user) => selectedJob === "All" || user.job === selectedJob);

export const searchUsers = (users, term) =>
  users.filter((user) => user.name.toLowerCase().includes(term.toLowerCase()));

export const sortUsers = (users, order) =>
  [...users].sort((a, b) =>
    order === "asc"
      ? a.name.localeCompare(b.name)
      : b.name.localeCompare(a.name)
  );
