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
          <Dialog.Panel className="w-full max-w-2xl rounded-xl bg-white py-6 shadow-2xl dark:bg-dark">
            {/* head */}
            <div className="flex items-center justify-between px-6">
              <Title size="lg">{supplement.name}</Title>
              <button onClick={() => setIsOpen(false)}>
                <XIcon size={32} className="dark:text-light" />
              </button>
            </div>
            {/* head end */}

            <div className="mt-2 px-6">
              <Title type="sm" className="font-semibold !text-brand">
                {supplement.recommendation}
              </Title>

              <div className="mt-3 flex w-full items-center justify-start gap-2">
                {supplement.tags.map((value, index) => (
                  <Badge className="font-medium" key={index}><span className="before:content-['+'] before:mr-1 px-2">{value}</span></Badge>
                ))}
              </div>
            </div>

            <div className="mt-6 flex w-full">
              <div className="w-full bg-brand px-3 py-3 text-white shadow md:px-6">
                <h5 className="font-bold text-white">Faydaları</h5>

                <ul className="ml-4 mt-2 list-disc md:ml-5">
                  {supplement.benefits.map((value, index) => (
                    <li key={index} className="text-pretty">
                      {value}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="w-full px-3 py-3 shadow md:px-6">
                <h5 className="font-bold">Kim Kullanmalı?</h5>

                <ul className="ml-4 mt-2 list-disc md:ml-5">
                  {supplement.whoShouldUse.map((value, index) => (
                    <li key={index} className="text-pretty">
                      {value}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-3 px-6 sm:grid-cols-2 md:gap-12">
              <div className="flex w-full items-center gap-2 px-4 py-2 shadow dark:shadow-sm dark:shadow-darkest">
                <PillIcon className="text-brand" />
                <div className="ml-3">
                  <Title className="font-normal">Doz</Title>
                  <Text className="text-mid">{supplement.dose}</Text>
                </div>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 shadow dark:shadow-sm dark:shadow-darkest">
                <Clock10Icon className="text-brand" />
                <div className="ml-3">
                  <Title className="font-normal">Zamanlama</Title>
                  <Text className="text-mid">{supplement.timing}</Text>
                </div>
              </div>
            </div>
            {/* footer */}
            <div className="mt-10 border-t px-3 pt-3 dark:border-mid md:px-6">
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
