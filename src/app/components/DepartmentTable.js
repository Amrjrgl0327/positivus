import { use } from "react";
import { EmployeeCard } from "./EmployeeCard";
import { EmployeesContext } from "./page";

export function DepartmentTable() {
  const employeesInfo = use(EmployeesContext);

  return (
    <div className="grid grid-cols-3">
      {employeesInfo.map((employee) => {
        return <EmployeeCard employee={employee} />;
      })}
    </div>
  );
}
