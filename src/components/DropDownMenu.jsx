import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import menuLogo from "../assets/menu.svg";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function DropDownMenu() {
  return (
    <Menu as="div">
      <div>
        <Menu.Button className="w-fullrounded-md bg-white px-3 py-2 shadow-sm">
          <img src={menuLogo} alt="menu" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-1 w-36 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-10">
          <Menu.Item>
            <a
              href="#"
              className="block px-4 py-2 my-3 text-sm hover:text-primary-light text-primary-dark font-semibold"
            >
              Contacto
            </a>
          </Menu.Item>
          <Menu.Item>
            <a
              href="#"
              className="block px-4 py-2 my-3 text-sm  hover:text-primary-light"
            >
              Torneos
            </a>
          </Menu.Item>
          <Menu.Item>
            <a
              href="#"
              className="block px-4 py-2 my-3 text-sm  hover:text-primary-light"
            >
              Misión
            </a>
          </Menu.Item>
          <Menu.Item>
            <a
              href="#"
              className="block px-4 py-2 my-3 text-sm  hover:text-primary-light"
            >
              Visión
            </a>
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
