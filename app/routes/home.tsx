/*
this is the home page using tsx file (TypeScript and UI like HMTL)
 */

import type { Route } from "./+types/home";
import Navbar from "~/components/Navbar";
import {resumes} from "~/constants";
import ResumeCard from "~/components/ResumeCard";
export function meta({}: Route.MetaArgs) {
  return [
    { title: "Resumind" },
    { name: "description", content: "Smart feedback for your dream job!" },
  ];
}

//home page function that contains navigation bar that you can upload your resume and some examples of resumes

//{} means render which means React creates or updates UI elements
//.map means it loops over each objects in an array
// (resume) => (...) means: “For each resume in the array, return this JSX
export default function Home() {
    return <main className="bg-[url('/images/bg-main.svg')] bg-cover">
      <Navbar>
      </Navbar>
      <section className="main-section">
        <div className="page-heading">
          <h1>Track Your Applications & Resume Ratings</h1>
          <h2>Review your submissions and check AI-powered feedback</h2>
        </div>
      </section>
      {resumes.length > 0 && (
          //div is container in HTML form like this webpage contains the following:
          <div className="resumes-section">
            {resumes.map((resume) => (
                <ResumeCard key={resume.id} resume={resume}></ResumeCard>
            ))}
          </div>
      )}
    </main>
}
