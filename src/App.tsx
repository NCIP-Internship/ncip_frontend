import MainLayout from "./components/Layout/MainLayout";
import AppProviders from "./providers/app";
import AppRoutes from "./routes";

const App = () => {
  return (
    <AppProviders>
      <MainLayout>
        <AppRoutes />
      </MainLayout>
    </AppProviders>
  );
};

export default App;
