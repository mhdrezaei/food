"use server";

import { redirect } from "next/navigation";
import { saveMeal } from "./meals";

export async function shareMeal(prevState, formData) {
  function validationData(value) {
    return !value || value.trim() === "";
  }
  const meal = {
    title: formData.get("title"),
    image: formData.get("image"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    creator: formData.get("creator"),
    creator_email: formData.get("email"),
  };

  if (
    validationData(meal.title) ||
    validationData(meal.summary) ||
    validationData(meal.instructions) ||
    validationData(meal.creator) ||
    validationData(meal.creator_email) ||
    !meal.creator_email.includes("@") ||
    !meal.image ||
    meal.image.size === 0
  ) {
    return {
      message: "Invalid Data",
    };
  }
  saveMeal(meal);
  redirect("/meals");
}
