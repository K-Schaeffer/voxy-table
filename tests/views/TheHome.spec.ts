import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/vue";
import userEvent from "@testing-library/user-event";

import TheHome from "../../src/views/TheHome.vue";

describe("TheHome view", () => {
  it("renders table according to filters", async () => {
    render(TheHome);

    const input = screen.getByRole("textbox");

    await userEvent.type(input, "Franecki-Col");

    expect(screen.getAllByRole("row").length).toBe(2);
    expect(
      screen.getByRole("row", {
        name: "jclemow0@psu.edu Jo ann Clemow Franecki-Collier 665-939-9069 721",
      })
    ).toBeInTheDocument();
  });
});
