"use client";
import React from "react";
import { useFormStatus } from "react-dom";
const MealFormSubmission = () => {
  const { pending } = useFormStatus();
  return (
    <button type="submit" disabled={pending}>
      {pending ? "Submiting" : "Share Meal"}
    </button>
  );
};

export default MealFormSubmission;
