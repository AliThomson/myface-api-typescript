import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from "react-router-dom";
import { User } from "./User";

test("renders name", async () => {
  // Arrange
  const user = {
    name: "ALing",
  };

  // Act
  render(<BrowserRouter><User user={user} /></BrowserRouter>);
  const nameElement = screen.getByText(/ALing/i);
  
  // Assert
  expect(nameElement).toBeInTheDocument();
});

test("renders image url", async () => {
  // Arrange
  const user = {
    name: "ALing",
    profileImageUrl: "Profile Image url",
    email: "ling@softwire.com",
  };

  // Act
  render(<BrowserRouter><User user={user} /></BrowserRouter>);
  const imageElement = screen.getByText(/Profile Image url/i);
  
  // Assert
  expect(imageElement).toBeInTheDocument();
});

test("renders email", async () => {
  // Arrange
  const user = {
    email: "ling@softwire.com",
  };

  // Act
  render(<BrowserRouter><User user={user} /></BrowserRouter>);
  const emailElement = screen.getByText(/ling@softwire.com/i);

  // Assert
 expect(emailElement).toBeInTheDocument();
});

test("matches snapshot", async () => {
  // Arrange
  const user = {
    name: "ALing",
    profileImageUrl: "Profile Image url",
    email: "ling@softwire.com",
    };

  // Act
  const tree = renderer
    .create(<BrowserRouter><User user={user} /></BrowserRouter>)
    .toJSON();
    
  // Assert
  expect(tree).toMatchSnapshot();
});

