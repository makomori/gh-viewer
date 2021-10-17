function Profile({ user }) {
  return (
    <>
      <h3>{user.name}</h3>
      <p>@{user.login}</p>
      {user.location && <p>🏠 {user.location}</p>}
      {user.bio && <p>🗣 {user.bio}</p>}
    </>
  );
}

export default Profile;
