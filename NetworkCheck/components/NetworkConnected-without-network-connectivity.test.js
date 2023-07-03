import NetworkConnected from "./NetworkConnected";

// NOTE: You can use either:
// renderer.create(<App />) from  "react-test-renderer"
// or render(<App />) from "@testing-library/react-native"
import renderer from "react-test-renderer";
import { render } from "@testing-library/react-native";

// Simulate network connectivity when importing @react-native-community/netinfo
jest.mock("@react-native-community/netinfo", () => ({
  ...jest.requireActual("@react-native-community/netinfo"),
  // Mock the useNetInfo() hook
  useNetInfo: () => ({
    isConnected: false,
    isInternetReachable: false,
    type: "",
  }),
}));

describe("NetworkConnected WITHOUT network connectivity", () => {
  const mockProps = { connectionDetails: "MOCK connection details" };

  afterAll(() => {
    jest.resetModules();
  });

  test("should render using react-test-renderer", () => {
    const result = renderer
      .create(<NetworkConnected {...mockProps} />)
      .toJSON();
    expect(result).toBeDefined();
  });
  test("should render using render from @testing-library/react-native", () => {
    const result = render(<NetworkConnected {...mockProps} />);
    expect(result).toBeDefined();
  });
});
