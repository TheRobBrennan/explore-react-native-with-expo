import App from "./App";

// NOTE: You can use either:
// renderer.create(<App />) from  "react-test-renderer"
// or render(<App />) from "@testing-library/react-native"
import renderer from "react-test-renderer";
import { render } from "@testing-library/react-native";

// Simulate network connectivity when importing @react-native-community/netinfo
jest.mock("@react-native-community/netinfo", () => ({
  ...jest.requireActual("@react-native-community/netinfo"),
  // App.js is using the useNetInfo() hook, so we need to mock that out in this example
  useNetInfo: () => ({
    isConnected: true,
    isInternetReachable: true,
    type: "",
  }),
}));

describe("App WITH network connectivity", () => {
  afterAll(() => {
    jest.resetModules();
  });

  test("should render using react-test-renderer", () => {
    const result = renderer.create(<App />).toJSON();
    expect(result).toBeDefined();
  });
  test("should render using render from @testing-library/react-native", () => {
    const result = render(<App />);
    expect(result).toBeDefined();
  });
});
