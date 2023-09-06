// Filter.js
const Filter = ({ selectedJob, setSelectedJob }) => {
  return (
    <div style={{ marginBottom: "20px" }}>
      <label>
        Filter by category:
        <select
          onChange={(e) => setSelectedJob(e.target.value)}
          value={selectedJob}
        >
          <option value="All">All</option>
          <option value="Accountant">Accountant</option>
          <option value="Developer">Developer</option>
          <option value="Marketing">Marketing</option>
        </select>
      </label>
    </div>
  );
};

export default Filter;
