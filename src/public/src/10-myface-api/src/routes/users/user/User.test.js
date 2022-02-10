import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { Link } from "react-router-dom";
import { User } from "./User";

test("renders message", () => {
  // Arrange
  const user = {
    name: "ALing",
    profileImageUrl: "Profile Image url",
    email: "ling@softwire.com",
    // postedBy: {
    //   name: "User name",
    // },
  };

  // Act
  render(<User user={user} />);
  const nameElement = screen.getByText(/ALing/i);
  const ImageElement = screen.getByText(/Profile Image url/i);
  const EmailElement = screen.getByText(/ling@softwire.com/i);

  // Assert
  expect(nameElement).toBeInTheDocument();
  expect(ImageElement).toBeInTheDocument();
  expect(EmailElement).toBeInTheDocument();
});

test("matches snapshot", () => {
  // Arrange
  const user = {
    name: "ALing",
    profileImageUrl: "Profile Image url",
    email: "ling@softwire.com",
    // postedBy: {
    //   name: "User name",
    // },
  };

  // Act
  const tree = renderer
    .create(<User user={user} />)
    .toJSON();

  // Assert
  expect(tree).toMatchSnapshot();
});

