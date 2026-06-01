const express = require("express");
const router = express.Router();
const Employee = require("../models/Employee");

// Home Page
router.get("/", async (req, res) => {

    const employees = await Employee.find();

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
router.post("/add", async (req, res) => {

    const employee = new Employee({
        name: req.body.name,
        department: req.body.department,
        salary: req.body.salary
    });

    await employee.save();

    res.redirect("/");
});
// Delete Employee
router.get("/delete/:id", async (req, res) => {

    await Employee.findByIdAndDelete(req.params.id);

    res.redirect("/");
});

module.exports = router;