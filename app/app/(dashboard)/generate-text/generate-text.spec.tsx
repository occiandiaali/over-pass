import { render, screen } from "@testing-library/react";
import AIFeat from "./page";

describe("<AIFeat />", () => {
  it("should render the page", () => {
    const { container } = render(<AIFeat />);

    expect(
      screen.getByRole("heading", { name: /Ad from product description/i })
    ).toBeTruthy();
  });
});
