"use client"
import { ChakraProvider } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const router=useRouter();
  useEffect(()=>{
     router.push("/Home");
  },[]);
  return (
    <ChakraProvider>
      <div>this</div>
    </ChakraProvider>
  )
}
