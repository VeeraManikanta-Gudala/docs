import Link from "next/link";
import { Button } from "@/components/ui/button";
const Home=()=>{
  return (
    <div className="flex min-h-screen flex-row items-center justify-center">
      {/* <Button>Get Started</Button> */}

      <p> click <Link href="/documents/1234">here</Link> to go to Document</p>
    </div>
  );
}
export default Home;