import { render, screen } from "@testing-library/react";
import { Profile } from ".";

const mockData = {
  login: "henriqueweiand",
  id: 123456,
  avatar_url: "https://via.placeholder.com/100",
  name: "henrique weiand",
};

describe("Profile component", () => {
  it("should render component", () => {
    const { getByTestId } = render(<Profile user={mockData} />);

    expect(getByTestId("profile")).toBeInTheDocument();
  });

  it("should render component with validation props", () => {
    render(<Profile user={mockData} />);

    const image = screen.getByTestId("image");

    expect(image).toHaveProperty("src", mockData.avatar_url);
    expect(image).toHaveProperty("alt", mockData.name);

    expect(
      screen.getByText(new RegExp(mockData.name, "i"))
    ).toBeInTheDocument();

    expect(
      screen.getByText(new RegExp(mockData.login, "i"))
    ).toBeInTheDocument();
  });
});
