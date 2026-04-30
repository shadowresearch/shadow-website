"use client";

import { useState } from "react";
import { SubscribeModal } from "./SubscribeModal";

export function TopBanner() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="bg-[#7489A3] text-white">
        <div className="max-w-[1425px] mx-auto px-8 md:px-16 py-2 flex items-center justify-center gap-3 text-[12px]">
          <span className="hidden sm:inline text-white/75">
            New from Shadow —
          </span>
          <span className="text-white">
            Weekly narrative reports, straight to your inbox.
          </span>
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="inline-flex items-center gap-1 font-medium text-white border-b border-white/50 hover:border-white pb-px transition-colors"
          >
            Subscribe
            <span aria-hidden="true">→</span>
          </button>
        </div>
      </div>
      <SubscribeModal open={open} onClose={() => setOpen(false)} />
    </>
  );
}
