import { useNavigate, useParams } from "react-router";
import { useQuery } from "@tanstack/react-query";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import PageHeader from "@/components/page-header";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { ArrowLeftIcon } from "lucide-react";
import { useMemo, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface Course {
  courseid?: string;
  ftype?: string;
  remarks?: string;
  status?: string;
  level?: string;
  session?: string;
  semester?: string;
  course?: string;
  title?: string;
  test1?: string;
  test2?: string;
  test3?: string;
  exam?: string;
  units?: string;
  gradepoints?: string;
  grade?: string;
}

interface AlumniDetails {
  id: string;
  firstname: string;
  lastname: string;
  middlename?: string;
  email: string;
  matric_number: string;
  gender: string;
  date_of_birth: string;
  phone_number: string;
  data: {
    biodata: {
      fullname: string;
      mat_no: string;
      email: string;
      mobile: string;
      gender: string; // 'F' or 'M'
      dob: string; // "YYYY-MM-DD"
    };
    acaddata: {
      faculty: string;
      department: string;
      course: string;
      degree: string;
      graduation_year: number;
      results: {
        courses: Course[];
        finalclassification: any; // Define more strictly if needed
        cgpa: string;
      };
      graduation_date: string;
      graduation_status: string;
    };
  };
}

// Mock data fetching function - replace with your actual API call
// This function should fetch the data for a single alumnus by ID.
// The structure of the returned data should be the content of the "json" property in your data.json.
const fetchAlumniData = async (id: string): Promise<AlumniDetails> => {
  // Example: const response = await fetch(`/api/alumni/${id}`);
  // if (!response.ok) throw new Error("Failed to fetch alumni data");
  // const data = await response.json();
  // return data.json; // If your API returns the whole data.json structure

  // For demonstration, we'll simulate a fetch and use a static import of the data.
  // In a real app, you would not import the JSON like this for a single user view.
  // This is just to make the example runnable with the provided data.
  await new Promise((resolve) => setTimeout(resolve, 750)); // Simulate network delay

  // Placeholder: In a real scenario, you'd fetch this from an API.
  // For this example, we'll assume an API would return the content of the "json" field
  // from your provided data.json file if the ID matches.
  const MOCK_DATA = {
    id: "cm9e6kj600000ry2k5ak3gavm",
    firstname: "Victoria",
    lastname: "Monday",
    middlename: "Ima",
    email: "victoriaima89@gmail.com",
    matric_number: "DE.2019/7445",
    gender: "FEMALE",
    date_of_birth: "1999-12-26T00:00:00.000Z",
    phone_number: "08185325913",
    address: null,
    faculty_id: null,
    department_id: null,
    password: null,
    role: "USER",
    refresh_token:
      "1ddba003cba5b0d9d7e40d31b905e9d7c9e1953dd57e31ec5798a76d97620d5b",
    refresh_token_expiry: "2025-05-12T12:17:06.895Z",
    last_login: "2025-04-12T12:17:06.895Z",
    is_online: false,
    created_at: "2025-04-12T12:16:53.252Z",
    updated_at: "2025-04-12T12:17:06.896Z",
    data: {
      biodata: {
        fullname: "Monday, Victoria Ima",
        mat_no: "DE.2019/7445",
        email: "victoriaima89@gmail.com",
        mobile: "08185325913",
        gender: "F",
        dob: "1999-12-26",
      },
      acaddata: {
        faculty: "BASIC MEDICAL SCIENCES",
        department: "NURSING",
        course: "FULL TIME UNDER GRADUATE NURSING BASIC MEDICAL SCIENCES",
        degree: "Bachelor of Nursing Science (B.NSc.)",
        graduation_year: 2024,
        results: {
          courses: [
            {
              courseid: "27691",
              ftype: "bms_nur",
              remarks: "Average",
              status: "Approved",
              level: "1",
              session: "2019/2020",
              semester: "1",
              course: "CHS101",
              title: "General Chemistry I",
              test1: "9",
              test2: "0",
              test3: "0",
              exam: "42",
              units: "3",
              gradepoints: "9",
              grade: "C",
            },
            {
              courseid: "27692",
              ftype: "bms_nur",
              remarks: "Excellent",
              status: "Approved",
              level: "1",
              session: "2019/2020",
              semester: "1",
              course: "CHS107",
              title: "Practical Chemistry I",
              test1: "25",
              test2: "0",
              test3: "0",
              exam: "57",
              units: "1",
              gradepoints: "5",
              grade: "A",
            },
            {
              courseid: "27708",
              ftype: "bms_nur",
              remarks: "Good",
              status: "Approved",
              level: "1",
              session: "2019/2020",
              semester: "1",
              course: "CHS103",
              title: "General Chemistry II",
              test1: "6",
              test2: "0",
              test3: "0",
              exam: "56",
              units: "3",
              gradepoints: "12",
              grade: "B",
            },
            {
              courseid: "27715",
              ftype: "bms_nur",
              remarks: "Good",
              status: "Approved",
              level: "1",
              session: "2019/2020",
              semester: "1",
              course: "CHS109",
              title: "Practical Chemistry II",
              test1: "11",
              test2: "12",
              test3: "0",
              exam: "42",
              units: "1",
              gradepoints: "4",
              grade: "B",
            },
            {
              courseid: "27737",
              ftype: "bms_nur",
              remarks: "Average",
              status: "Approved",
              level: "1",
              session: "2019/2020",
              semester: "1",
              course: "PHY103",
              title: "General Physics Laboratory I",
              test1: "10",
              test2: "9",
              test3: "0",
              exam: "35",
              units: "1",
              gradepoints: "3",
              grade: "C",
            },
            {
              courseid: "27738",
              ftype: "bms_nur",
              remarks: "Average",
              status: "Approved",
              level: "1",
              session: "2019/2020",
              semester: "1",
              course: "GST141",
              title: "Use of English I",
              test1: "4",
              test2: "4",
              test3: "12",
              exam: "30",
              units: "2",
              gradepoints: "6",
              grade: "C",
            },
            {
              courseid: "27739",
              ftype: "bms_nur",
              remarks: "Good",
              status: "Approved",
              level: "1",
              session: "2019/2020",
              semester: "1",
              course: "MTH111",
              title: "Basic Mathematics: Algebra and Trigonometry",
              test1: "13",
              test2: "6",
              test3: "0",
              exam: "45",
              units: "3",
              gradepoints: "12",
              grade: "B",
            },
            {
              courseid: "27740",
              ftype: "bms_nur",
              remarks: "Good",
              status: "Approved",
              level: "1",
              session: "2019/2020",
              semester: "1",
              course: "POL101",
              title: "Introduction to Political Science",
              test1: "10",
              test2: "10",
              test3: "0",
              exam: "40",
              units: "2",
              gradepoints: "8",
              grade: "B",
            },
            {
              courseid: "27741",
              ftype: "bms_nur",
              remarks: "Fail",
              status: "Approved",
              level: "1",
              session: "2019/2020",
              semester: "1",
              course: "BIO101",
              title: "Basic Biology I",
              test1: "9",
              test2: "10",
              test3: "0",
              exam: "28",
              units: "3",
              gradepoints: "6",
              grade: "D",
            },
            {
              courseid: "27742",
              ftype: "bms_nur",
              remarks: "Excellent",
              status: "Approved",
              level: "1",
              session: "2019/2020",
              semester: "1",
              course: "BIO103",
              title: "Practical Basic Biology I",
              test1: "27",
              test2: "0",
              test3: "0",
              exam: "43",
              units: "1",
              gradepoints: "5",
              grade: "A",
            },
            {
              courseid: "27743",
              ftype: "bms_nur",
              remarks: "Fail",
              status: "Approved",
              level: "1",
              session: "2019/2020",
              semester: "1",
              course: "PHY105",
              title: "General Physics I",
              test1: "7",
              test2: "8",
              test3: "0",
              exam: "32",
              units: "3",
              gradepoints: "6",
              grade: "D",
            },
            {
              courseid: "27797",
              ftype: "bms_nur",
              remarks: "Good",
              status: "Approved",
              level: "1",
              session: "2019/2020",
              semester: "2",
              course: "CHS102",
              title: "General Chemistry III",
              test1: "7",
              test2: "0",
              test3: "0",
              exam: "53",
              units: "3",
              gradepoints: "12",
              grade: "B",
            },
            {
              courseid: "27798",
              ftype: "bms_nur",
              remarks: "Good",
              status: "Approved",
              level: "1",
              session: "2019/2020",
              semester: "2",
              course: "CHS108",
              title: "Practical Chemistry III",
              test1: "0",
              test2: "0",
              test3: "24",
              exam: "37",
              units: "1",
              gradepoints: "4",
              grade: "B",
            },
            {
              courseid: "27799",
              ftype: "bms_nur",
              remarks: "Average",
              status: "Approved",
              level: "1",
              session: "2019/2020",
              semester: "2",
              course: "PHY106",
              title: "General Physics II",
              test1: "9",
              test2: "8",
              test3: "0",
              exam: "34",
              units: "3",
              gradepoints: "9",
              grade: "C",
            },
            {
              courseid: "27800",
              ftype: "bms_nur",
              remarks: "Average",
              status: "Approved",
              level: "1",
              session: "2019/2020",
              semester: "2",
              course: "PHY104",
              title: "General Physics Laboratory II",
              test1: "11",
              test2: "12",
              test3: "0",
              exam: "35",
              units: "1",
              gradepoints: "3",
              grade: "C",
            },
            {
              courseid: "27801",
              ftype: "bms_nur",
              remarks: "Average",
              status: "Approved",
              level: "1",
              session: "2019/2020",
              semester: "2",
              course: "GST142",
              title: "Use of English II",
              test1: "4",
              test2: "3",
              test3: "8",
              exam: "41",
              units: "2",
              gradepoints: "6",
              grade: "C",
            },
            {
              courseid: "27802",
              ftype: "fail",
              remarks: "Fail",
              status: "Approved",
              level: "1",
              session: "2019/2020",
              semester: "2",
              course: "BIO102",
              title: "Basic Biology II",
              test1: "0",
              test2: "0",
              test3: "2",
              exam: "26",
              units: "3",
              gradepoints: "0",
              grade: "F",
            },
            {
              courseid: "27803",
              ftype: "bms_nur",
              remarks: "Excellent",
              status: "Approved",
              level: "1",
              session: "2019/2020",
              semester: "2",
              course: "BIO108",
              title: "Practical Basic Biology II",
              test1: "26",
              test2: "0",
              test3: "0",
              exam: "44",
              units: "1",
              gradepoints: "5",
              grade: "A",
            },
            {
              courseid: "27804",
              ftype: "bms_nur",
              remarks: "Average",
              status: "Approved",
              level: "1",
              session: "2019/2020",
              semester: "2",
              course: "GST150",
              title: "Philosophy and Logic",
              test1: "6",
              test2: "6",
              test3: "7",
              exam: "33",
              units: "2",
              gradepoints: "6",
              grade: "C",
            },
            {
              courseid: "27805",
              ftype: "bms_nur",
              remarks: "Average",
              status: "Approved",
              level: "1",
              session: "2019/2020",
              semester: "2",
              course: "GST114",
              title: "Nigerian Peoples and Culture",
              test1: "10",
              test2: "14",
              test3: "0",
              exam: "27",
              units: "2",
              gradepoints: "6",
              grade: "C",
            },
            {
              courseid: "28677",
              ftype: "bms_nur",
              remarks: "Good",
              status: "Approved",
              level: "2",
              session: "2020/2021",
              semester: "1",
              course: "PHS237",
              title: "Human Physiology I",
              test1: "9",
              test2: "8.25",
              test3: "0",
              exam: "50.5",
              units: "3",
              gradepoints: "12",
              grade: "B",
            },
            {
              courseid: "28678",
              ftype: "bms_nur",
              remarks: "Average",
              status: "Approved",
              level: "2",
              session: "2020/2021",
              semester: "1",
              course: "ANA213",
              title: "Structure of the Human Body I",
              test1: "4",
              test2: "6",
              test3: "6",
              exam: "34",
              units: "3",
              gradepoints: "9",
              grade: "C",
            },
            {
              courseid: "28679",
              ftype: "bms_nur",
              remarks: "Average",
              status: "Approved",
              level: "2",
              session: "2020/2021",
              semester: "1",
              course: "ANA261",
              title: "Developmental Anatomy and Genetics",
              test1: "7",
              test2: "5.8",
              test3: "6.8",
              exam: "38.5",
              units: "3",
              gradepoints: "9",
              grade: "C",
            },
            {
              courseid: "28682",
              ftype: "bms_nur",
              remarks: "Good",
              status: "Approved",
              level: "2",
              session: "2020/2021",
              semester: "1",
              course: "EDC211",
              title: "Introduction to Entrepreneurial Studies ",
              test1: "13",
              test2: "12",
              test3: "0",
              exam: "35",
              units: "2",
              gradepoints: "8",
              grade: "B",
            },
            {
              courseid: "28683",
              ftype: "bms_nur",
              remarks: "Average",
              status: "Approved",
              level: "2",
              session: "2020/2021",
              semester: "1",
              course: "NSC201",
              title: "Foundations of Nursing Science1",
              test1: "6.5",
              test2: "6",
              test3: "5.2",
              exam: "40.95",
              units: "2",
              gradepoints: "6",
              grade: "C",
            },
            {
              courseid: "28684",
              ftype: "bms_nur",
              remarks: "Average",
              status: "Approved",
              level: "2",
              session: "2020/2021",
              semester: "1",
              course: "CMS111",
              title: "Introduction to Computer Science",
              test1: "7",
              test2: "16",
              test3: "0",
              exam: "33",
              units: "3",
              gradepoints: "9",
              grade: "C",
            },
            {
              courseid: "28685",
              ftype: "bms_nur",
              remarks: "Average",
              status: "Approved",
              level: "2",
              session: "2020/2021",
              semester: "1",
              course: "SOC101",
              title: "Introduction to Sociology",
              test1: "11",
              test2: "10",
              test3: "0",
              exam: "30",
              units: "2",
              gradepoints: "6",
              grade: "C",
            },
            {
              courseid: "29146",
              ftype: "bms_nur",
              remarks: "Average",
              status: "Approved",
              level: "2",
              session: "2020/2021",
              semester: "1",
              course: "MBC201",
              title: "General Biochemistry for Nursing",
              test1: "8",
              test2: "12",
              test3: "0",
              exam: "31",
              units: "3",
              gradepoints: "9",
              grade: "C",
            },
            {
              courseid: "27802",
              ftype: "bms_nur",
              remarks: "Excellent",
              status: "Approved",
              level: "2",
              session: "2020/2021",
              semester: "2",
              course: "BIO102",
              title: "Basic Biology II",
              test1: "20",
              test2: "0",
              test3: "0",
              exam: "59",
              units: "3",
              gradepoints: "15",
              grade: "A",
            },
            {
              courseid: "29233",
              ftype: "bms_nur",
              remarks: "Good",
              status: "Approved",
              level: "2",
              session: "2020/2021",
              semester: "2",
              course: "ANA214",
              title: "Structure of the Human Body II",
              test1: "7.8",
              test2: "4.5",
              test3: "5.6",
              exam: "42.5",
              units: "3",
              gradepoints: "12",
              grade: "B",
            },
            {
              courseid: "29234",
              ftype: "bms_nur",
              remarks: "Good",
              status: "Approved",
              level: "2",
              session: "2020/2021",
              semester: "2",
              course: "PHS230",
              title: "Human Physiology II",
              test1: "10",
              test2: "7",
              test3: "5",
              exam: "46",
              units: "3",
              gradepoints: "12",
              grade: "B",
            },
            {
              courseid: "29235",
              ftype: "fail",
              remarks: "Fail",
              status: "Approved",
              level: "2",
              session: "2020/2021",
              semester: "2",
              course: "PHS238",
              title: "Human Physiology III",
              test1: "5",
              test2: "6",
              test3: "6",
              exam: "28",
              units: "3",
              gradepoints: "0",
              grade: "F",
            },
            {
              courseid: "29236",
              ftype: "bms_nur",
              remarks: "Excellent",
              status: "Approved",
              level: "2",
              session: "2020/2021",
              semester: "2",
              course: "MBC216",
              title: "Metabolism and Selected Topics in Biochemistry",
              test1: "6",
              test2: "4",
              test3: "8",
              exam: "52",
              units: "3",
              gradepoints: "15",
              grade: "A",
            },
            {
              courseid: "29237",
              ftype: "bms_nur",
              remarks: "Average",
              status: "Approved",
              level: "2",
              session: "2020/2021",
              semester: "2",
              course: "GST222",
              title: "Peace and Conflict Resolution Studies ",
              test1: "14",
              test2: "14",
              test3: "0",
              exam: "28",
              units: "2",
              gradepoints: "6",
              grade: "C",
            },
            {
              courseid: "29239",
              ftype: "bms_nur",
              remarks: "Good",
              status: "Approved",
              level: "2",
              session: "2020/2021",
              semester: "2",
              course: "NCS202",
              title: "Foundations of Nursing Science 11",
              test1: "7",
              test2: "7",
              test3: "8",
              exam: "43.5",
              units: "3",
              gradepoints: "12",
              grade: "B",
            },
            {
              courseid: "30569",
              ftype: "bms_nur",
              remarks: "Excellent",
              status: "Approved",
              level: "2",
              session: "2020/2021",
              semester: "2",
              course: "NSC262",
              title: "Students Industrial Work Experience Scheme (S.I.W.E.S)",
              test1: "20",
              test2: "10",
              test3: "0",
              exam: "49.2",
              units: "4",
              gradepoints: "20",
              grade: "A",
            },
            {
              courseid: "29087",
              ftype: "bms_nur",
              remarks: "Good",
              status: "Approved",
              level: "3",
              session: "2021/2022",
              semester: "1",
              course: "MMB361",
              title: "Medical Microbiology and Parasitology",
              test1: "7.5",
              test2: "9.5",
              test3: "7.5",
              exam: "39.8",
              units: "3",
              gradepoints: "12",
              grade: "B",
            },
            {
              courseid: "29088",
              ftype: "bms_nur",
              remarks: "Average",
              status: "Approved",
              level: "3",
              session: "2021/2022",
              semester: "1",
              course: "ANP391",
              title: "Cellular and System Pathology",
              test1: "7",
              test2: "6",
              test3: "5",
              exam: "41",
              units: "3",
              gradepoints: "9",
              grade: "C",
            },
            {
              courseid: "29090",
              ftype: "bms_nur",
              remarks: "Average",
              status: "Approved",
              level: "3",
              session: "2021/2022",
              semester: "1",
              course: "NSC311",
              title:
                "Basic Community Health Nursing with Primary Health Care I",
              test1: "8",
              test2: "5",
              test3: "9",
              exam: "32",
              units: "3",
              gradepoints: "9",
              grade: "C",
            },
            {
              courseid: "29091",
              ftype: "bms_nur",
              remarks: "Average",
              status: "Approved",
              level: "3",
              session: "2021/2022",
              semester: "1",
              course: "NSC341",
              title: "Basic Medical and Surgical Nursing I",
              test1: "6",
              test2: "7.35",
              test3: "7.4",
              exam: "37.25",
              units: "3",
              gradepoints: "9",
              grade: "C",
            },
            {
              courseid: "29092",
              ftype: "bms_nur",
              remarks: "Good",
              status: "Approved",
              level: "3",
              session: "2021/2022",
              semester: "1",
              course: "NSC313",
              title: "Environmental Health",
              test1: "8",
              test2: "8",
              test3: "8",
              exam: "36",
              units: "2",
              gradepoints: "8",
              grade: "B",
            },
            {
              courseid: "30215",
              ftype: "bms_nur",
              remarks: "Average",
              status: "Approved",
              level: "3",
              session: "2021/2022",
              semester: "1",
              course: "PSY251",
              title: "Developmental Psychology for Nurses",
              test1: "11",
              test2: "12",
              test3: "0",
              exam: "34",
              units: "2",
              gradepoints: "6",
              grade: "C",
            },
            {
              courseid: "30244",
              ftype: "bms_nur",
              remarks: "Excellent",
              status: "Approved",
              level: "3",
              session: "2021/2022",
              semester: "1",
              course: "NSC335",
              title: "Food, Nutrition and Dietetics",
              test1: "12",
              test2: "12",
              test3: "0",
              exam: "51",
              units: "3",
              gradepoints: "15",
              grade: "A",
            },
            {
              courseid: "30245",
              ftype: "bms_nur",
              remarks: "Good",
              status: "Approved",
              level: "3",
              session: "2021/2022",
              semester: "1",
              course: "NSC331",
              title: "Basic Maternal and Child Health I",
              test1: "6",
              test2: "6",
              test3: "6",
              exam: "45.3",
              units: "3",
              gradepoints: "12",
              grade: "B",
            },
            {
              courseid: "29238",
              ftype: "bms_nur",
              remarks: "Excellent",
              status: "Approved",
              level: "3",
              session: "2021/2022",
              semester: "2",
              course: "NCS254",
              title: "Nursing Ethics and Jurisprudence",
              test1: "14",
              test2: "9",
              test3: "0",
              exam: "51",
              units: "3",
              gradepoints: "15",
              grade: "A",
            },
            {
              courseid: "30343",
              ftype: "bms_nur",
              remarks: "Excellent",
              status: "Approved",
              level: "3",
              session: "2021/2022",
              semester: "2",
              course: "MDS302",
              title: "Biostatistics",
              test1: "8",
              test2: "6",
              test3: "9",
              exam: "50.7",
              units: "2",
              gradepoints: "10",
              grade: "A",
            },
            {
              courseid: "30344",
              ftype: "bms_nur",
              remarks: "Good",
              status: "Approved",
              level: "3",
              session: "2021/2022",
              semester: "2",
              course: "NSC312",
              title:
                "Basic Community Health Nursing with Primary Health Care 11",
              test1: "7",
              test2: "7",
              test3: "7",
              exam: "44",
              units: "2",
              gradepoints: "8",
              grade: "B",
            },
            {
              courseid: "30345",
              ftype: "bms_nur",
              remarks: "Good",
              status: "Approved",
              level: "3",
              session: "2021/2022",
              semester: "2",
              course: "NSC342",
              title: "Basic Medical and Surgical Nursing II",
              test1: "6",
              test2: "9",
              test3: "8",
              exam: "45.5",
              units: "3",
              gradepoints: "12",
              grade: "B",
            },
            {
              courseid: "30346",
              ftype: "bms_nur",
              remarks: "Excellent",
              status: "Approved",
              level: "3",
              session: "2021/2022",
              semester: "2",
              course: "NSC322",
              title: "Human Behavior in Health and Disease",
              test1: "7",
              test2: "7",
              test3: "7",
              exam: "60",
              units: "2",
              gradepoints: "10",
              grade: "A",
            },
            {
              courseid: "30347",
              ftype: "bms_nur",
              remarks: "Excellent",
              status: "Approved",
              level: "3",
              session: "2021/2022",
              semester: "2",
              course: "NSC352",
              title: "Nursing Informatics",
              test1: "12",
              test2: "9",
              test3: "0",
              exam: "50",
              units: "2",
              gradepoints: "10",
              grade: "A",
            },
            {
              courseid: "30348",
              ftype: "bms_nur",
              remarks: "Excellent",
              status: "Approved",
              level: "3",
              session: "2021/2022",
              semester: "2",
              course: "EDC310",
              title: "Entrepreneurial Practice",
              test1: "7",
              test2: "6",
              test3: "10",
              exam: "61",
              units: "2",
              gradepoints: "10",
              grade: "A",
            },
            {
              courseid: "30568",
              ftype: "bms_nur",
              remarks: "Excellent",
              status: "Approved",
              level: "3",
              session: "2021/2022",
              semester: "2",
              course: "NSC362",
              title: "Students Industrial Work Experience Scheme (S.I.W.E.S)",
              test1: "14.5",
              test2: "7",
              test3: "0",
              exam: "53",
              units: "6",
              gradepoints: "30",
              grade: "A",
            },
            {
              courseid: "30599",
              ftype: "bms_nur",
              remarks: "Good",
              status: "Approved",
              level: "3",
              session: "2021/2022",
              semester: "2",
              course: "MDS304",
              title: "Epidemiology",
              test1: "0",
              test2: "0",
              test3: "23",
              exam: "46",
              units: "2",
              gradepoints: "8",
              grade: "B",
            },
            {
              courseid: "64945",
              ftype: "bms_nur",
              remarks: "Good",
              status: "Approved",
              level: "4",
              session: "2022/2023",
              semester: "1",
              course: "NSC471",
              title: "Research Methodology in Nursing",
              test1: "8",
              test2: "4",
              test3: "5",
              exam: "52",
              units: "3",
              gradepoints: "12",
              grade: "B",
            },
            {
              courseid: "64957",
              ftype: "bms_nur",
              remarks: "Good",
              status: "Approved",
              level: "4",
              session: "2022/2023",
              semester: "1",
              course: "NSC421",
              title: "Basic Mental Health and Psychiatric Nursing I",
              test1: "3",
              test2: "7",
              test3: "5",
              exam: "52.5",
              units: "3",
              gradepoints: "12",
              grade: "B",
            },
            {
              courseid: "64958",
              ftype: "bms_nur",
              remarks: "Good",
              status: "Approved",
              level: "4",
              session: "2022/2023",
              semester: "1",
              course: "NSC441",
              title: "Advanced Medical and Surgical Nursing I",
              test1: "6",
              test2: "6",
              test3: "7.5",
              exam: "43.59",
              units: "4",
              gradepoints: "16",
              grade: "B",
            },
            {
              courseid: "64959",
              ftype: "bms_nur",
              remarks: "Average",
              status: "Approved",
              level: "4",
              session: "2022/2023",
              semester: "1",
              course: "NSC401",
              title: "Principles of Education and Teaching Methodology",
              test1: "6",
              test2: "6",
              test3: "8",
              exam: "30",
              units: "3",
              gradepoints: "9",
              grade: "C",
            },
            {
              courseid: "64960",
              ftype: "bms_nur",
              remarks: "Excellent",
              status: "Approved",
              level: "4",
              session: "2022/2023",
              semester: "1",
              course: "NSC451",
              title: "Management of Nursing Services",
              test1: "0",
              test2: "6",
              test3: "10",
              exam: "54",
              units: "3",
              gradepoints: "15",
              grade: "A",
            },
            {
              courseid: "64961",
              ftype: "bms_nur",
              remarks: "Excellent",
              status: "Approved",
              level: "4",
              session: "2022/2023",
              semester: "1",
              course: "NSC431",
              title: "Fundamentals of midwifery practice",
              test1: "7",
              test2: "6",
              test3: "6",
              exam: "52.5",
              units: "3",
              gradepoints: "15",
              grade: "A",
            },
            {
              courseid: "64962",
              ftype: "bms_nur",
              remarks: "Good",
              status: "Approved",
              level: "4",
              session: "2022/2023",
              semester: "1",
              course: "NSC433",
              title: "Basic Maternal and Child Health 11",
              test1: "7",
              test2: "8",
              test3: "6",
              exam: "43.4",
              units: "4",
              gradepoints: "16",
              grade: "B",
            },
            {
              courseid: "29235",
              ftype: "bms_nur",
              remarks: "Good",
              status: "Approved",
              level: "4",
              session: "2022/2023",
              semester: "2",
              course: "PHS238",
              title: "Human Physiology III",
              test1: "8",
              test2: "5",
              test3: "6",
              exam: "48",
              units: "3",
              gradepoints: "12",
              grade: "B",
            },
            {
              courseid: "30342",
              ftype: "bms_nur",
              remarks: "Good",
              status: "Approved",
              level: "4",
              session: "2022/2023",
              semester: "2",
              course: "PHA342",
              title: "Pharmacology for Nursing Science",
              test1: "4.7",
              test2: "5.2",
              test3: "7",
              exam: "45.5",
              units: "3",
              gradepoints: "12",
              grade: "B",
            },
            {
              courseid: "65501",
              ftype: "bms_nur",
              remarks: "Excellent",
              status: "Approved",
              level: "4",
              session: "2022/2023",
              semester: "2",
              course: "NSC422",
              title: "Basic Mental Health and Psychiatric Nursing II",
              test1: "8",
              test2: "7",
              test3: "5.5",
              exam: "56",
              units: "3",
              gradepoints: "15",
              grade: "A",
            },
            {
              courseid: "65504",
              ftype: "bms_nur",
              remarks: "Good",
              status: "Approved",
              level: "4",
              session: "2022/2023",
              semester: "2",
              course: "NSC442",
              title: "Advanced Medical and Surgical Nursing II",
              test1: "8",
              test2: "12.8",
              test3: "0",
              exam: "41",
              units: "4",
              gradepoints: "16",
              grade: "B",
            },
            {
              courseid: "65506",
              ftype: "bms_nur",
              remarks: "Excellent",
              status: "Approved",
              level: "4",
              session: "2022/2023",
              semester: "2",
              course: "NSC434",
              title: "Advanced Maternal and Child Health Nursing  I",
              test1: "6",
              test2: "7",
              test3: "7",
              exam: "50.75",
              units: "3",
              gradepoints: "15",
              grade: "A",
            },
            {
              courseid: "65508",
              ftype: "bms_nur",
              remarks: "Average",
              status: "Approved",
              level: "4",
              session: "2022/2023",
              semester: "2",
              course: "NSC402",
              title: "Practicum in Teaching and Management",
              test1: "4",
              test2: "8",
              test3: "8",
              exam: "35",
              units: "2",
              gradepoints: "6",
              grade: "C",
            },
            {
              courseid: "65509",
              ftype: "bms_nur",
              remarks: "Good",
              status: "Approved",
              level: "4",
              session: "2022/2023",
              semester: "2",
              course: "NSC452",
              title: "Health Economics for Nurses",
              test1: "10",
              test2: "12",
              test3: "0",
              exam: "44",
              units: "2",
              gradepoints: "8",
              grade: "B",
            },
            {
              courseid: "65511",
              ftype: "bms_nur",
              remarks: "Good",
              status: "Approved",
              level: "4",
              session: "2022/2023",
              semester: "2",
              course: "NSC462",
              title: "Student Industrial Work Experience Scheme (S.I.W.E.S)",
              test1: "7",
              test2: "7",
              test3: "7",
              exam: "46.5",
              units: "6",
              gradepoints: "24",
              grade: "B",
            },
            {
              courseid: "65512",
              ftype: "bms_nur",
              remarks: "Good",
              status: "Approved",
              level: "4",
              session: "2022/2023",
              semester: "2",
              course: "MDS402",
              title: "Medical Sociology",
              test1: "7",
              test2: "5",
              test3: "6",
              exam: "45",
              units: "2",
              gradepoints: "8",
              grade: "B",
            },
            {
              courseid: "66485",
              ftype: "bms_nur",
              remarks: "Excellent",
              status: "Awaiting Approval",
              level: "5",
              session: "2023/2024",
              semester: "1",
              course: "NSC521",
              title: "Advanced Mental Health and Psychiatric Nursing I",
              test1: "11",
              test2: "10",
              test3: "0",
              exam: "54",
              units: "3",
              gradepoints: "15",
              grade: "A",
            },
            {
              courseid: "66486",
              ftype: "bms_nur",
              remarks: "Good",
              status: "Awaiting Approval",
              level: "5",
              session: "2023/2024",
              semester: "1",
              course: "NSC531",
              title: "Advanced Maternal and Child Health Nursing II",
              test1: "6.5",
              test2: "6",
              test3: "5",
              exam: "44",
              units: "3",
              gradepoints: "12",
              grade: "B",
            },
            {
              courseid: "66487",
              ftype: "bms_nur",
              remarks: "Good",
              status: "Awaiting Approval",
              level: "5",
              session: "2023/2024",
              semester: "1",
              course: "NSC511",
              title:
                "Advanced Community Health Nursing and Primary Health Care",
              test1: "8",
              test2: "7.5",
              test3: "6",
              exam: "46.4",
              units: "5",
              gradepoints: "20",
              grade: "B",
            },
            {
              courseid: "66488",
              ftype: "bms_nur",
              remarks: "Excellent",
              status: "Awaiting Approval",
              level: "5",
              session: "2023/2024",
              semester: "1",
              course: "NSC533",
              title: "Infant and Family Health",
              test1: "11",
              test2: "0",
              test3: "10",
              exam: "53.25",
              units: "4",
              gradepoints: "20",
              grade: "A",
            },
            {
              courseid: "66489",
              ftype: "bms_nur",
              remarks: "Excellent",
              status: "Awaiting Approval",
              level: "5",
              session: "2023/2024",
              semester: "1",
              course: "NSC535",
              title: "Nursing Seminar and Research Project I",
              test1: "0",
              test2: "0",
              test3: "0",
              exam: "70",
              units: "4",
              gradepoints: "20",
              grade: "A",
            },
            {
              courseid: "66492",
              ftype: "bms_nur",
              remarks: "Excellent",
              status: "Awaiting Approval",
              level: "5",
              session: "2023/2024",
              semester: "1",
              course: "NSC563",
              title: "Dermatology nursing",
              test1: "25",
              test2: "0",
              test3: "0",
              exam: "55",
              units: "2",
              gradepoints: "10",
              grade: "A",
            },
            {
              courseid: "68838",
              ftype: "bms_nur",
              remarks: "Good",
              status: "Awaiting Approval",
              level: "5",
              session: "2023/2024",
              semester: "2",
              course: "NSC502",
              title: "Nursing Entrepreneurship ",
              test1: "6",
              test2: "8",
              test3: "0",
              exam: "50",
              units: "3",
              gradepoints: "12",
              grade: "B",
            },
            {
              courseid: "68839",
              ftype: "bms_nur",
              remarks: "Excellent",
              status: "Awaiting Approval",
              level: "5",
              session: "2023/2024",
              semester: "2",
              course: "NSC512",
              title: "Community Midwifery",
              test1: "5",
              test2: "6",
              test3: "7",
              exam: "52.3",
              units: "4",
              gradepoints: "20",
              grade: "A",
            },
            {
              courseid: "68840",
              ftype: "bms_nur",
              remarks: "Excellent",
              status: "Awaiting Approval",
              level: "5",
              session: "2023/2024",
              semester: "2",
              course: "NSC522",
              title: "Advance Mental Health and Psychiatric Nursing ",
              test1: "13.5",
              test2: "10",
              test3: "0",
              exam: "51.5",
              units: "2",
              gradepoints: "10",
              grade: "A",
            },
            {
              courseid: "68872",
              ftype: "bms_nur",
              remarks: "Good",
              status: "Awaiting Approval",
              level: "5",
              session: "2023/2024",
              semester: "2",
              course: "NSC532",
              title: "Nursing Seminar and  Research Project ll",
              test1: "20",
              test2: "0",
              test3: "0",
              exam: "46.5",
              units: "4",
              gradepoints: "16",
              grade: "B",
            },
            {
              courseid: "68873",
              ftype: "bms_nur",
              remarks: "Good",
              status: "Awaiting Approval",
              level: "5",
              session: "2023/2024",
              semester: "2",
              course: "NSC562",
              title: "Oncology/HIV/AIDS and Palliative care nursing",
              test1: "8",
              test2: "6.5",
              test3: "8",
              exam: "41.25",
              units: "2",
              gradepoints: "8",
              grade: "B",
            },
          ],
          finalclassification: {
            "2019/2020": {
              "1": { cgpa: "3.30", gp: 76, gpa: "3.30", units: 23 },
              "2": { cgpa: "3.09", gp: 51, gpa: "2.83", units: 18 },
            },
            "2020/2021": {
              "1": { cgpa: "3.14", gp: 68, gpa: "3.23", units: 21 },
              "2": { cgpa: "3.33", gp: 92, gpa: "3.83", units: 24 },
            },
            "2021/2022": {
              "1": { cgpa: "3.39", gp: 80, gpa: "3.63", units: 22 },
              "2": { cgpa: "3.63", gp: 113, gpa: "4.70", units: 24 },
            },
            "2022/2023": {
              "1": { cgpa: "3.70", gp: 95, gpa: "4.13", units: 23 },
              "2": { cgpa: "3.77", gp: 116, gpa: "4.14", units: 28 },
            },
            "2023/2024": {
              "1": { cgpa: "3.86", gp: 97, gpa: "4.61", units: 21 },
              "2": { cgpa: "3.89", gp: 66, gpa: "4.40", units: 15 },
            },
            fails: [],
            success: [],
          },
          cgpa: "3.89",
        },
        graduation_date: "1st November, 2024",
        graduation_status: "Graduated",
      },
      other_academic_details: [],
    },
  };

  return MOCK_DATA as AlumniDetails;
  // if (id === MOCK_DATA.id) {
  //   return MOCK_DATA as AlumniDetails;
  // } else {
  //   throw new Error("Alumni not found");
  // }
};

export default function AlumniDetails() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const {
    data: alumni,
    isLoading,
    error,
    isError,
  } = useQuery<AlumniDetails, Error>({
    queryKey: ["alumni", id],
    queryFn: () => fetchAlumniData(id!),
    enabled: !!id,
  });

  const [selectedSession, setSelectedSession] = useState<string>("all");
  const [selectedSemester, setSelectedSemester] = useState<string>("all");

  const uniqueSessions = useMemo(() => {
    if (!alumni) return [];
    const sessions = new Set(
      alumni.data.acaddata.results.courses
        .map((course) => course.session)
        .filter((session): session is string => !!session) // Type guard to ensure session is string
    );
    return ["all", ...Array.from(sessions).sort()]; // Add "all" option and sort
  }, [alumni]);

  if (isLoading) {
    return (
      <div className="container mx-auto px-4">
        <Card>
          <CardHeader>
            <Skeleton className="h-8 w-3/4" />
            <Skeleton className="h-4 w-1/2 mt-2" />
          </CardHeader>
          <CardContent className="space-y-6 mt-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="space-y-2">
                <Skeleton className="h-6 w-1/4" />
                <Skeleton className="h-4 w-3/4" />
                <Skeleton className="h-4 w-2/3" />
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    );
  }

  if (isError || !alumni) {
    return (
      <div className="container mx-auto px-4">
        <PageHeader page="Alumni Details" />
        <Card>
          <CardHeader>
            <CardTitle>Error</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-red-600">
              {error?.message || "Alumni data could not be loaded or found."}
            </p>
          </CardContent>
        </Card>
      </div>
    );
  }

  const { biodata, acaddata } = alumni.data;

  const allValidCourses = acaddata.results.courses.filter(
    (c) => c.course && c.title && c.session && c.semester
  );

  const filteredCourses = allValidCourses.filter((course) => {
    const sessionMatch =
      selectedSession === "all" || course.session === selectedSession;
    const semesterMatch =
      selectedSemester === "all" || course.semester === selectedSemester;
    return sessionMatch && semesterMatch;
  });

  return (
    <div className="container mx-auto px-4">
      <Button variant="ghost" onClick={() => navigate(-1)}>
        <ArrowLeftIcon /> Back
      </Button>
      <PageHeader page={`${biodata.fullname}`} />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle>Personal Information</CardTitle>
            <CardDescription>Basic details of the alumnus.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <InfoItem label="Matric No." value={biodata.mat_no} />
            <InfoItem label="Email" value={alumni.email} />
            <InfoItem label="Phone" value={alumni.phone_number} />
            <InfoItem label="Gender" value={alumni.gender} />
            <InfoItem
              label="Date of Birth"
              value={new Date(alumni.date_of_birth).toLocaleDateString()}
            />
          </CardContent>
        </Card>

        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Academic Profile</CardTitle>
            <CardDescription>
              Academic journey and achievements.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <InfoItem label="Faculty" value={acaddata.faculty} />
            <InfoItem label="Department" value={acaddata.department} />
            <InfoItem label="Course of Study" value={acaddata.course} />
            <InfoItem label="Degree Awarded" value={acaddata.degree} />
            <InfoItem
              label="Graduation Year"
              value={acaddata.graduation_year?.toString()}
            />
            <InfoItem label="Final CGPA" value={acaddata.results.cgpa} />
            <InfoItem
              label="Graduation Date"
              value={acaddata.graduation_date}
            />
            <InfoItem label="Status" value={acaddata.graduation_status} />
          </CardContent>
        </Card>

        <Card className="col-span-full">
          <CardHeader className="flex justify-between items-center">
            <div>
              <CardTitle>Academic Records</CardTitle>
              <CardDescription>
                Detailed course history and grades. Filter by session and
                semester.
              </CardDescription>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <div className="flex-1">
                <label
                  htmlFor="session-select"
                  className="block text-sm font-medium text-muted-foreground mb-1"
                >
                  Session
                </label>
                <Select
                  value={selectedSession}
                  onValueChange={setSelectedSession}
                >
                  <SelectTrigger id="session-select">
                    <SelectValue placeholder="Select session" />
                  </SelectTrigger>
                  <SelectContent>
                    {uniqueSessions.map((session) => (
                      <SelectItem key={session} value={session}>
                        {session === "all" ? "All Sessions" : session}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="flex-1">
                <label
                  htmlFor="semester-select"
                  className="block text-sm font-medium text-muted-foreground mb-1"
                >
                  Semester
                </label>
                <Select
                  value={selectedSemester}
                  onValueChange={setSelectedSemester}
                >
                  <SelectTrigger id="semester-select">
                    <SelectValue placeholder="Select semester" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Semesters</SelectItem>
                    <SelectItem value="1">1st Semester</SelectItem>
                    <SelectItem value="2">2nd Semester</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            {filteredCourses.length > 0 ? (
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Session</TableHead>
                    <TableHead>Semester</TableHead>
                    <TableHead>Course Code</TableHead>
                    <TableHead>Course Title</TableHead>
                    <TableHead className="text-center">Units</TableHead>
                    <TableHead className="text-center">Grade</TableHead>
                    <TableHead>Remarks</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredCourses.map((course, index) => (
                    <TableRow key={course.courseid || index}>
                      <TableCell>{course.session}</TableCell>
                      <TableCell>{course.semester}</TableCell>
                      <TableCell>{course.course}</TableCell>
                      <TableCell>{course.title}</TableCell>
                      <TableCell className="text-center">
                        {course.units}
                      </TableCell>
                      <TableCell className="text-center">
                        {course.grade}
                      </TableCell>
                      <TableCell>{course.remarks}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            ) : (
              <p className="text-center text-muted-foreground mt-4">
                No academic records match the selected filters.
              </p>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

// Helper component for consistent display of label-value pairs
const InfoItem = ({
  label,
  value,
}: {
  label: string;
  value?: string | number | null;
}) => (
  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between py-1">
    <p className="text-sm font-medium text-muted-foreground">{label}:</p>
    <p className="text-sm text-foreground sm:text-right">{value ?? "N/A"}</p>
  </div>
);
