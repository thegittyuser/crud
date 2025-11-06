import usersModel from "../models/usersdata.model.js";

export const defaultHome = (req, res) => {
  res.send("Hello Express");
};

export const showUsers = async (req, res) => {
  const userResult = await usersModel.find();
  res.render("show_users", { title: "Users Record", userResult });
};
export const updateData = async (req, res) => {
  const userResult = await usersModel.findById(req.params.id);
  res.render("update_data", { title: "Update Form", userResult });
};

export const update = async (req, res) => {
  const { username, email, password, phone, address } = req.body;
  await usersModel.findByIdAndUpdate(req.params.id, {
    username,
    email,
    password,
    phone,
    address,
  });
  res.redirect("/show_users");
};

export const deleteData = async (req, res) => {
  await usersModel.findByIdAndDelete(req.params.id);
  res.redirect("/show_users");
};
