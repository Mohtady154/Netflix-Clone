"use client"

import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";
import { SiGithub } from "react-icons/si";

export default function GithubSignInButton() {
  return (
       <Button onClick={()=>signIn("github")} variant="outline" size = "icon">
            <SiGithub className="w-4 h-4" />
        </Button>
  );
}