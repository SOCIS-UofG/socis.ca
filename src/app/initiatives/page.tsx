"use server";

import { redirect } from "next/navigation";

const Redirect = async () => redirect("https://initiatives.socis.ca");

export default Redirect;
