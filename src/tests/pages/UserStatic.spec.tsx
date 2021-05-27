import { render, screen } from "@testing-library/react";
import UserStatic, { getStaticProps } from "../../pages/user-static";
import { api } from "../../services/api";
import { mocked } from "ts-jest/utils";

jest.mock("../../services/api");

const fakeDataUser = {
  login: "henriqueweiand",
  id: 123456,
  avatar_url: "https://via.placeholder.com/100",
  name: "henrique weiand",
};

describe("UserStatic component", () => {
  it("should render component", () => {
    render(<UserStatic data={fakeDataUser} />);

    expect(screen.getByText(fakeDataUser.login)).toBeInTheDocument();
    expect(screen.getByText(fakeDataUser.name)).toBeInTheDocument();
  });

  it("loads initial data", async () => {
    const apiGetMocked = mocked(api.get);

    apiGetMocked.mockResolvedValueOnce({ data: fakeDataUser });
    const response = await getStaticProps({});

    expect(response).toEqual(
      expect.objectContaining({
        props: { data: fakeDataUser },
      })
    );
  });
});
