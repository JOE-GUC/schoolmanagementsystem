import { Button, Card, CardContent, Typography } from '@mui/material';
import Link from 'next/link';

const CourseCard = ({ course }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6">{course.title}</Typography>
        <Typography variant="body2" color="textSecondary">{course.description}</Typography>
        <Link href={`/courses/${course.id}`} passHref>
          <Button variant="contained" color="primary" fullWidth>
            View Course
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
};

export default CourseCard;
