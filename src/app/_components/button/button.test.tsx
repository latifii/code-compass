import { describe } from "node:test";
import { render, screen } from "@testing-library/react";
import { Button } from ".";

describe("Button Component", () => {
  test("renders a default button", () => {
    const { getByText } = render(<Button>Click here</Button>);
    expect(getByText("Click here")).toBeInTheDocument();
  });

  test("disable the button when isDisabled prop is true", () => {
    render(<Button isDisabled={true}>Click here</Button>);
    expect(screen.getByRole("button")).toBeDisabled();
  });

  test("applies the correct css class for different button variants", () => {
    const { rerender } = render(<Button variant="primary">Click here</Button>);
    expect(screen.getByRole("button")).toHaveClass("btn-primary");

    rerender(<Button variant="info">Click here</Button>);
    expect(screen.getByRole("button")).toHaveClass("btn-info");
  });

  test("applies the correct css class for different button sizes", () => {
    const { rerender } = render(<Button size="tiny">Click here</Button>);
    expect(screen.getByRole("button")).toHaveClass("btn-xs");

    rerender(<Button size="small">Click here</Button>);
    expect(screen.getByRole("button")).toHaveClass("btn-sm");

    rerender(<Button size="large">Click here</Button>);
    expect(screen.getByRole("button")).toHaveClass("btn-lg");
  });

  test("applies the correct css class for different button shapes", () => {
    const { rerender } = render(<Button shape="wide">Click here</Button>);
    expect(screen.getByRole("button")).toHaveClass("btn-wide");

    rerender(<Button shape="full">Click here</Button>);
    expect(screen.getByRole("button")).toHaveClass("btn-block");

    rerender(<Button shape="square">Click here</Button>);
    expect(screen.getByRole("button")).toHaveClass("btn-square");
  });

  test("applies the outline class when isOutline prop is true", () => {
    render(<Button isOutline={true}>Click here</Button>);
    expect(screen.getByRole("button")).toHaveClass("btn-outline");
  });

  test("applies the link class when isLink prop is true", () => {
    render(<Button isLink={true}>Click here</Button>);
    expect(screen.getByRole("button")).toHaveClass("btn-link");
  });

  test("applies the animated-icon class when animatedIcon prop is true", () => {
    render(<Button animatedIcon={true}>Click here</Button>);
    expect(screen.getByRole("button")).toHaveClass("animated-icon");
  });

  test("shows loading text when isLoading prop is true", () => {
    render(
      <Button isLoading={true} loadingText="Loading...">
        Click here
      </Button>
    );
    expect(screen.getByRole("button")).toHaveTextContent("Loading...");
  });

  test("disables pointer events and reduces opacity when isLoading prop is true", () => {
    render(<Button isLoading={true}>Click here</Button>);
    const button = screen.getByRole("button");
    expect(button).toHaveClass("pointer-events-none");
    expect(button).toHaveClass("opacity-70");
  });
});
