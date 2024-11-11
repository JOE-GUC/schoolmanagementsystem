import { Container, Typography, Button } from '@mui/material';
import { useRouter } from 'next/router';
import axios from 'axios';

const CourseDetail = ({ course }) => {
  const router = useRouter();

  if (!course) return <Typography>Loading...</Typography>;

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        {course.title}
      </Typography>
      <Typography variant="body1">{course.description}</Typography>
      <Button variant="contained" color="primary" onClick={() => router.push(`/student`)}>Enroll</Button>
    </Container>
  );
};

export async function getServerSideProps({ params }) {
  const { id } = params;
  const course = await axios.get(`https://api.example.com/courses/${id}`).then((res) => res.data);

  return { props: { course } };
}

export default CourseDetail;
