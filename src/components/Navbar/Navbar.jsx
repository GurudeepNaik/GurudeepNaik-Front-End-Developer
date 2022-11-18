/* This example requires Tailwind CSS v3.0+ */
import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import "./Navbar.css"

const navigation = [
  { name: "Home", to: "/" },
  { name: "Rockets", to: "/rockets" },
  { name: "Capsules", to: "/capsules" },
  { name: "Dragon", to: "/dragon" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="isolate bg-transparent">
      <div className="px-6 pt-6 lg:px-8">
        <div>
          <nav className="flex h-9 items-center justify-between" aria-label="Global">

            <div className="flex lg:min-w-0 lg:flex-2 gap-20" aria-label="Global">
                <img className="h-20 w-60" src="https://assets.stickpng.com/images/5842a770a6515b1e0ad75afe.png" alt="Logo"/>
            </div>

            <div className="flex lg:hidden">
              <button  type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white" onClick={() => setMobileMenuOpen(true)}>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>

            <div className="hidden lg:flex lg:min-w-0 lg:flex-1 lg:justify-center lg:gap-x-12">
              {navigation.map((item) => (
                <Link key={item.name} to={item.to} className="link font-semibold text-2xl text-white hover:text-slate-300 decoration-slice">{item.name}</Link>
              ))}
            </div>

          </nav>

          <Dialog as="div" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
            <Dialog.Panel focus="true" className="fixed inset-0 z-10 overflow-y-auto bg-white px-6 py-6 lg:hidden">
              <div className="flex h-9 items-center justify-between bg-white">
                <div className="flex">
                  <img className="h-20 w-60" src="https://assets.stickpng.com/images/5842a770a6515b1e0ad75afe.png" alt="Logo"/>
                </div>
                <div className="flex">
                  <button type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray" onClick={() => setMobileMenuOpen(false)}>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                    {navigation.map((item) => (
                      <Link key={item.name} to={item.to} className="link -mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/10">{item.name}</Link>
                    ))}
                  </div>
                </div>
              </div>
            </Dialog.Panel>
          </Dialog>
        </div>
      </div>
    </div>
  );
}
