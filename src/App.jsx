import "./App.css";
import UserCard from "./components/UserCard";

const userData = [
  {
    id: 1,
    name: "jongkeun",
    job: "Prgrammer",
    imageSrc: "avatar.webp",
  },
  {
    id: 2,
    name: "이종근",
    job: "돈 많은 백수",
    imageSrc: "avatar2.webp",
  },
  {
    id: 3,
    name: "ㅎㅇ",
    job: "작가",
    imageSrc: "avatar3.jpeg",
  },
];

const App = () => {
  const name = "jongkeun";

  return (
    <>
      {userData.map((value) => (
        <UserCard
          key={value.id}
          name={value.name}
          job={value.job}
          imageSrc={value.imageSrc}
        />
      ))}
    </>
  );
};

export default App;
