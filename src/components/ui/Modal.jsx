import { XIcon, PillIcon, Clock10Icon } from "lucide-react";
import Title from "./Title";
import Text from "./Text";
import Rating from "./Rating";

import { Dialog } from "@headlessui/react";

export default function Modal({ supplement, setIsOpen, isOpen }) {
  return (
    <Dialog
      open={isOpen === supplement.name}
      onClose={() => setIsOpen(false)}
      className="relative z-50"
    >
      {/* The backdrop, rendered as a fixed sibling to the panel container */}
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

      {/* Full-screen scrollable container */}
      <div className="fixed inset-0 w-screen overflow-y-auto">
        {/* Container to center the panel */}
        <div className="flex min-h-full items-center justify-center p-3">
          <Dialog.Panel className="w-full max-w-md bg-white dark:bg-dark py-6 shadow-lg rounded-xl ">
            {/* head */}
            <div className="flex justify-between items-center mb-4 px-6">
              <Title size="lg">{supplement.name}</Title>
              <button onClick={() => setIsOpen(false)}>
                <XIcon size={32} className="dark:text-light" />
              </button>
            </div>
            {/* head end */}
            <div className="px-6">
              <Rating className="mb-4" rate={supplement.rating} />

              <Title type="sm" className="!text-darkest font-normal">{supplement.recommendation}</Title>

              <ul className="w-full bg-light rounded-md mt-3 flex justify-center items-center list-['+'] gap-7 py-5">
                {supplement.tags.map((value, index) => (
                  <li key={index} className="font-medium">
                    {value}
                  </li>
                ))}
              </ul>
            </div>

            <div className="w-full flex mt-3">
              <div className="w-full bg-brand p-2 text-white">
                <h5 className="text-white font-bold">Faydaları</h5>

                <ul className="list-disc ml-3 md:ml-6 mt-2">
                  {supplement.benefits.map((value, index) => (
                    <li key={index}>{value}</li>
                  ))}
                </ul>
              </div>

              <div className="w-full bg-light p-2">
                <h5 className="font-bold">Kim Kullanmalı?</h5>

                <ul className="list-disc ml-3 md:ml-5 mt-2">
                  {supplement.whoShouldUse.map((value, index) => (
                    <li key={index}>{value}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 mt-2 gap-3 md:gap-12 px-6">
              <div className="py-2 px-4 shadow flex items-center gap-2 w-full dark:shadow-sm dark:shadow-darkest">
                <PillIcon className="text-brand" />
                <div>
                  <Title>Doz</Title>
                  <Text type="subtext">{supplement.dose}</Text>
                </div>
              </div>
              <div className="py-2 px-4 shadow flex items-center gap-2 dark:shadow-sm dark:shadow-darkest">
                <Clock10Icon className="text-brand" />
                <div>
                  <Title>Zamanlama</Title>
                  <Text type="subtext">{supplement.timing}</Text>
                </div>
              </div>
            </div>
            {/* footer */}
            <div className="border-t mt-10 pt-3 px-3 md:px-6 dark:border-mid">
              <Title size="md" className="font-medium">
                Öneriler
              </Title>

              <ul className="list-disc">
                {supplement.suggestions.map((value, index) => (
                  <li key={index} className="ml-6 dark:text-light">
                    {value}
                  </li>
                ))}
              </ul>
            </div>
            {/* footer end */}
          </Dialog.Panel>
        </div>
      </div>
    </Dialog>
  );
}
