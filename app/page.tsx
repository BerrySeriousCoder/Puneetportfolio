import { ProjectCard } from "@/components/ProjectCard";
import { InstagramEmbed } from "@/components/InstagramEmbed";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black p-4 md:p-8 lg:p-12 uppercase">
      {/* Header Section */}
      <header className="flex flex-col lg:flex-row justify-between items-start w-full mb-16 lg:mb-32">
        <div className="w-full lg:w-1/2">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-none tracking-tighter mb-4">
            PUNEET MANN, CREATIVE <br /> DIRECTOR & DESIGNER
          </h1>
        </div>
        
        <div className="w-full lg:w-1/2 flex flex-col md:flex-row justify-between items-start mt-8 lg:mt-0 text-xs md:text-sm">
          <div className="w-full md:w-1/2 pr-4 mb-8 md:mb-0">
            <div className="mb-4 font-bold">[ * ] CLIENTS WORK</div>
          </div>
          
          <div className="w-full md:w-1/2 flex flex-col gap-8">
            <div>
              <div className="mb-4 font-bold">[ * ] CONTACT</div>
              <div className="flex flex-col gap-2">
                <a href="mailto:puneetsharma1335@gmail.com" className="hover:underline">
                  [ * ] PUNEETSHARMA1335@GMAIL.COM
                </a>
                <a href="tel:+917065703661" className="hover:underline tracking-widest">
                  [ * ] +91 7065703661
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
        
        {/* Left Column - GNH & Specifics */}
        <div className="flex flex-col gap-16">
          <section>
            <h2 className="text-xl font-bold mb-8 flex items-center border-b border-black pb-4">
              [ * ] GNH HOTELS & VENUES
            </h2>
            <div className="flex flex-col gap-2">
              <ProjectCard 
                title="GNH HOTELS (WEBSITE)" 
                roles="Full Visual Spectrum, Collaterals, Website Refinement" 
                link="https://www.gnhhotels.com/" 
              />
              <ProjectCard 
                title="ADOT GNH" 
                roles="Static & Carousel Content, Shoot Direction, Instagram Presence" 
                link="https://www.instagram.com/adotgnh/" 
              />
              <ProjectCard 
                title="NIKUNJ GNH" 
                roles="Instagram Presence & Shoot Direction" 
                link="https://www.instagram.com/nikunjgnh/" 
              />
              <ProjectCard 
                title="GNH CONVENTION" 
                roles="Instagram Presence & Shoot Direction" 
                link="https://www.instagram.com/gnhconvention/" 
              />
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-8 flex items-center border-b border-black pb-4">
              [ * ] MANISH MALHOTRA X ADOT
            </h2>
            <div className="mt-4">
              <InstagramEmbed url="https://www.instagram.com/p/DYUQXqRCDao/" />
            </div>
          </section>
        </div>

        {/* Right Column - Other Work */}
        <div className="flex flex-col gap-16">
          <section>
            <h2 className="text-xl font-bold mb-8 flex items-center border-b border-black pb-4">
              [ * ] SELECTED BRANDS
            </h2>
            <div className="flex flex-col gap-2">
              <ProjectCard 
                title="HOUSE OF MONERO" 
                roles="Branding, Statics, Carousels, Digital & Collateral Assets and Shoot Direction" 
                link="https://www.instagram.com/houseofmonero/" 
              />
              <ProjectCard 
                title="THE PRIMULAS" 
                roles="Statics, Carousels, Digital & Collateral Assets and Shoot Direction" 
                link="https://www.instagram.com/theprimulas/?hl=en" 
              />
              <ProjectCard 
                title="MEHARVILLAS DELHI" 
                roles="Statics, Carousels and Shoot Direction" 
                link="https://www.instagram.com/meharvillas_delhi/?hl=en" 
              />
              <ProjectCard 
                title="KATALYST WORLD" 
                roles="Digital & Collateral Assets" 
                link="https://www.instagram.com/katalystworld/" 
              />
              <ProjectCard 
                title="101 CIRCLE" 
                roles="Instagram Presence" 
                link="https://www.instagram.com/the101circle?igsh=MTVqazI2ZDVjaWlqOQ==" 
              />
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-8 flex items-center border-b border-black pb-4">
              [ * ] EXTRAS
            </h2>
            <div className="flex flex-col gap-2">
              <ProjectCard 
                title="COLLABOARD.IN" 
                roles="DLF Influencer Shoot Direction (for DLF Campaign Advertising)" 
                link="https://www.instagram.com/collaboard.in/" 
              />
            </div>
          </section>

          <section className="mt-8 border border-black p-8 text-sm">
            <p className="normal-case">
              Other work is confidential and on-progress to put online however it will be added here as soon as it gets live by the clients.
            </p>
          </section>
        </div>

      </div>
    </main>
  );
}
