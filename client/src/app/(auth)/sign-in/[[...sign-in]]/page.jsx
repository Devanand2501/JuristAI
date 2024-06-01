import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <section className="bg-white">
      <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
        <aside className="relative flex items-center justify-center h-64 lg:h-full lg:order-last lg:col-span-5 xl:col-span-6 bg-gray-100">
          <div className="px-8 py-16 sm:px-12 lg:p-16">
            <h1 className="text-xl sm:text-5xl font-semibold">
              Welcome to Effortless Legal Practice with <span className="text-yellow-500">Nyayavivaka</span>
            </h1>
            <p className="mt-4 text-gray-700">
              Simplify your  tasks with our intelligent AI assistant.
            </p>
            <img
              alt="Sign Up"
              src="./sign-up.png"
              className="mt-8 w-full max-w-md object-cover  lg:w-auto"
            />
          </div>
        </aside>
        <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6 left-bg">
          <div className="max-w-xl lg:max-w-3xl">
            <div className="">
            <h1 className="mt-6 text-2xl font-bold text-yellow-500 sm:text-3xl md:text-4xl">
              LogIn 
            </h1>
            <p className="text-white mt-2">Enter Your Details </p>
            </div>

            <p className="mt-4 mb-6 leading-relaxed text-white">
            Welcome to Nyayvivika, the comprehensive platform where legal complexities dissolve, offering clear, concise answers to all your questions.
            </p>

            <SignIn />
          </div>
        </main>
      </div>
    </section>
  );
}
