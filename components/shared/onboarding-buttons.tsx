import React from "react";
import { Button } from "../ui/button";

export default function OnboardingButtons() {
  return (
    <div className="flex justify-between gap-4">
      <Button size="sm">Login</Button>
      <Button size="sm" variant="success">
        Registration
      </Button>
    </div>
  );
}
    