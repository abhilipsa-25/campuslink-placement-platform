function StudentStatCard({
  title,
  value,
  description,
  icon,
  type,
}) {
  return (
    <div className="student-stat-card">

      <div className={`student-stat-icon ${type}`}>
        {icon}
      </div>

      <div className="student-stat-content">

        <p>{title}</p>

        <h2>{value}</h2>

        <span>
          {description}
        </span>

      </div>

    </div>
  );
}

export default StudentStatCard;