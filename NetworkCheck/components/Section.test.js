import React from "react";
import renderer from "react-test-renderer";

import Section from "./Section";

describe("<Section />", () => {
  it("should render", () => {
    const tree = renderer.create(<Section />).toJSON();
    expect(tree).toBeDefined();
  });
});