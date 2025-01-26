"use client";

import { createLink } from "@/app/actions/create-link";
import { verifyLink } from "@/app/actions/verify-link";
import Button from "@/app/components/ui/button";
import TextInput from "@/app/components/ui/text-input";
import { sanitizeLink } from "@/app/lib/utils";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export default function CreateLinkForm() {
  const router = useRouter();

  const searchParams = useSearchParams();
  
  const [link, setLink] = useState(
    sanitizeLink(searchParams.get("link") || "")
  );

  const [error, setError] = useState("");

  function handleLinkChange(e: React.ChangeEvent<HTMLInputElement>) {
    setLink(sanitizeLink(e.target.value));
    setError("");
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
   
    if (link.length === 0) return setError("Choose a link first :)");
    
    const isLinkTaken = await verifyLink(link);

    if (isLinkTaken) return setError("Sorry, this link is already in use..");
   
    const isLinkCreated = await createLink(link);

    if (!isLinkCreated)
      return setError("Error creating profile. Please try again.");

    router.push(`/${link}`);
  }
  return (
    <>
      <form onSubmit={handleSubmit} className="w-full flex items-center gap-2">
        <span>projectinbio.com/</span>
        <TextInput value={link} onChange={handleLinkChange} />
        <Button className="w-[126px]">Create</Button>
      </form>
      <div>
        <span className="text-accent-pink">{error}</span>
      </div>
    </>
  );
}