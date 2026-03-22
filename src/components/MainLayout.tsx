import { Outlet } from "react-router-dom";

export function MainLayout() {
  return (
    <div>
      Meu layout
      <div
        style={{
          background: "red",
        }}
      >
        <Outlet />
      </div>
    </div>
  );
}
