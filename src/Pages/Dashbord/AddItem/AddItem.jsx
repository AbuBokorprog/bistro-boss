import React from "react";
import { Helmet } from "react-helmet-async";
import SubCategory from "../../../Shared/SubCategory/SubCategory";
import { useForm } from "react-hook-form";

const AddItem = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = () => {};

  return (
    <div className="w-full">
      <Helmet>
        <title>Bistro Boss | All Users</title>
      </Helmet>
      <SubCategory subHeader={"What's new?"} header="ADD AN ITEM"></SubCategory>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="my-10 mx-16 text-center"
      >
        <div className="form-control mb-4">
          <label className="label">
            <span className="label-text">Name*</span>
          </label>
          <input
            type="text"
            name="name"
            placeholder="Type here"
            className="input input-bordered w-full"
          />
        </div>
        <div className="flex gap-5 mb-5 justify-center items-center">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Category*</span>
            </label>
            <select className="select select-bordered">
              <option disabled selected>
                Select Category
              </option>
              <option>Dessert</option>
              <option>Pizza</option>
              <option>Drink</option>
              <option>Soup</option>
              <option>Salad</option>
            </select>
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Price*</span>
            </label>
            <input
              type="text"
              name="price"
              placeholder="Type here"
              className="input input-bordered"
            />
          </div>
        </div>
        <textarea
          className="textarea w-full textarea-bordered"
          placeholder="Bio"
        ></textarea>
        <input type="file" name="recipe" className="file-input w-full" />
      </form>
    </div>
  );
};

export default AddItem;
