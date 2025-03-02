import CreateAccount from "@/components/forms/createAccount";

const Home = async () => {

  return (
    <main className="flex flex-col justify-center items-center h-screen gap-8">
      <h1 className="text-5xl">Hello Algames !</h1>
      <CreateAccount></CreateAccount>
    </main>
  );
}

export default Home;