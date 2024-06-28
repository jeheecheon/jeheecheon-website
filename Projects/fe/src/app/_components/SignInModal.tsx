import { useDispatch, useSelector } from "react-redux";

import { selectIsSignInModalOpen, setIsSignOnModalOpen } from "@/_redux/signInModalSlice";

import GoogleLoginButton from "@/_components/GoogleLoginButton";
import CustomModal from "./CustomModal";

const SignInModal = () => {
    const dispatch = useDispatch();
    const isSignInModalOpen = useSelector(selectIsSignInModalOpen);

    return (
        <CustomModal onClose={() => dispatch(setIsSignOnModalOpen(false))} isOpen={isSignInModalOpen}>
            <div className="flex flex-col px-6 pt-3">
                <div className="font-semibold text-default-14-dark dark:text-default-12 flex flex-col items-start">
                    <p className="text-2xl">Login! 🐶</p>
                    <p>leave your comment!</p>
                </div>

                <p className="mt-5 text-gray-500 text-xs">
                    I do not collect user info for personal use...
                </p>

                <GoogleLoginButton className="mt-2" />
            </div>
        </CustomModal>
    );
};

export default SignInModal;
