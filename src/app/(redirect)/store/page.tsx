"use server";

import { redirect } from "next/navigation";

const Redirect = async () => redirect("https://store.socis.ca");

export default Redirect;
