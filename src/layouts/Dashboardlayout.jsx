import { Outlet, Link } from 'react-router-dom';

export default function DashboardLayout() {
  return (
    <div className="dashboard-container" style={{ display: 'flex' }}>
      <aside style={{ width: '250px', background: '#eee' }}>
        <h3>Dashboard Menu</h3>
        <nav style={{ display: 'flex', flexDirection: 'column' }}>
          <Link to="/dashboard">Overview</Link>
          <Link to="/dashboard/settings">Settings</Link>
          <Link to="/">Logout</Link>
        </nav>
      </aside>
      
      <main style={{ flex: 1, padding: '20px' }}>
        {/* Dashboard sub-pages inject here */}
        <Outlet />
      </main>
    </div>
  );
}
