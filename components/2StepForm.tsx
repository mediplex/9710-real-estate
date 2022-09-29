import { Select } from "./Select";

/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
const tabs = [
  { name: "Step 1", href: "#", current: true },
  { name: "Step 2", href: "#", current: false },
];

function classNames(...classes:any) {
  return classes.filter(Boolean).join(" ");
}

const TwoStepForm = () => {
  return (
    <>
      <nav
        className="isolate flex divide-x divide-gray-200  shadow"
        aria-label="Tabs"
      >
        {tabs.map((tab, tabIdx) => (
          <a
            key={tab.name}
            href={tab.href}
            className={classNames(
              tab.current
                ? "text-gray-900"
                : "text-gray-500 hover:text-gray-700",
              tabIdx === 0 ? "rounded-tl-3xl" : "",
              tabIdx === tabs.length - 1 ? "rounded-tr-3xl" : "",
              "group relative min-w-0 flex-1 overflow-hidden bg-white py-6 px-4 text-sm font-medium text-center hover:bg-gray-50 focus:z-10"
            )}
            aria-current={tab.current ? "page" : undefined}
          >
            <span>{tab.name}</span>
            <span
              aria-hidden="true"
              className={classNames(
                tab.current ? "bg-indigo-500" : "bg-transparent",
                "absolute inset-x-0 bottom-0 h-0.5"
              )}
            />
          </a>
        ))}
      </nav>
      <div className="p-5">
        <h2 className="text-2xl my-5">What you are looking for?</h2>
        <form action="#" className="grid gap-2">
          <Select
            items={[
              { id: 1, name: "Buy" },
              { id: 2, name: "Rent" },
              { id: 3, name: "Sell" },
            ]}
          />
          <Select
            items={[
              { id: 1, name: "Apartment" },
              { id: 2, name: "Duplex" },
              { id: 3, name: "Hotel Apartment" },
              { id: 4, name: "Land Residential" },
              { id: 5, name: "Office" },
              { id: 6, name: "Retail" },
              { id: 6, name: "Villa" },
            ]}
          />
          <Select
            items={[
              { id: 1, name: "Akoya" },
              { id: 2, name: "Al Barsha" },
              { id: 3, name: "Al Furjan" },
              { id: 4, name: "Al Quoz" },
              { id: 5, name: "Arabian Ranhes 1" },
              { id: 5, name: "Arabian Ranhes 2" },
              { id: 5, name: "Arabian Ranhes 3" },
              { id: 6, name: "City Walk" },
            ]}
          />
          <Select
            items={[
              { id: 1, name: "Studio" },
              { id: 2, name: "1 bedroom" },
              { id: 3, name: "2 bedrooms" },
              { id: 4, name: "3 bedrooms" },
              { id: 5, name: "4 bedrooms" },
              { id: 6, name: "5 bedrooms" },
              { id: 7, name: "6 bedrooms" },
            ]}
          />

          <button
            type="submit"
            className="text-2xl block w-full rounded-full bg-indigo-500 py-5 px-4 my-5 font-medium text-white shadow hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:ring-offset-2 focus:ring-offset-gray-900"
          >
            Next
          </button>
        </form>

        <p className="text-sm text-gray-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi,
          itaque quod? Earum soluta porro quos sed odio aut illum.
        </p>
      </div>
    </>
  );
};

export { TwoStepForm };
