"use client";
import { ChangeEvent, useState } from "react";

export default function Home() {
  const [longUrl, setLongUrl] = useState<string>("");
  const [customUrl, setCustomUrl] = useState<string>("");
  const [generatedUrl, setGeneratedUrl] = useState<string>("");

  const handleGenerateButton = () => {
    setGeneratedUrl(longUrl);
  };

  const handleCopyButton = () => {
    navigator.clipboard.writeText(generatedUrl);
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-40">
      <div className="border rounded-3xl bg-lime-50 container w-auto font-sans p-8 grid gap-4">
        <div className="text-xl font-bold">Mini Link</div>

        <div>
          <span className="font-semibold">Enter your URL</span>
          <div>
            <input
              type="text"
              value={longUrl}
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                setLongUrl(e.target.value);
              }}
              className="pl-2 border w-full"
            />
          </div>
        </div>
        <div>
          <span className="font-semibold">Shortened URL</span>
          <div>
            <input
              type="text"
              value="mini.com/"
              disabled
              className="border pl-2 max-w-20"
            />
            <input
              type="text"
              placeholder="eg. mysite (Optional)"
              value={customUrl}
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                setCustomUrl(e.target.value);
              }}
              className="border"
            />
          </div>
        </div>
        <button
          className="border rounded-md bg-purple-50 py-4"
          onClick={handleGenerateButton}
        >
          Generate Link
        </button>
        <div>
          <span className="font-semibold">Result</span>
          <div>
            <input
              type="text"
              value={generatedUrl}
              disabled
              className="pl-2 border w-4/5"
            />
            <button
              className="border bg-purple-50 w-1/5"
              onClick={handleCopyButton}
            >
              Copy
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
