import { render, screen } from "@testing-library/react";
import UserServer, { getServerSideProps } from "../../pages/user-server";
import { api } from "../../services/api";
import { mocked } from "ts-jest/utils";

jest.mock("../../services/api");

const fakeDataUser = {
  login: "henriqueweiand",
  id: 123456,
  avatar_url: "https://via.placeholder.com/100",
  name: "henrique weiand",
};

describe("UserServer component", () => {
  it("should render component", () => {
    render(<UserServer data={fakeDataUser} />);

    expect(screen.getByText(fakeDataUser.login)).toBeInTheDocument();
    expect(screen.getByText(fakeDataUser.name)).toBeInTheDocument();
  });

  it("loads initial data", async () => {
    const apiGetMocked = mocked(api.get);

    apiGetMocked.mockResolvedValueOnce({ data: fakeDataUser });
    const response = await getServerSideProps({} as any);

    expect(response).toEqual(
      expect.objectContaining({
        props: { data: fakeDataUser },
      })
    );
  });
});
