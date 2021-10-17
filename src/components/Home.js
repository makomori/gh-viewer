import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import store from "../store";
import { fetchUser, fetchRepositories } from "../slices/githubSlice";
import Profile from "./Profile";
import Repository from "./Repository";

function Home() {
  const [inputText, setInputText] = useState("");
  const { user, repositories, message } = useSelector((state) => state.github);

  const handleClickSearch = () => {
    store.dispatch(fetchUser(inputText));
  };

  useEffect(() => {
    if (user) {
      store.dispatch(fetchRepositories());
    }
  }, [user]);

  return (
    <>
      <input
        value={inputText}
        placeholder="ユーザーIDを入力"
        onChange={(e) => setInputText(e.target.value)}
      />
      <button onClick={handleClickSearch} disabled={!inputText}>
        検索
      </button>
      {user && (
        <>
          <h2>プロフィール</h2>
          <Profile user={user} />
        </>
      )}
      {repositories.length > 0 && (
        <>
          <h2>レポジトリ</h2>
          {repositories.map((repo) => (
            <Repository repo={repo} />
          ))}
        </>
      )}
      {message && <p>{message}</p>}
    </>
  );
}

export default Home;
