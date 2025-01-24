"use client";

import Button from "@/app/components/ui/button";
import Modal from "@/app/components/ui/modal";
import { useState } from "react";
import TextArea from "@/app/components/ui/text-area";
import TextInput from "@/app/components/ui/text-input";
import { ArrowUpFromLine, Plus } from "lucide-react";

export default function NewProject({ profileId }: { profileId: string }) {

  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  return (
    <>
      <button
        onClick={handleOpenModal}
        className="w-[340px] h-[132px] rounded-[20px] bg-background-secondary flex items-center gap-2 justify-center hover:border hover:border-dashed border-border-secondary"
      >
        <Plus className="size-10 text-accent-green" />
        <span>New Project</span>
      </button>

      <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <div className="bg-background-primary p-8 rounded-[20px] flex flex-col justify-between gap-10">
          <p className="text-white font-bold text-xl">New project</p>
          <div className="flex gap-10">
            <div className="flex flex-col items-center gap-3 text-xs">
              <div className="w-[100px] h-[100px] rounded-xl bg-background-tertiary overflow-hidden">
                <button className="w-full h-full">100x100</button>
              </div>

              <button className="text-white flex items-center gap-2">
                <ArrowUpFromLine className="size-4" />
                <span>Add image</span>
              </button>
              
              <input
                type="file"
                id="imageInput"
                accept="image/*"
                className="hidden"
              />
            </div>

            <div className="flex flex-col gap-4 w-[293px]">

              <div className="flex flex-col gap-1">
                <label htmlFor="project-name" className="text-white font-bold">
                  Project title
                </label>

                <TextInput
                  id="project-name"
                  placeholder="Enter the project name"
                />

              </div>

              <div className="flex flex-col gap-1">
                <label
                  htmlFor="project-description"
                  className="text-white font-bold"
                >
                  Description
                </label>

                <TextArea
                  id="project-description"
                  placeholder="Give a brief description of your project"
                  className="h-36"
                />

              </div>

              <div className="flex flex-col gap-1">
                <label htmlFor="project-url" className="text-white font-bold">
                  Project URL
                </label>

                <TextInput
                  type="url"
                  id="project-description"
                  placeholder="Enter the project URL"
                />
              </div>

            </div>
          </div>

          <div className="flex gap-4 justify-end">
            <button className="font-bold text-white">Back</button>
            <Button>Save</Button>
          </div>

        </div>
      </Modal>
    </>
  );
}