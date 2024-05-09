"use server";

import { redirect } from "next/navigation";

const Redirect = async () => redirect("https://account.socis.ca");

export default Redirect;
