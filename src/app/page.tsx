"use client";

import { useState } from "react";

import { Input } from "@/components/ui/input"; // Assuming you have a UI component for input
import { Button } from "@/components/ui/button"; // Assuming you have a UI component for button
import { authClient } from "@/lib/auth-client";

export default function Home() {

  const { data: session} = authClient.useSession()


  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = () => {
    authClient.signUp.email({
      email,
      name,
      password,
    }, {
      onError: () => {
        window.alert("Something went wrong");
      },
      onSuccess: () => {
        window.alert("User created successfully");
      }
    });
  }

  const onLogin = () => {
    authClient.signIn.email({
      email,
      password,
    }, {
      onError: () => {
        window.alert("Something went wrong");
      },
      onSuccess: () => {
        window.alert("User created successfully");
      }
    });
  }

  if(session) {
    return (
      <div className="p-4">
        <p className="flex flex-col p-4 gap-y-4">You are logged in as {session.user.name}</p>
        <Button onClick={() => authClient.signOut()}>
          Sign Out
        </Button>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-y-10">
      <div className="p-4 flex flex-col gap-y-4">
      <Input 
         placeholder="name" 
         value={name} 
         onChange={(e) => setName(e.target.value)}
      />
      <Input 
         placeholder="email" 
         value={email} 
         onChange={(e) => setEmail(e.target.value)}
      />
      <Input 
         placeholder="password" 
         type="password" 
         value={password} 
         onChange={(e) => setPassword(e.target.value)}
      />
      <Button onClick={onSubmit}>
        Create User
      </Button>
    </div>

    <div className="p-4 flex flex-col gap-y-4">
      <Input 
         placeholder="email" 
         value={email} 
         onChange={(e) => setEmail(e.target.value)}
      />
      <Input 
         placeholder="password" 
         type="password" 
         value={password} 
         onChange={(e) => setPassword(e.target.value)}
      />
      <Button onClick={onLogin}>
        Login
      </Button>
    </div>
    </div>
  )
}
