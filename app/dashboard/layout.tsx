import { ClerkLoaded } from "@clerk/nextjs"
import Header from "@/components/Header"

function layout({children}:{children: React.ReactNode}) {
  return (
    
        <ClerkLoaded>
      <div className="flex-1  flex flex-col h-screen">
        <Header />
        <main className="flex-1 overflow-auto">
           {children}
           </main>
      </div>
      </ClerkLoaded>
    
  )
}

export default layout
