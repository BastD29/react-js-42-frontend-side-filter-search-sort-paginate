export function Sort({ setSortOrder }) {
  return (
    <div style={{ marginBottom: "20px" }}>
      <div onClick={() => setSortOrder("asc")}>A to Z</div>
      <div onClick={() => setSortOrder("desc")}>Z to A</div>
    </div>
  );
}
