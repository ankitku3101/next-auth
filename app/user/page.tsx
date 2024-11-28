import { Appbar } from "@/components/Appbar"
import { getServerSession } from "next-auth"



export default async function () {
    const session = await getServerSession()
    
    return <div className="text-center p-2">
        <Appbar />
        User Component: <br/>  
        {JSON.stringify(session)}
    </div>
}