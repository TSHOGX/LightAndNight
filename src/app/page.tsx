import { unstable_noStore as noStore } from "next/cache";
import Link from "next/link";
import Image from "next/image";

// import { CreatePost } from "~/app/_components/create-post";
import { CreateCard } from "~/app/_components/create-card";
import { getServerAuthSession } from "~/server/auth";
import { api } from "~/trpc/server";

export default async function Home() {
  noStore();
  // const hello = await api.post.hello.query({ text: "from tRPC" });
  const session = await getServerAuthSession();
  const cards = await api.card.getAll.query();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#dcdffc] to-[#babdfa] text-black">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
        {/* <h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem]">
          Create <span className="text-[hsl(280,100%,70%)]">T3</span> App
        </h1> */}

        {/* Thanks To */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
          <Link
            className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 hover:bg-white/20"
            href="https://weibo.com/u/7576045538"
            target="_blank"
          >
            <h3 className="text-2xl font-bold">@蓝咕咕图像站 →</h3>
            {/* <div className="text-lg">
              Just the basics - Everything you need to know to set up your
              database and authentication.
            </div> */}
          </Link>
          <Link
            className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 hover:bg-white/20"
            href="https://space.bilibili.com/28399376"
            target="_blank"
          >
            <h3 className="text-2xl font-bold">@爱玩游戏的Penny →</h3>
            {/* <div className="text-lg">
              Learn more about Create T3 App, the libraries it uses, and how to
              deploy it.
            </div> */}
          </Link>
        </div>

        {/* Log Info */}
        <div className="flex flex-col items-center gap-2">
          <p className="text-2xl text-white">
            {/* {hello ? hello.greeting : "Loading tRPC query..."} */}
          </p>

          <div className="flex flex-col items-center justify-center gap-4">
            <p className="text-center text-2xl text-white">
              {session && <span>Logged in as {session.user?.name}</span>}
            </p>
            <Link
              href={session ? "/api/auth/signout" : "/api/auth/signin"}
              className="rounded-full bg-white/10 px-10 py-3 font-semibold no-underline transition hover:bg-white/20"
            >
              {session ? "Sign out" : "Sign in"}
            </Link>
          </div>
        </div>

        <SubmitCard />

        {/* Gallary */}
        <div className=" grid grid-cols-2 gap-4 sm:grid-cols-4 md:gap-8">
          {cards.map((card) => (
            <div className=" " key={card.id}>
              <Link className="" href={`/card/${card.id}`}>
                {/* <img
                  className=" h-56 w-36 rounded-lg object-cover"
                  src={card.image}
                  alt={card.id}
                /> */}
                <Image
                  src={card.image}
                  alt="Picture of the author"
                  className=" rounded-lg object-cover" // h-56 w-36
                  width={144}
                  height={224}
                  // layout="responsive"
                  loading="lazy"
                />
              </Link>
            </div>
          ))}
        </div>

        {/* Foot */}
        <div className=" ">
          <Link
            className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 hover:bg-white/20"
            href="https://github.com/TSHOGX"
            target="_blank"
          >
            <div className=" text-sm">@TSHOGX</div>
          </Link>
        </div>
      </div>
    </main>
  );
}

async function SubmitCard() {
  const session = await getServerAuthSession();
  if (!session?.user) return null;

  // const latestPost = await api.post.getLatest.query();

  return (
    <div className="w-full max-w-xs">
      {/* {latestPost ? (
        <p className="truncate">Your most recent post: {latestPost.name}</p>
      ) : (
        <p>You have no posts yet.</p>
      )} */}

      {/* <CreatePost /> */}
      <CreateCard />
    </div>
  );
}
