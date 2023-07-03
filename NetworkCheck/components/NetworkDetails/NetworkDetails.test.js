import NetworkDetails from "./NetworkDetails";

// NOTE: You can use either:
// renderer.create(<App />) from  "react-test-renderer"
// or render(<App />) from "@testing-library/react-native"
import renderer from "react-test-renderer";
import { render } from "@testing-library/react-native";

describe("<NetworkDetails />", () => {
  const mockProps = { details: "MOCK details" };

  test("should render using react-test-renderer", () => {
    const result = renderer.create(<NetworkDetails {...mockProps} />).toJSON();
    expect(result).toBeDefined();
  });
  test("should render using render from @testing-library/react-native", () => {
    const result = render(<NetworkDetails {...mockProps} />);
    expect(result).toBeDefined();
  });
});
