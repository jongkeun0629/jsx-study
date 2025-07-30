import "./App.css";
import UserCard from "./components/UserCard";

const App = () => {
  const name = "jongkeun";

  return (
    <>
      <div className="card">
        <img src="/avatar.webp" alt="avatar"></img>
        <h2>jongkeun</h2>
        <h2>Programmer</h2>
      </div>
      <UserCard />
    </>
  );
};

export default App;
