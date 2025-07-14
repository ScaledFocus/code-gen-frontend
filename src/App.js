import { useState } from "react";
import mockPlanning from "./mockPlanning.json";
import "./App.css";

function App() {
  const [query, setQuery] = useState("");
  const [planningSteps, setPlanningSteps] = useState([]);
  const [showResults, setShowResults] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!query) return;
    setPlanningSteps([]);
    setShowResults(false);
    simulateProgress(0);
  };

  const simulateProgress = (index) => {
    if (index >= mockPlanning.length) {
      setShowResults(true);
      return;
    }
    setPlanningSteps((prev) => [
      ...prev,
      { ...mockPlanning[index], status: "pending" },
    ]);
    setTimeout(() => {
      setPlanningSteps((prev) =>
        prev.map((step, i) =>
          i === index ? { ...step, status: "in progress" } : step
        )
      );
      const completionDelay = index === 5 ? 60000 : 2000; // 3 minutes for step 6 (index 5), 2 seconds otherwise
      setTimeout(() => {
        setPlanningSteps((prev) =>
          prev.map((step, i) =>
            i === index ? { ...step, status: "completed" } : step
          )
        );
        simulateProgress(index + 1);
      }, completionDelay);
    }, 500);
  };

  const loadSample = () => {
    setQuery(
      "Create a Banking Transaction Management System with Java + Springboot as a backend."
    );
  };

  const sampleQueries = [
    "Create a TODO App with Java + Spring Boot",
    "Create an Employee CRM with Java + Spring Boot",
    "Build a Blog Platform with Java + Spring Boot",
    "Develop an E-commerce Backend with Java + Spring Boot",
    "Create a Social Media API with Java + Spring Boot",
    "Implement a Chat Application Backend with Java + Spring Boot",
    "Design a Inventory Management System with Java + Spring Boot",
    "Create a Booking System with Java + Spring Boot",
    "Build a Forum Application with Java + Spring Boot",
    "Develop a Recipe Management App with Java + Spring Boot",
  ];

  return (
    <div className="App">
      <header className="App-header">
        <h1>E2E Programming Environment Generator</h1>
        <form
          onSubmit={handleSubmit}
          style={{ display: "flex", alignItems: "center", margin: "20px" }}
        >
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Enter your code generation request"
            style={{
              padding: "10px",
              fontSize: "16px",
              width: "400px",
              marginRight: "10px",
              borderRadius: "5px",
              border: "1px solid #ccc",
            }}
          />
          <button
            type="submit"
            style={{
              padding: "10px 20px",
              fontSize: "16px",
              backgroundColor: "#61dafb",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Generate
          </button>
        </form>
        <div
          style={{
            backgroundColor: "#333",
            borderRadius: "10px",
            padding: "10px",
            margin: "0 auto 20px",
            maxWidth: "800px",
            overflowX: "auto",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "nowrap",
              gap: "10px",
            }}
          >
            {sampleQueries.map((sample, index) => (
              <button
                key={index}
                onClick={() => setQuery(sample)}
                style={{
                  padding: "8px 16px",
                  fontSize: "14px",
                  backgroundColor: "#282c34",
                  color: "white",
                  border: "none",
                  borderRadius: "20px",
                  cursor: "pointer",
                  whiteSpace: "nowrap",
                }}
              >
                {sample}
              </button>
            ))}
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            flexWrap: "wrap",
          }}
        >
          {planningSteps.length > 0 && (
            <div
              style={{
                textAlign: "left",
                width: "600px",
                backgroundColor: "#f0f0f0",
                padding: "20px",
                borderRadius: "10px",
                color: "black",
                maxHeight: "400px",
                overflowY: "auto",
              }}
            >
              <h2 style={{ color: "black" }}>Agent Planning Steps</h2>
              <ul style={{ listStyleType: "none", padding: 0 }}>
                {planningSteps.map((step, index) => (
                  <li
                    key={index}
                    style={{
                      margin: "15px 0",
                      borderBottom: "1px solid #ddd",
                      paddingBottom: "10px",
                    }}
                  >
                    <span
                      style={{
                        fontWeight: "bold",
                        fontSize: "18px",
                        color:
                          step.status === "completed"
                            ? "green"
                            : step.status === "in progress"
                            ? "orange"
                            : "gray",
                      }}
                    >
                      {step.status === "completed"
                        ? "✅ "
                        : step.status === "in progress"
                        ? "🔄 "
                        : "⏳ "}
                      {step.title}
                    </span>
                    <p
                      style={{
                        fontSize: "14px",
                        fontStyle: "italic",
                        color: "#666",
                        margin: "5px 0",
                      }}
                    >
                      {step.description}
                    </p>
                    {step.status === "completed" &&
                      step.files &&
                      step.files.length > 0 && (
                        <div>
                          <strong>Files:</strong>
                          <ul
                            style={{
                              listStyleType: "disc",
                              paddingLeft: "20px",
                              fontSize: "12px",
                              color: "#333",
                            }}
                          >
                            {step.files.map((file, idx) => (
                              <li key={idx}>{file}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                  </li>
                ))}
              </ul>
            </div>
          )}
          {showResults && (
            <div
              style={{
                textAlign: "left",
                width: "600px",
                backgroundColor: "#f0f0f0",
                padding: "20px",
                borderRadius: "10px",
                color: "black",
                maxHeight: "400px",
                overflowY: "auto",
              }}
            >
              <h2 style={{ color: "black" }}>Results</h2>
              <p>
                GitHub Repository Link:{" "}
                <a
                  href="https://github.com/ScaledFocus/coding-solution-3c1910a2-7d5c-4d86-8431-852d5563b786.git"
                  style={{ color: "#61dafb" }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://github.com/ScaledFocus/coding-solution-3c1910a2-7d5c-4d86-8431-852d5563b786.git
                </a>
              </p>
              <p>
                Running on Localhost:{" "}
                <a
                  href="http://localhost:8081"
                  style={{ color: "#61dafb" }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  http://localhost:8081
                </a>
              </p>
              <h3>Completion Status</h3>
              <table
                style={{
                  width: "100%",
                  borderCollapse: "collapse",
                  marginBottom: "20px",
                }}
              >
                <thead>
                  <tr>
                    <th
                      style={{
                        border: "1px solid #ddd",
                        padding: "8px",
                        backgroundColor: "#e6e6e6",
                      }}
                    >
                      Step
                    </th>
                    <th
                      style={{
                        border: "1px solid #ddd",
                        padding: "8px",
                        backgroundColor: "#e6e6e6",
                      }}
                    >
                      Status
                    </th>
                    <th
                      style={{
                        border: "1px solid #ddd",
                        padding: "8px",
                        backgroundColor: "#e6e6e6",
                      }}
                    >
                      Completion Time
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                      Step 1
                    </td>
                    <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                      ✅ Completed
                    </td>
                    <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                      2025-07-09 13:29:50
                    </td>
                  </tr>
                  <tr>
                    <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                      Step 2
                    </td>
                    <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                      ✅ Completed
                    </td>
                    <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                      2025-07-09 13:30:06
                    </td>
                  </tr>
                  <tr>
                    <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                      Step 3
                    </td>
                    <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                      ✅ Completed
                    </td>
                    <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                      2025-07-09 13:30:14
                    </td>
                  </tr>
                  <tr>
                    <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                      Step 4
                    </td>
                    <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                      ✅ Completed
                    </td>
                    <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                      2025-07-09 13:30:32
                    </td>
                  </tr>
                  <tr>
                    <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                      Step 5
                    </td>
                    <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                      ✅ Completed
                    </td>
                    <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                      2025-07-09 13:30:51
                    </td>
                  </tr>
                  <tr>
                    <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                      Step 6
                    </td>
                    <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                      ✅ Completed
                    </td>
                    <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                      2025-07-09 13:31:07
                    </td>
                  </tr>
                  <tr>
                    <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                      Step 7
                    </td>
                    <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                      ✅ Completed
                    </td>
                    <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                      2025-07-09 13:31:20
                    </td>
                  </tr>
                  <tr>
                    <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                      Step 8
                    </td>
                    <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                      ✅ Completed
                    </td>
                    <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                      2025-07-09 13:31:52
                    </td>
                  </tr>
                  <tr>
                    <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                      Step 9
                    </td>
                    <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                      ✅ Completed
                    </td>
                    <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                      2025-07-09 13:32:15
                    </td>
                  </tr>
                  <tr>
                    <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                      Step 10
                    </td>
                    <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                      ✅ Completed
                    </td>
                    <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                      2025-07-09 13:32:32
                    </td>
                  </tr>
                </tbody>
              </table>
              <h3>Notes & Issues</h3>
              <p>
                <strong>Errors Encountered:</strong> None yet
              </p>
              <p>
                <strong>Important Decisions:</strong> Step 10: JUnit tests ran
                to completion; test output shows correct execution of all test
                classes. No errors reported.
              </p>
            </div>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
