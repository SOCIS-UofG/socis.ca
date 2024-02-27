import { type User } from "next-auth";
import Image from "next/image";

export default function MemberCard(props: { user: User }): JSX.Element {
  return (
    <div className="flex h-80 w-full flex-col items-center justify-center gap-2 rounded-lg border border-primary bg-secondary p-6 duration-300 ease-in-out hover:scale-105 hover:shadow-md hover:shadow-emerald-700/50 sm:w-60">
      <Image
        src={props.user.image}
        alt="..."
        className="h-28 w-28 rounded-full"
        width={500}
        height={500}
      />

      <div className="flex flex-col items-center justify-center">
        <h1 className="text-xl font-semibold text-white">{props.user.name}</h1>
        <p className="text-sm font-thin text-white">{props.user.email}</p>

        <div className="mt-3 flex flex-wrap items-center justify-center gap-1.5">
          {props.user.roles.slice(1).map((role) => (
            <div className="w-fit rounded-md border border-primary bg-emerald-950/50 px-2 py-1 text-xs font-thin text-white">
              {role}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
