/* Add test for database */
const db = require("./database");

/* Init beforeAll method */
beforeAll(async () => {
  await db.sequelize.sync({ force: true });
});

/* It should create a User */
test("Create a User", async () => {
  expect.assertions(6);
  const user = await db.User.create({
    id: 1,
    username: "johndoe",
    firstName: "John",
    lastName: "Doe",
    email: "test@test.com",
    password: "123456",
  });

  expect(user.id).toEqual(1);
  expect(user.username).toEqual("johndoe");
  expect(user.firstName).toEqual("John");
  expect(user.lastName).toEqual("Doe");
  expect(user.email).toEqual("test@test.com");
  expect(user.password).toEqual("123456");
});

/* Test get User by id */
test("Get User by id", async () => {
  expect.assertions(3);
  const user = await db.User.findByPk(1);
  expect(user.id).toEqual(1);
  expect(user.firstName).toEqual("John");
  expect(user.lastName).toEqual("Doe");
});

/* Test update User by id */
test("Update User by id", async () => {
  expect.assertions(2);
  await db.User.update({ firstName: "Jane" }, { where: { id: 1 } });
  const user = await db.User.findByPk(1);
  expect(user.id).toEqual(1);
  expect(user.firstName).toEqual("Jane");
});

/* Test delete User by id */
test("Delete User by id", async () => {
  expect.assertions(1);
  await db.User.destroy({ where: { id: 1 } });
  const user = await db.User.findByPk(1);
  expect(user).toBeNull();
});

/* Test create a Property */
test("Create a Property", async () => {
  expect.assertions(12);
  const property = await db.Property.create({
    title: "Test Property",
    description: "Test description",
    price: 1000,
    address: "123 Main St",
    city: "Anytown",
    state: "CA",
    zip: "12345",
    type: "House",
    bedrooms: 3,
    bathrooms: 2,
    sqft: 1000,
    yearBuilt: 2000,
  });

  expect(property.title).toBe("Test Property");
  expect(property.description).toBe("Test description");
  expect(property.price).toBe(1000);
  expect(property.address).toBe("123 Main St");
  expect(property.city).toBe("Anytown");
  expect(property.state).toBe("CA");
  expect(property.zip).toBe("12345");
  expect(property.type).toBe("House");
  expect(property.bedrooms).toBe(3);
  expect(property.bathrooms).toBe(2);
  expect(property.sqft).toBe(1000);
  expect(property.yearBuilt).toBe(2000);
});

/* Test get Property by id */
test("Get Property by id", async () => {
  expect.assertions(2);
  const property = await db.Property.findByPk(1);
  expect(property.id).toBe(1);
  expect(property.title).toBe("Test Property");
});

/* Test update Property by id */
test("Update Property by id", async () => {
  expect.assertions(2);
  await db.Property.update({ title: "Updated Test Property" }, { where: { id: 1 } });
  const property = await db.Property.findByPk(1);
  expect(property.id).toBe(1);
  expect(property.title).toBe("Updated Test Property");
});

/* Test delete Property by id */
test("Delete Property by id", async () => {
  expect.assertions(1);
  await db.Property.destroy({ where: { id: 1 } });
  const property = await db.Property.findByPk(1);
  expect(property).toBeNull();
});

/* Close afterAll method */
afterAll(async () => {
  await db.sequelize.close();
});
