const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static Files
app.use(express.static("public"));

// EJS Setup
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Temporary Employee Data (Without MongoDB)
let employees = [
  {
    _id: 1,
    name: "John Doe",
    department: "IT",
    salary: 50000
  },
  {
    _id: 2,
    name: "Priya Sharma",
    department: "HR",
    salary: 45000
  }
];

// Home Page
app.get("/", (req, res) => {

  const totalEmployees = employees.length;

  const departments = [
    ...new Set(employees.map(emp => emp.department))
  ];

  const totalDepartments = departments.length;

  const totalSalary = employees.reduce(
    (sum, emp) => sum + emp.salary,
    0
  );

  const averageSalary =
    totalEmployees > 0
      ? Math.round(totalSalary / totalEmployees)
      : 0;

  const highestSalary =
    totalEmployees > 0
      ? Math.max(...employees.map(emp => emp.salary))
      : 0;

  res.render("index", {
    employees,
    totalEmployees,
    totalDepartments,
    averageSalary,
    highestSalary
  });

});

// Add Employee
app.post("/add", (req, res) => {

  const { name, department, salary } = req.body;

  employees.push({
    _id: Date.now(),
    name,
    department,
    salary: Number(salary)
  });

  res.redirect("/");

});

// Delete Employee
app.get("/delete/:id", (req, res) => {

  const id = Number(req.params.id);

  employees = employees.filter(
    emp => emp._id !== id
  );

  res.redirect("/");

});

// Health Check
app.get("/health", (req, res) => {
  res.json({
    status: "UP",
    message: "Application running successfully"
  });
});

// Server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});