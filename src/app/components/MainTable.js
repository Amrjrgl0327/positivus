import { DepartmentTable } from "./DepartmentTable";

export function MainTable({ employeesInfo }) {
  // const softwareEmployees = employeesInfo.filter((employee) => {
  //   return employee.department == "software";
  // });

  // const marketingEmployees = employeesInfo.filter((employee) => {
  //   return employee.department == "marketing";
  // });
  return (
    <div className="flex justify-between border-2 px-30 h-100">
      <DepartmentTable />
      <DepartmentTable />
    </div>
  );
}
