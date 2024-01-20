import { getInfo } from "@/sanity/sanity-utils";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const infoList = await getInfo();
  console.log("🚀 ~ file: page.tsx:7 ~ Home ~ infoList:", infoList);

  return (
    <div className="max-w-5xl mx-auto py-20 px-4">
      <h1 className="text-7xl font-extrabold">
        <span className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent">
          PROTOTYPIC
        </span>
      </h1>

      <p className="mt-3 text-xl text-gray-600 p-2">
        Placeholder text in case it looks good
      </p>

      <h2 className="mt-24 font-bold text-gray-700 text-3xl">
        Placeholder Title - (Info served from Sanity CMS){" "}
      </h2>
      <div className="mt-5 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {infoList.map((info) => (
          <Link
            href={`/info/${info.slug}`}
            key={info._id}
            className="border-2 border-gray-500 rounded-xl p-3 hover:scale-105 hover:border-blue-500 transition"
          >
            {info.image && (
              <Image
                src={info.image}
                alt={info.alt}
                width={750}
                height={300}
                className="object-cover rounded-lg border-gray-500"
              ></Image>
            )}
            <div className="mt-2 bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent">
              {info.name}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
