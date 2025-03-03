'use server'

import { createTables } from "@/utils/Controllers/dbControllers/tablesController";

const Home = async () => {

  await createTables()

  return (
    <main className="flex flex-col justify-center items-center h-screen">
      <h1 className="text-5xl">Hello Algames !</h1>
    </main>
  );
}

export default Home;