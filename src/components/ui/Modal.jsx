import { XIcon, PillIcon, Clock10Icon } from "lucide-react";
import Title from "./Title";
import Text from "./Text";

import { Dialog } from "@headlessui/react";
import Badge from "./Badge";

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
          <Dialog.Panel className="w-full max-w-2xl bg-white dark:bg-dark py-6 shadow-2xl rounded-xl">
            {/* head */}
            <div className="flex justify-between items-center px-6">
              <Title size="lg">{supplement.name}</Title>
              <button onClick={() => setIsOpen(false)}>
                <XIcon size={32} className="dark:text-light" />
              </button>
            </div>
            {/* head end */}

            <div className="px-6 mt-2">
              <Title type="sm" className="!text-brand font-semibold">{supplement.recommendation}</Title>
              
              <div className="w-full flex justify-start items-center gap-2 mt-3">
                {supplement.tags.map((value, index) => (
                  <Badge key={index}>{value}</Badge>
                ))}
              </div>
            </div>

            <div className="w-full flex mt-6">
              <div className="w-full bg-brand px-3 py-3 md:px-6 text-white shadow">
                <h5 className="text-white font-bold">Faydaları</h5>

                <ul className="list-disc ml-4 md:ml-5 mt-2">
                  {supplement.benefits.map((value, index) => (
                    <li key={index} className="text-pretty">{value}</li>
                  ))}
                </ul>
              </div>

              <div className="w-full px-3 py-3 md:px-6 shadow">
                <h5 className="font-bold">Kim Kullanmalı?</h5>

                <ul className="list-disc ml-4 md:ml-5 mt-2">
                  {supplement.whoShouldUse.map((value, index) => (
                    <li key={index} className="text-pretty">{value}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 mt-6 gap-3 md:gap-12 px-6">
              <div className="py-2 px-4 shadow flex items-center gap-2 w-full dark:shadow-sm dark:shadow-darkest">
                <PillIcon className="text-brand"/>
                <div className="ml-3">
                  <Title className="font-normal">Doz</Title>
                  <Text className="text-mid">{supplement.dose}</Text>
                </div>
              </div>
              <div className="py-2 px-4 shadow flex items-center gap-2 dark:shadow-sm dark:shadow-darkest">
                <Clock10Icon className="text-brand" />
                <div className="ml-3">
                  <Title className="font-normal">Zamanlama</Title>
                  <Text className="text-mid">{supplement.timing}</Text>
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
