import {Button} from "@/components/ui/button";

import {
  BrainCogIcon, EyeIcon, GlobeIcon, MonitorSmartphoneIcon, ServerCogIcon, ZapIcon,
  }
  from "lucide-react";
  import Image from "next/image";
  import Link from "next/link";




const features = [
  {
    title: "STORE YOUR PDF DOCUMENT",
    description: "Securely upload, store, and manage all your PDF documents in one place. Access them anytime, anywhere, with fast search, easy sharing, and robust encryption for peace of mind.",
    icon:GlobeIcon,
  },
  {
    title: "BLAZING FAST RESPONSES",
    description: "Experience lightning-quick processing and instant results, powered by optimized performance so you never have to wait.",
    icon:ZapIcon,
  },
  {
    title: "CHAT MEMORIZATION",
    description: "Our system remembers your past conversations, keeping context so every chat feels smarter, more personal, and instantly familiar.",
    icon:BrainCogIcon,
  },
  {
    title: "INTERACTIVE PDF VIEWER",
    description: "View, navigate, and interact with your PDFs seamlessly—zoom, search, highlight, and annotate without ever leaving your browser.",
    icon:EyeIcon,
  },
  {
    title: "CLOUD BACKUP",
    description: "Automatically back up your files to the cloud, ensuring they’re safe, accessible, and recoverable anytime from any device.",
    icon:ServerCogIcon,
  },
  {
    title: "RESPONSIVE ACROSS DEVICES",
    description: "Enjoy a seamless experience on any device—desktop, tablet, or mobile—with a design that adapts beautifully to every screen size.",
    icon: MonitorSmartphoneIcon,
  },
];

export default function Home() {
  return (
    
      <main className="flex-1 overflow scroll p-2 lg:p-5 bg-gradient-to-bl from-white to-indigo-600">
       <div className="bg-white py-24 sm:py-32 rounded-md drop-shadow-xl">
        <div className="flex flex-col justify-center items-center mx-auto max-w-7xl px-6 lg:px-8 ">
          <div className="mx-auto max-w-2xl sm: text-center">
            <h2 className="text-base font-semibold leading-7 text-indigo-600">
              YOUR INTERACTIVE DOCUMENT COMPANION 
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Transform Your PDFs into Interactive Conversations
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
            Introducing{" "}
            <span className=" font-bold text-indigo-600">Chat with PDF.</span>
             <br/>
            <br/> Upload your document, and our chatbot will answer
            questions, summarize content, and answer all your Qs. Ideal for everyone, <span className=" • text-indigo-600">
               Chat with PDF
            </span>{" "}
             turns static documents into{" "}
            <span className="font-bold">dynamic conversations</span>, 
               enhancing productivity 10x fold effortlessly.
            </p>
            </div>
            <Button asChild className="mt-10">
              <Link href="/dashboard">Get Started</Link>
            </Button>
            </div>
            <div className="relative overflow-hidden pt-16">
              <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <Image
                alt="App screenshot"
                src="https://i.imgur.com/VciRSTI.jpeg"
                width={2432} 
                height={1442}
                className="mE-[-0%] rounded-xl shadow-2xl ring-1
                 ring-gray-900/10"
                 /> 
                 <div aria-hidden="true" className="relative">
                  <div className="absolute bottom-0 -inset-x-32 bg-gradient-to-t from-white/95 pt-[5%]"/>

                 </div>
              </div>
            </div>
            <div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 md:mt-24 Lg:px-8">
              <dl className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6
                    gap-y-10 text-base leading-7 text-gray-600 sm:grid-cols-2
                    Lg:mx-0 Lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
                {features.map(feature => (

                  <div key={feature.title} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon 
                        aria-hidden="true"
                         className="absolute left-1 top-1 h-5 w-5
                         text-indigo-600"
                         />
                      </dt>

                      <dd>{feature.description}</dd>
                    
                  </div>
                ))}
              </dl>


            </div>
       </div>
      </main>
    
  );
}


