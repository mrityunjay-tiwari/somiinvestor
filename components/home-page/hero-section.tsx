import React from "react";
import Link from "next/link";
import {ArrowRight} from "lucide-react";
import Image from "next/image";
import {TextEffect} from "@/components/motion-primitives/text-effect";
import {Variants} from "motion/react";
import BGGradient from "@/components/general/background";
import {AnimatedGroup} from "@/components/motion-primitives/animated-group";
import {LogoCloud} from "@/components/home-page/infinite-slider";
import {InfiniteSlider} from "@/components/motion-primitives/infinite-slider";
import {Button} from "../ui/button";
import {Playpen_Sans, Roboto, Roboto_Mono, Rubik} from "next/font/google";
import {cn} from "@/lib/utils";

const transitionVariants: {item: Variants} = {
  item: {
    hidden: {
      opacity: 0,
      filter: "blur(12px)",
      y: 12,
    },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: {
        type: "spring",
        bounce: 0.3,
        duration: 1.5,
      },
    },
  },
};

const playpen = Playpen_Sans({
  variable: "--font-shadow",
  weight: "300",
  style: "normal",
});

const roboto = Rubik({
  variable: "--font-shadow",
  weight: "300",
  style: "normal",
});

export default function HeroSection() {
  return (
    <>
      <BGGradient>

      <main className="overflow-hidden bg-white">
        <section className="relative overflow-hidden">
          <div
            aria-hidden
            className="absolute inset-0 isolate hidden opacity-65 contain-strict lg:block"
          >
            <div className="w-140 h-320 -translate-y-87.5 absolute left-0 top-0 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(0,0%,85%,.08)_0,hsla(0,0%,55%,.02)_50%,hsla(0,0%,45%,0)_80%)]" />
            <div className="h-320 absolute left-0 top-0 w-60 -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.06)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)] [translate:5%_-50%]" />
            <div className="h-320 -translate-y-87.5 absolute left-0 top-0 w-60 -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.04)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)]" />
          </div>

          <div className="relative pt-24 md:pt-36">
            <AnimatedGroup
              variants={{
                container: {
                  visible: {
                    transition: {
                      delayChildren: 1,
                    },
                  },
                },
                item: {
                  hidden: {
                    opacity: 0,
                    y: 20,
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      type: "spring",
                      bounce: 0.3,
                      duration: 2,
                    },
                  },
                },
              }}
              className="mask-b-from-35% mask-b-to-90% absolute inset-0 top-56 -z-20 lg:top-32"
            >
              <h1></h1>
            </AnimatedGroup>
            <div
              aria-hidden
              className="absolute inset-0 -z-10 size-full [background:radial-gradient(125%_125%_at_50%_100%,transparent_0%,var(--color-background)_75%)]"
            />

            <div
              aria-hidden
              className="absolute inset-0 -mx-4 rounded-3xl p-3 z-0 pointer-events-none mt-28 w-4/5 justify-self-center h-auto bg-transparent"
            >
              <div className="relative flex bg-transparent overflow-hidden">
                {/* subtle radial overlay */}
                <div className="bg-radial-[at_99%_5%] to-background z-1 -inset-17 absolute from-transparent to-73% rounded-r-2xl" />

                <InfiniteSlider
                  speedOnHover={20}
                  speed={40}
                  gap={20}
                  className="w-full bg-transparent rounded-2xl"
                >
                  {/* If you see Next/Image errors, see troubleshooting below */}
                  <Image
                    className="hidden dark:block"
                    src="https://images.unsplash.com/photo-1531973576160-7125cd663d86?fm=jpg&q=60&w=3000"
                    alt="Corporate office"
                    width={550}
                    height={300}
                    unoptimized
                  />
                  <Image
                    className="dark:hidden"
                    src="https://plus.unsplash.com/premium_photo-1682144748274-add3d8ed04ea?fm=jpg&q=60&w=3000"
                    alt="Factory view"
                    width={550}
                    height={300}
                    unoptimized
                  />
                  <Image
                    className="dark:hidden"
                    src="https://plus.unsplash.com/premium_photo-1661946269491-a0e139d76609?fm=jpg&q=60&w=3000"
                    alt="Conveyor belts"
                    width={550}
                    height={300}
                    unoptimized
                  />
                  <Image
                    className="dark:hidden"
                    src="https://plus.unsplash.com/premium_photo-1661929223913-e1f444a13422?fm=jpg&q=60&w=3000"
                    alt="Factory floor"
                    width={550}
                    height={300}
                    unoptimized
                  />
                </InfiniteSlider>
              </div>
            </div>

            <div className="relative mx-auto max-w-7xl px-6 ">
              <div className="text-center sm:mx-auto lg:mr-auto lg:mt-0 ">
                <AnimatedGroup variants={transitionVariants}>
                  <Link
                    href="/contact"
                    className="hover:bg-background dark:hover:border-t-border bg-muted group mx-auto flex w-fit items-center gap-4 rounded-full border p-1 pl-4 shadow-md shadow-zinc-950/5 transition-colors duration-300 dark:border-t-white/5 dark:shadow-zinc-950"
                  >
                    <span className="flex gap-2 items-center justify-center">
                      <div className="relative w-3 h-3 flex items-center justify-center">
                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-400 animate-in z-10 absolute justify-self-center"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-300 animate-[ping_1.5s_ease-in-out_infinite] absolute justify-self-center"></div>
                      </div>

                      <div className="flex items-center gap-0.5 text-foreground text-sm">
                        An ISO 9001 Company{" "}
                      </div>
                    </span>
                    {/* <span className="text-foreground text-sm">
                                            An ISO 9001 Company
                                            
                                            </span> */}
                    <span className="dark:border-background block h-4 w-0.5 border-l bg-white dark:bg-zinc-700"></span>

                    <div className="bg-background group-hover:bg-muted size-6 overflow-hidden rounded-full duration-500">
                      <div className="flex w-12 -translate-x-1/2 duration-500 ease-in-out group-hover:translate-x-0">
                        <span className="flex size-6">
                          <ArrowRight className="m-auto size-3" />
                        </span>
                        <span className="flex size-6">
                          <ArrowRight className="m-auto size-3" />
                        </span>
                      </div>
                    </div>
                  </Link>
                </AnimatedGroup>

                <TextEffect
                  preset="fade-in-blur"
                  speedSegment={0.3}
                  as="h1"
                  className={cn(
                    `mx-auto mt-8 max-w-4xl text-balance text-5xl max-md:font-semibold md:text-7xl lg:mt-16 xl:text-[5.25rem], ${roboto.className}`
                  )}
                >
                  Somi Conveyor Beltings Ltd.
                </TextEffect>
                <TextEffect
                  per="line"
                  preset="fade-in-blur"
                  speedSegment={0.3}
                  delay={0.5}
                  as="p"
                  className="mx-auto mt-8 max-w-2xl text-balance text-lg"
                >
                  No. 1 in creative bussiness, Working for your success in real
                  !
                </TextEffect>
                <div className="mt-7">
                  <Button
                    size={"lg"}
                    className="rounded-full text-white bg-linear-to-r from-slate-900 to-yellow-400 hover:from-yellow-400 hover:to-slate-900 transform transition duration-700 ease-in-out font-medium"
                  >
                    {" "}
                    Get in Touch <ArrowRight className="animate-pulse" />
                  </Button>
                </div>
                {/* <AnimatedGroup
                                      variants={{
                                          container: {
                                              visible: {
                                                  transition: {
                                                      staggerChildren: 0.05,
                                                      delayChildren: 0.75,
                                                  },
                                              },
                                          },
                                          ...transitionVariants,
                                      }}
                                      className="mt-12 flex flex-col items-center justify-center gap-2 md:flex-row"> */}
                {/* <div
                                          key={1}
                                          className="bg-foreground/10 rounded-[calc(var(--radius-xl)+0.125rem)] border p-0.5">
                                          
                                            <Button
                                                asChild
                                                size="lg"
                                                className="rounded-xl px-5 text-base">
                                                  <Link href="#link">
                                                      <span className="text-nowrap">Login</span>
                                                  </Link>
                                            </Button>
                                      </div> */}
                {/* <Button
                                          key={2}
                                          asChild
                                          size="lg"
                                          variant="ghost"
                                          className="h-10.5 rounded-xl px-5">
                                          <Link href="https://eny1dtmcsa.ufs.sh/f/u8y7IgAVRiC1KrxnqqjLI09HGfdvhVblPzKkJrTSBtF2WwmE" target='_blank'>
                                              <span className="text-nowrap">Video demo</span>
                                          </Link>
                                      </Button> */}
                {/* </AnimatedGroup> */}
              </div>
            </div>

            {/* What we offer */}
            <div className="mt-8">
              <LogoCloud />
            </div>

            {/* <AnimatedGroup
                            variants={{
                                container: {
                                    visible: {
                                        transition: {
                                            staggerChildren: 0.05,
                                            delayChildren: 0.75,
                                        },
                                    },
                                },
                                ...transitionVariants,
                            }}>
                            <div className="mask-b-from-55% relative -mr-56 mt-8 overflow-hidden px-2 sm:mr-0 sm:mt-12 md:mt-20">
                                <div className="inset-shadow-2xs ring-background dark:inset-shadow-white/20 bg-background relative mx-auto max-w-6xl overflow-hidden rounded-2xl border p-4 shadow-lg shadow-zinc-950/15 ring-1">
                                    <Image
                                        className="bg-background aspect-15/8 relative hidden rounded-2xl dark:block"
                                        src="https://plus.unsplash.com/premium_photo-1681422570054-9ae5b8b03e46?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dW5zcGxhc2glMjBhcHB8ZW58MHx8MHx8fDA%3D"
                                        alt="app screen"
                                        width="2700"
                                        height="1440"
                                    />
                                    <Image
                                        className="z-2 border-border/25 aspect-15/8 relative rounded-2xl border dark:hidden"
                                        src="https://plus.unsplash.com/premium_photo-1681422570054-9ae5b8b03e46?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dW5zcGxhc2glMjBhcHB8ZW58MHx8MHx8fDA%3D"
                                        alt="app screen"
                                        width="2700"
                                        height="1440"
                                    />
                                </div>
                            </div>
                        </AnimatedGroup> */}
          </div>
        </section>

        {/* <section className="bg-background pb-16 pt-16 md:pb-32">
                    <div className="group relative m-auto max-w-5xl px-6">
                        <div className="absolute inset-0 z-10 flex scale-95 items-center justify-center opacity-0 duration-500 group-hover:scale-100 group-hover:opacity-100">
                            <Link
                                href="/"
                                className="block text-sm duration-150 hover:opacity-75">
                                <span> Meet Our Customers</span>

                                <ChevronRight className="ml-1 inline-block size-3" />
                            </Link>
                        </div>
                        <div className="group-hover:blur-xs mx-auto mt-12 grid max-w-2xl grid-cols-4 gap-x-12 gap-y-8 transition-all duration-500 group-hover:opacity-50 sm:gap-x-16 sm:gap-y-14">
                            <div className="flex">
                                <Image
                                    className="mx-auto h-5 w-fit dark:invert"
                                    src="https://html.tailus.io/blocks/customers/nvidia.svg"
                                    alt="Nvidia Logo"
                                    height="20"
                                    width="20"
                                />
                            </div>

                            <div className="flex">
                                <Image
                                    className="mx-auto h-4 w-fit dark:invert"
                                    src="https://html.tailus.io/blocks/customers/column.svg"
                                    alt="Column Logo"
                                    height="16"
                                    width="16"
                                />
                            </div>
                            <div className="flex">
                                <Image
                                    className="mx-auto h-4 w-fit dark:invert"
                                    src="https://html.tailus.io/blocks/customers/github.svg"
                                    alt="GitHub Logo"
                                    height="16"
                                    width="16"
                                />
                            </div> 
                            <div className="flex">
                                <Image
                                    className="mx-auto h-5 w-fit dark:invert"
                                    src="https://html.tailus.io/blocks/customers/nike.svg"
                                    alt="Nike Logo"
                                    height="20"
                                    width="20"
                                />
                            </div>
                            <div className="flex">
                                <Image
                                    className="mx-auto h-5 w-fit dark:invert"
                                    src="https://html.tailus.io/blocks/customers/lemonsqueezy.svg"
                                    alt="Lemon Squeezy Logo"
                                    height="20"
                                    width="20"
                                />
                            </div>
                            <div className="flex">
                                <Image
                                    className="mx-auto h-4 w-fit dark:invert"
                                    src="https://html.tailus.io/blocks/customers/laravel.svg"
                                    alt="Laravel Logo"
                                    height="16"
                                    width="16"
                                />
                            </div>
                            <div className="flex">
                                <Image
                                    className="mx-auto h-7 w-fit dark:invert"
                                    src="https://html.tailus.io/blocks/customers/lilly.svg"
                                    alt="Lilly Logo"
                                    height="28"
                                    width="28"
                                />
                            </div>

                            <div className="flex">
                                <Image
                                    className="mx-auto h-6 w-fit dark:invert"
                                    src="https://html.tailus.io/blocks/customers/openai.svg"
                                    alt="OpenAI Logo"
                                    height="24"
                                    width="24"
                                />
                            </div>
                        </div>
                    </div>
                </section> */}
      </main>

      </BGGradient>
    </>
  );
}
