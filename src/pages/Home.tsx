import useDisneyCharacters from "../hooks/useDisneyCharacters";

const Home = () => {
  const { data, isLoading } = useDisneyCharacters();
  console.log("📢[Home.tsx:5]: isLoading: ", isLoading);
  console.log("📢[Home.tsx:5]: data: ", data);
  return <div>Home</div>;
};

export default Home;
