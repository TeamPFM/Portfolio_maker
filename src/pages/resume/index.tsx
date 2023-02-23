import ResumeCreate from "@/components/resume/ResumeCreate";
import ResumeDelete from "@/components/resume/ResumeDelete";
import ResumeRead from "@/components/resume/ResumeRead";
import ResumeUpdate from "@/components/resume/ResumeUpdate";
import { FC, useState } from "react";

export type ResumeState = "RDefault" | "RUpdate";

const ResumePage = () => {
  const [resumState, setResumeState] = useState<ResumeState>("RDefault");

  return (
    <section className="w-screen h-screen">
      {resumState === "RDefault" && <ResumeRead />}
      {resumState === "RUpdate" && <ResumeUpdate />}
    </section>
  );
};

export default ResumePage;
