import { cn } from "@/lib/utils";
import IntroSlide from "./components/intro-slide";
import { BentoGridItem } from "./components/ui/bento-grid";
import Image from "next/image";
import { PinContainer } from "./components/ui/3d-pin";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* test */}
      <div className="flex xl:flex-row flex-col min-h-screen font-[family-name:var(--font-geist-sans)]">
        <div className="basis-1/2 min-h-screen flex flex-col justify-center">
          <IntroSlide />
        </div>
        <div className="basis-1/2 relative min-h-screen flex flex-col dark:bg-grid-white/[0.2] dark:bg-black">
          <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_10%,black)]"></div>
          <h1 className="text-2xl lg:text-4xl mt-6 lg:mt-auto text-center font-bold tracking-tighter">
            Projects!
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 overflow-hidden lg:grid-cols-3 mb-auto px-6">
            {bentoItems.map((item, i) => (
              <PinContainer
                // className="border-2 border-orange-400"
                key={i}
                href={item.href}
                title={item.title}
              >
                <BentoGridItem
                  title={item.title}
                  description={item.description}
                  header={item.header}
                  icon={item.icon}
                  className={cn(i == 3 ? "md:col-span-2" : "", "w-[15rem]")}
                />
              </PinContainer>
            ))}
          </div>
        </div>
        {/* <div className="h-[50rem] w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <p className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
          Backgrounds
        </p>
      </div> */}
      </div>
      <div className="flex flex-col min-h-screen font-[family-name:var(--font-geist-sans)]">
        <div className="max-w-6xl w-full mx-auto h-full px-6 py-2 my-6">
          <h1 className="text-2xl lg:text-4xl">About</h1>
          <p className="lg:prose-xl prose dark:prose-invert mt-6">
            I&apos;m currently a student at the University of Washington
            studying computer science! I love working on meaningful projects -
            whether that&apos;s for educating myself through learning new stuff
            such as{" "}
            <Link href="https://github.com/mjh316/sunshine">
              a simple interpreter
            </Link>{" "}
            or creating helpful tools for{" "}
            <Link href="https://github.com/mjh316/java-forbidden-code-checker">
              classes
            </Link>
            . I also love reading - if you&apos;ve recommendations for any genre
            but in particular mystery, fantasy, and realistic fiction, do feel
            free to let me know!
          </p>
        </div>
        <div className="flex flex-1 flex-col">
          <em className="text-center text-black">
            can you find the easter egg?
          </em>
        </div>
      </div>
    </>
  );
}

const Skeleton = ({ image }: { image: string }) => (
  <div
    className={cn(
      "flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-cover",
      image
    )}
  ></div>
);

const bentoItems = [
  {
    title: "Project Green World",
    description:
      "A project created to inform and educate people on how they could go green!",
    icon: (
      <Image
        width={32}
        height={32}
        src="https://www.projectgreen.world/favicon.ico"
        alt="Project Green World"
      />
    ),
    header: <Skeleton image={"bg-[url('/pgw.webp')]"} />,
    href: "https://www.projectgreen.world",
  },
  {
    title: "Project Luna",
    description:
      "Project Luna is a fictional company with the goal of providing anyone with the once-in-a-lifetime opportunity to explore humanity's last frontier: space.",
    icon: (
      <Image
        width={32}
        height={32}
        src="/favicon.svg"
        alt="Project Luna Favicon"
      />
    ),
    header: <Skeleton image={"bg-[url('/luna.webp')]"} />,
    href: "https://www.projectluna.space",
  },
  {
    title: "Competitive Programming Initiative",
    description:
      "Promoting competitive programming among students through resources, outreach, classes, and contests.",
    icon: (
      <Image
        width={32}
        height={32}
        src="https://joincpi.org/logo-square.png"
        alt="Competitive Programming Initiative Favicon"
      />
    ),
    header: <Skeleton image={"bg-[url('/cpi.webp')]"} />,
    href: "https://joincpi.org",
  },
  {
    title: "CerealCodes",
    description: "A competitive programming contest for students, by students.",
    icon: (
      <Image
        width={32}
        height={32}
        src="https://www.cerealcodes.org/bracketcs-icon.svg"
        alt="CerealCodes Favicon"
      />
    ),
    header: <Skeleton image={"bg-[url('/cc.webp')]"} />,
    href: "https://www.cerealcodes.org",
  },
];
