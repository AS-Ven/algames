import Profile from "@/components/buttons/profile";

const Home = async () => {

  return (
    <main className="flex flex-col justify-evenly items-center h-screen gap-8">
      <Profile/>
      <h1 className="text-5xl">Hello Algames !</h1>
    </main>
  );
}

export default Home;