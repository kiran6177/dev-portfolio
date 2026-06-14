"use client";
import React from "react";
import Button from "../ui/Button/Button";
import { useRouter } from "next/navigation";

function Collaborate() {
  const router = useRouter();
  const handleNavigate = () => {
    router.push("/contact");
  };
  return (
    <div className="my-20 mx-8 bg-background-700/50 border-2 border-border-800 rounded-xl p-6 md:p-12 flex items-center justify-center">
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-center mb-2">
          Ready to <span className="text-gradient w-fit">Architect your System</span>?
        </h2>
        <p className="text-secondary w-[90%] md:w-[55%] text-center small-p">{`
          Whether you're building from first principles or scaling an existing architecture, let’s
          design and develop end-to-end systems — from intuitive, performant frontends to reliable,
          scalable backend services — built to hold under real-world scale`}
        </p>
        <Button variant="terminal" onClick={handleNavigate} className="mt-6">
          ~$CONNECT
        </Button>
      </div>
    </div>
  );
}

export default Collaborate;
