import Image from "next/image";
import { type User } from "next-auth";

export const UserCard = (props: { user: User }): JSX.Element => {
    return (
      <div className="flex h-80 w-full flex-1 flex-col items-center justify-center gap-2 rounded-xl border-2 border-neutral-700/50 bg-secondary p-6 min-w-64">
        <Image
          src={props.user.image}
          alt={`Image of ${props.user.name}`}
          className="h-28 w-28 rounded-full"
          width={500}
          height={500}
        />
  
        <div className="flex flex-col items-center justify-center text-center">
          <h1 className="text-xl font-semibold text-white">{props.user.name}</h1>
          <p className="text-sm font-thin text-white">{props.user.email}</p>
  
          <div className="mt-3 flex flex-wrap items-center justify-center gap-1.5">
            {props.user.roles.slice(1).map((role) => (
              <p className="w-fit rounded-md border border-primary bg-emerald-950/50 px-2 py-1 text-xs font-thin text-white">
                {role}
              </p>
            ))}
          </div>
        </div>
      </div>
    );
  }
  