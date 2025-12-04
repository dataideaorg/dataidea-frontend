// School/Certificate related types

export interface Course {
  id: number;
  title: string;
  description: string;
  duration: string;
  level: 'beginner' | 'intermediate' | 'advanced' | 'all';
  skills: string[];
  free_resources_link?: string;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

export interface Enrollment {
  id: number;
  user: {
    id: number;
    email: string;
    name: string;
    picture?: string;
  };
  course: Course;
  status: 'enrolled' | 'in_progress' | 'completed' | 'dropped';
  enrolled_date: string;
  completed_date?: string;
  notes?: string;
}

export interface Certificate {
  id: number;
  user: {
    id: number;
    email: string;
    name: string;
    picture?: string;
  };
  course: Course;
  certificate_number: string;
  verification_code: string;
  issued_date: string;
  issued_by_name?: string;
}

export interface CertificateVerification {
  valid: boolean;
  certificate?: {
    certificate_number: string;
    student_name: string;
    course_title: string;
    issued_date: string;
    verification_code: string;
  };
  detail?: string;
}