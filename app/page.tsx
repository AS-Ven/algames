'use server'

import { createTables } from "@/utils/dataControllers/tablesController";

const Home = async () => {

  await createTables()

  return (
    <main className="flex flex-col justify-center items-center h-screen">
      <h1 className="text-5xl">Hello Algames !</h1>
    </main>
  );
}

export default Home;