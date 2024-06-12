interface COC {
  id: number;
  date: string;
  control: string;
  no: string;
  last_name: string;
  first_name: string;
  middle_name: string;
  gender: string;
  birthday: string;
  age: number;
  ethnicity: string;
  purpose: string;
  municipality: string;
  barangay: string;
  father: string;
  father_ethnicity: string;
  father_place_of_origin: string;
  mother: string;
  mother_ethnicity: string;
  mother_place_of_origin: string;
  issuing_office: string;
  status: "REJECTED" | "APPROVED" | "PENDING";
  created_at: Date;
  updated_at: Date;
}
