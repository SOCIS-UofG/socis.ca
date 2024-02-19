import { type User } from "next-auth";
import Image from "next/image";

export default function MemberCard(props: { user: User }): JSX.Element {
  return (
    <div className="flex h-72 w-60 flex-col items-center justify-center rounded-lg border border-primary bg-secondary duration-300 ease-in-out hover:scale-105 hover:shadow-md hover:shadow-emerald-700/50">
      <Image
        src={props.user.image}
        alt="Profile picture"
        className="h-32 w-32 rounded-full"
        width={500}
        height={500}
      />
      <h1 className="text-xl font-semibold text-white">{props.user.name}</h1>
      <p className="text-sm font-thin text-white">{props.user.email}</p>

      <div className="mt-3 flex flex-wrap items-center justify-center gap-3">
        {props.user.roles.slice(1).map((role) => (
          <div className="w-fit rounded-md border border-primary bg-emerald-950/50 px-2 py-1 text-xs font-thin text-white">
            {role}
          </div>
        ))}
      </div>
    </div>
  );
}
