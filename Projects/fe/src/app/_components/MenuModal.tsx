import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { signOut } from "@/_utils/user";
import { setIsSignOnModalOpen } from "@/_redux/signInModalSlice";
import { selectIsSignedIn } from "@/_redux/userSlice";
import CustomModal from "./CustomModal";

const navLinks = [
    {
        name: "Home",
        to: "/",
    },
    {
        name: "Portfolio",
        to: import.meta.env.VITE_PORTFOLIO_URL,
    },
];

const categoryLinks = [
    {
        name: "Recent Posts",
        to: "/recent-posts/pages/1",
    },
    {
        name: "Algorithm",
        to: "/categories/Algorithm/pages/1",
    },
    {
        name: "Web Development",
        to: "/categories/Web-Development/pages/1",
    },
    {
        name: "Uncategorized",
        to: "/categories/Uncategorized/pages/1",
    },
];

interface MenuModalProps {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const MenuModal: React.FC<MenuModalProps> = ({ setIsOpen, isOpen }) => {
    const dispatch = useDispatch();
    const isSignedIn = useSelector(selectIsSignedIn);

    function convertLinksToJsx(
        links: { name: string; to: string }[],
        title: string
    ) {
        return (
            <>
                <p className="text-orange-400 text-lg">{title}</p>
                <nav className="flex flex-col text-default-18-dark text-sm dark:text-default-10 mt-1">
                    {links.map((link, index) => {
                        const className =
                            "w-full py-2 border-b-[0.1rem] dark:border-y-default-7-dark border-y-default-5";

                        return (
                            <span key={index} className={className}>
                                {link.to?.includes("Portfolio") ? (
                                    <a href={link.to}>{link.name}</a>
                                ) : (
                                    <Link
                                        to={link.to}
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {link.name}
                                    </Link>
                                )}
                            </span>
                        );
                    })}
                </nav>
            </>
        );
    }

    return (
        <CustomModal onClose={() => setIsOpen(false)} isOpen={isOpen}>
            <div className="h-full flex flex-col justify-between">
                <div>
                    {convertLinksToJsx(navLinks, "Navigation")}
                    <button
                        className="text-default-18-dark text-sm dark:text-default-10 w-full text-left py-2 
                        border-b-[0.1rem] border-y-default-5 dark:border-y-default-7-dark"
                        onClick={() => {
                            setIsOpen(false);
                            if (isSignedIn) {
                                signOut();
                            } else {
                                setIsOpen(false);
                                dispatch(setIsSignOnModalOpen(true));
                            }
                        }}
                    >
                        {isSignedIn ? "Sign-out" : "Sign-in"}
                    </button>
                </div>

                <div className="mt-5">
                    {convertLinksToJsx(categoryLinks, "Category")}
                </div>
            </div>
        </CustomModal>
    );
};

export default MenuModal;
