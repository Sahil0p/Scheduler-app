import { useState } from "react";

export default function CopyLinkButton({ link }) {
  const [copied, setCopied] = useState(false);

  function copy() {
    navigator.clipboard.writeText(link);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <button
      onClick={copy}
      className="bg-black text-white px-4 py-2 rounded-lg text-sm w-full sm:w-auto"
    >
      {copied ? "Copied!" : "Copy"}
    </button>
  );
}