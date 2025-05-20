import React from "react";

const frameworks = [
  {
    name: "Astro",
    logo: "https://astro.build/assets/brand/logo.svg",
  },
  {
    name: "TanStack",
    logo: "https://avatars.githubusercontent.com/u/72518640?s=200&v=4",
  },
  {
    name: "Next.JS",
    logo: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg",
  },
  {
    name: "Remix",
    logo: "https://remix.run/images/remix-logo.svg",
  },
];

const FrameworkCards = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-[#f5faff] flex flex-col items-center py-16 px-4">
      <p className="text-sm font-semibold text-gray-600 mb-2">GET STARTED</p>
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Here’s freedom to framework <span className="text-black">how you want to</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {frameworks.map((fw) => (
          <div
            key={fw.name}
            className="bg-white shadow-md rounded-xl p-6 text-center transition hover:shadow-lg"
          >
            <img src={fw.logo} alt={fw.name} className="h-16 mx-auto mb-4" />
            <p className="text-sm font-medium text-gray-500">DEPLOY WITH</p>
            <h3 className="text-xl font-bold">{fw.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FrameworkCards;
