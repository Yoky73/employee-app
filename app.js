const express = require("express");

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send(`
<!DOCTYPE html>
<html>
<head>
    <title>Employee Management System</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background: #f4f6f9;
            margin: 0;
            padding: 0;
        }

        .navbar {
            background: #1f2937;
            color: white;
            text-align: center;
            padding: 20px;
            font-size: 24px;
            font-weight: bold;
        }

        .container {
            width: 80%;
            margin: 30px auto;
        }

        .card {
            background: white;
            padding: 20px;
            margin-bottom: 20px;
            border-radius: 10px;
            box-shadow: 0px 2px 10px rgba(0,0,0,0.1);
        }

        table {
            width: 100%;
            border-collapse: collapse;
        }

        th {
            background: #2563eb;
            color: white;
            padding: 12px;
        }

        td {
            padding: 12px;
            border-bottom: 1px solid #ddd;
        }

        .status {
            color: green;
            font-weight: bold;
        }

        .footer {
            text-align: center;
            color: gray;
            margin-top: 20px;
            padding: 20px;
        }
    </style>
</head>
<body>

    <div class="navbar">
        Employee Management Dashboard
    </div>

    <div class="container">

        <div class="card">
            <h2>Project Overview</h2>
            <p>
                DevOps CI/CD Pipeline Project using
                Node.js, Docker, GitHub Actions and AWS EC2.
            </p>
        </div>

        <div class="card">
            <h2>Employee List</h2>

            <table>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Department</th>
                    <th>Status</th>
                </tr>

                <tr>
                    <td>101</td>
                    <td>John</td>
                    <td>IT</td>
                    <td class="status">Active</td>
                </tr>

                <tr>
                    <td>102</td>
                    <td>David</td>
                    <td>HR</td>
                    <td class="status">Active</td>
                </tr>

                <tr>
                    <td>103</td>
                    <td>Sarah</td>
                    <td>Finance</td>
                    <td class="status">Active</td>
                </tr>
            </table>
        </div>

        <div class="card">
            <h2>Pipeline Status</h2>
            <p>✅ Application Running Successfully</p>
            <p>🚀 Ready for Docker Deployment</p>
        </div>

    </div>

    <div class="footer">
        MCA DevOps Project | Node.js + Docker + AWS
    </div>

</body>
</html>
  `);
});

app.get("/health", (req, res) => {
  res.json({
    status: "UP",
    message: "Application running successfully"
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});




