import Bus from "./Bus";

const Main = () => {
  return (
    <main className="min-h-screen flex flex-row">
      <div className="flex flex-auto justify-center items-center basis-1/2">
        <Bus />
      </div>
      <div className="flex flex-auto basis-1/2 bg-blue-500"></div>
    </main>
  );
};

export default Main;
