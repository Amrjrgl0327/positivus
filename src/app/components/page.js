"use client";
import { createContext } from "react";
import { MainTable } from "./MainTable";

const employeesInfo = [
  { name: "Amaraa", department: "software", gender: "female" },
  { name: "Enkhtuul", department: "software", gender: "female" },
  { name: "Gantulga", department: "marketing", gender: "male" },
  { name: "Bat-Erdene", department: "software", gender: "male" },
  { name: "Oyun", department: "marketing", gender: "female" },
  { name: "Misheel", department: "software", gender: "female" },
  { name: "Inguun", department: "software", gender: "male" },
  { name: "Temuujin", department: "software", gender: "male" },
  { name: "Siilen", department: "marketing", gender: "female" },
  { name: "Naraa", department: "marketing", gender: "female" },
  { name: "Saraa", department: "marketing", gender: "female" },
  { name: "Bat", department: "marketing", gender: "male" },
  { name: "Tsetseg", department: "marketing", gender: "female" },
  { name: "Puujee", department: "marketing", gender: "female" },
  { name: "Urjee", department: "marketing", gender: "female" },
  { name: "Dorj", department: "software", gender: "male" },
  { name: "Tushig", department: "software", gender: "male" },
  { name: "Erkhes", department: "software", gender: "male" },
];

export default function page() {
  return (
    <div>
      <MainTable />
    </div>
  );
}

export const EmployeesContext = createContext(employeesInfo);
