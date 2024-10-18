import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import { ROUTES } from "@/app/router/routes";
import { logout, UserCard } from "@/entities/user";
import Button, { ThemeButton } from "@/shared/ui/Button/Button";
import { useAppDispatch, useAppSelector } from "@/shared/hooks/reduxHooks";
import { getGame } from "@/entities/game/api/gameThunks";
// import Loader from '@/shared/ui/Loader/Loader';

export const Navbar: React.FC = () => {
  // const { user, loading } = useAppSelector((state) => state.user);
  const { user } = useAppSelector((state) => state.user);
  const { game } = useAppSelector((state) => state.game);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getGame());
  }, [dispatch]);

  const handleLogout = () => {
    dispatch(logout());
  };

  // if (loading) {
  //   <div className={styles.container}>
  //     <Loader />
  //   </div>;
  // }

  return (
    <div className={styles.container}>
      <Button theme={ThemeButton.PRIMARY}>
        <Link to={ROUTES.HOME}>Home</Link>
      </Button>
      <Button theme={ThemeButton.PRIMARY}>
        <Link to={ROUTES.CARDS}>Квиз</Link>
      </Button>
      {/* <Button theme={ThemeButton.PRIMARY}>
        <Link to={ROUTES.ARTICLES}>Articles</Link>
      </Button> */}

      {user ? (
        <>
          <UserCard user={user} />
          <p style={{ color: "white" }}>Score: {game?.game.score}</p>
          <Button theme={ThemeButton.DANGER} onClick={handleLogout}>
            Logout
          </Button>
        </>
      ) : (
        <>
          <Button theme={ThemeButton.PRIMARY}>
            <Link to={ROUTES.SIGNIN}>Sign In</Link>
          </Button>

          <Button theme={ThemeButton.PRIMARY}>
            <Link to={ROUTES.SIGNUP}>Sign Up</Link>
          </Button>
        </>
      )}
    </div>
  );
};

export default Navbar;
