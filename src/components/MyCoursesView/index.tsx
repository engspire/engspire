"use client";
import { useAuth } from '@clerk/nextjs';
import MyCoursesTable from './MyCoursesTable';
import { useProfile } from '@/providers/ProfileProvider';
import { useQuery } from '@tanstack/react-query';
import { apiClient } from '@/apiClient';

export default function MyCoursesView() {
  const { getToken } = useAuth();
  const { profile } = useProfile();

  const { data: courses, isLoading } = useQuery({
    queryKey: ["courses"], queryFn: async () => {
      const { data } = await apiClient(await getToken()).get(`/v1/me/courses`);
      console.log(data);
      return data;
    }
  });

  return (
    <div className='grid gap-6'>
      {isLoading && <div className="min-h-[172px] max-w-sm grid place-items-center text-center"><span className="loading loading-bars loading-lg" ></span></div>}
      {courses?.coursesAsLearner && courses?.coursesAsLearner.length > 0 && (
        <div>
          <h3 className="font-semibold mb-2">Courses as a Learner</h3>
          <div className="grid gap-3">
            <MyCoursesTable records={courses?.coursesAsLearner ?? []} />
          </div>
        </div>
      )}
      {courses?.coursesAsTeacher && courses?.coursesAsTeacher.length > 0 && (
        <div>
          <h3 className="font-semibold mb-2">Courses as a Teacher</h3>
          <div className="grid gap-3">
            <MyCoursesTable records={courses?.coursesAsTeacher ?? []} />
          </div>
        </div>
      )}
    </div>
  );
}
