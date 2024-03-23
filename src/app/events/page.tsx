"use server";

import { redirect } from "next/navigation";

const Redirect = async () => redirect("https://events.socis.ca");

export default Redirect;
