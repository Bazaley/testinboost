import { Container } from "../Container/Container";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <>
      <main>
        <Container>
          <Suspense fallback={<h1>Please Wait</h1>}>
            <Outlet />
          </Suspense>
        </Container>
      </main>
    </>
  );
};
