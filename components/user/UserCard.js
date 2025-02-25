import Link from "next/link";
import ReactMarkdown from "react-markdown";
import { abbreviateNumber } from "js-abbreviation-number";
import FallbackImage from "../FallbackImage";

export default function UserCard({ profile }) {
  return (
    <Link
      href={`/${profile.username}`}
      className="flex flex-col items-center border-2 max-w-[14rem] h-[17rem] overflow-hidden rounded-lg border-gray-200 p-4 gap-3 hover:border-orange-600"
    >
      <div className="flex justify-center">
        <FallbackImage
          src={profile.avatar}
          alt={`Profile picture of ${profile.name}`}
          width={80}
          height={80}
          className="rounded-full"
          fallback={profile.name}
        />
        {profile.displayStatsPublic && (
          <div class="relative">
              <div
                id="card-views"
                className="absolute inline-block h-5 top-0 bottom-auto translate-x-2/4  rotate-0 skew-x-0 skew-y-0 scale-x-100 scale-y-100 py-1 px-1.5 text-xs leading-none text-center whitespace-nowrap align-baseline font-bold bg-orange-600 text-black rounded-full z-10"
              >
                {abbreviateNumber(profile.views)}
              </div>
            </div>
          )}
      </div>
      <div>
        <h3 className="text-xl justify-center text-center text-orange-600 font-bold mb-2">
          {profile.name}
        </h3>
        <ReactMarkdown className="text-center">{profile.bio}</ReactMarkdown>
      </div>
    </Link>
  );
}
