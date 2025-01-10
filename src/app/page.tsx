import IntroSlide from "./components/intro-slide";
import { LinkPreview } from "./components/ui/link-preview";

export default function Home() {
  return (
    <div className="flex min-h-screen font-[family-name:var(--font-geist-sans)]">
      <div className="basis-1/2 min-h-full flex flex-col justify-center border-2">
        <IntroSlide />
      </div>
      <div className="basis-1/2 min-h-full flex flex-col justify-center border-2">
        <h3>
          I love
          <LinkPreview
            url="https://projectluna.space"
            imageSrc="/luna.webp"
            isStatic
            className="font-bold"
          >
            building
          </LinkPreview>
          <LinkPreview
            url="https://projectgreen.world"
            imageSrc="/pgw.webp"
            isStatic
            className="font-bold"
          >
            websites
          </LinkPreview>
          .
        </h3>
      </div>
    </div>
  );
}
