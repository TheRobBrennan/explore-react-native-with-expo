import Section from "./Section";

// NOTE: You can use either:
// renderer.create(<App />) from  "react-test-renderer"
// or render(<App />) from "@testing-library/react-native"
import renderer from "react-test-renderer";
import { render } from "@testing-library/react-native";

describe("<Section />", () => {
  test("should render using react-test-renderer", () => {
    const result = renderer.create(<Section />).toJSON();
    expect(result).toBeDefined();
  });
  test("should render using render from @testing-library/react-native", () => {
    const result = render(<Section />);
    expect(result).toBeDefined();
  });
});
