import { createBrowserRouter, Outlet } from "react-router-dom";
import { ROUTES as AppRoutes } from "./routes";
import Layout from "./Layout/Layout";
import {
  HomePage,
  SignInPage,
  SignUpPage,

} from "@/pages";
import { ProtectedRoute } from "@/shared/ui/ProtectedRoute";
// import { ArticleProvider } from "../providers/ArticleContext";
// import { OneArticlePage } from "@/pages/OneArticlePage";
// import { ArticlesPage } from "@/pages/ArticlesPage";
// import { OneArticleItem } from "@/entities/article/ui/OneArticleItem/OneArticleItem";

export const router = createBrowserRouter([
  {
    path: AppRoutes.HOME,
    element: <Layout />,
    children: [
      {
        path: AppRoutes.HOME,
        element: <HomePage />,
      },
      // {
      //   path: AppRoutes.CARDS,
      //   element: (
      //     <ProtectedRoute>
      //       <CardsPage />
      //     </ProtectedRoute> )

      // },

      {
        path: AppRoutes.SIGNIN,
        element: <SignInPage />,
      },
      {
        path: AppRoutes.SIGNUP,
        element: <SignUpPage />,
      },
    ],
  },
]);
