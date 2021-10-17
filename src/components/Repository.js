function Repository({ repo }) {
  return (
    <div>
      <a href={repo.html_url}>{repo.name}</a>
      <span> ⭐️{repo.stargazers_count}</span>
    </div>
  );
}

export default Repository;
