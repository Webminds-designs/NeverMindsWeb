import { useState, useEffect } from "react";
import {
  useGetUserProfileQuery,
  useUpdateStudentProfileMutation,
  useUpdateTeacherProfileMutation,
} from "../redux/slices/userSlice";

export const useUserProfile = (userId) => {
  const [profileData, setProfileData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // RTK Query hooks
  const {
    data,
    isLoading: isLoadingProfile,
    error: profileError,
  } = useGetUserProfileQuery(userId);
  const [updateStudentProfile] = useUpdateStudentProfileMutation();
  const [updateTeacherProfile] = useUpdateTeacherProfileMutation();

  useEffect(() => {
    if (data) {
      setProfileData(data);
      setIsLoading(false);
    }

    if (profileError) {
      setError(profileError);
      setIsLoading(false);
    }
  }, [data, profileError]);

  const updateProfile = async (userData) => {
    try {
      if (profileData?.role === "student") {
        await updateStudentProfile({ id: userId, userData }).unwrap();
      } else if (profileData?.role === "teacher") {
        await updateTeacherProfile({ id: userId, userData }).unwrap();
      }
      return { success: true };
    } catch (err) {
      setError(err);
      return { success: false, error: err };
    }
  };

  return { profileData, isLoading, error, updateProfile };
};
