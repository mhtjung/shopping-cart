/**
 * @jest-environment jsdom
 */

import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import AddProductForm from "./AddProductForm.jsx";
import axios from "axios";


jest.mock("axios");

afterEach(() => {
  jest.clearAllMocks();
});

// create setup function to call before each test
// fxn should return test data, mock fxns


test("contains h3 heading", () => {
  render(<AddProductForm />);
  const heading = screen.getByRole("heading", {
    name: "Add Product",
    level: 3,
  });
  expect(heading).toBeInTheDocument();
})

// when you click Add to Cart, the form should show up.

test("add product displays form", async () => {
  const user = userEvent.setup();
  render(<AddProductForm />);
  const addFormButton = screen.getByText("Add A Product");
  await user.click(addFormButton);
  const addProductName = screen.getByText("Product Name");
  const addProductPrice = screen.getByText("Price");
  const addProductQuantity = screen.getByText("Quantity");
  expect(addProductName).toBeInTheDocument();
  expect(addProductPrice).toBeInTheDocument();
  expect(addProductQuantity).toBeInTheDocument();
})

test("input values updating successfully", async () => {
  const user = userEvent.setup();
  render(<AddProductForm />);
  const addFormButton = screen.getByText("Add A Product");
  await user.click(addFormButton);
  const nameBox = screen.getByRole("textbox", {
    name: "Product Name"
  });
  await user.type(nameBox, "Chungus");
  expect(nameBox).toHaveValue("Chungus");
})


// ```json
// {
//   "_id": "61d754d72092473d55a809e1",
//   "title": "Keyboard",
//   "price": 50,
//   "quantity": 3,
//   "createdAt": "2020-10-04T05:57:02.777Z",
//   "updatedAt": "2020-10-04T05:57:02.777Z",
//   "_v": 0
// }

// test if submit is working
test("submit is working", async () => {
  const user = userEvent.setup();
  render(<AddProductForm />); // this is what fxn accepts.
  const addFormButton = screen.getByText("Add A Product");
  await user.click(addFormButton);
  const nameBox = screen.getByRole("textbox", {
    name: "Product Name"
  });
  await user.type(nameBox, "Chungus");
  // axios.post.mockResolvedValueOnce(getAddResponse());

  const submitBtn = screen.getByRole("link", {
    name: "Add",
  });

  await user.click(submitBtn);
  expect(axios.post).toHaveBeenCalledWith(
    `/api/products`, {price:"", quantity:"", title:"Chungus"}
  );
})
