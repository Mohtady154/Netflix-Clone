import { getServerSession } from "next-auth";
import Navbar from "../components/Navbar";
import { authOptions } from "../utils/auth";

export default async function HomePage() {
      const session = await getServerSession(authOptions);
      console.log(session?.user?.name);
    return <>
        <Navbar />
        <p>Hello authentacated user</p>
    </>
}