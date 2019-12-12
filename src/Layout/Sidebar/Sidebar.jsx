import React from "react";
 import './sidebar.css';

function Sidebar() {
	return (
    <aside className="main-sidebar sidebar-dark-primary elevation-4">
    <a href="index3.html" className="brand-link">
          {/* <p>Logo</p> */}
        &nbsp; &nbsp; <span className="nav-icon fa fas fa-home"></span>
        &nbsp; <span className="brand-text font-weight-light">Dashboard</span>
    </a>

    <div className="sidebar">
      <div className="mb-3 d-flex">
             {/* <div className="image">
               <img src="dist/img/user2-160x160.jpg" className="img-circle elevation-2" alt="User Image" />
        </div> */}


          {/* <div className="input-group input-group-sm">
            <a href="#" className="d-block">Dashboard</a>
            <p>Dashboard</p>
              </div> */}
            </div>

      <nav className="mt-2">
              <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">

            {/* <li className="nav-item has-treeview menu-open">
               <a href="#" className="nav-link active">
                    <i className="nav-icon fas fa-tachometer-alt"></i>
                    <p>
                      Dashboard
                <i className="right fas fa-angle-left"></i>
                    </p>
                  </a>
                     <ul className="nav nav-treeview">
                      <li className="nav-item">
                        <a href="./index.html" className="nav-link active">
                          <i className="far fa-circle nav-icon"></i>
                          <p>Dashboard v1</p>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="./index2.html" className="nav-link">
                          <i className="far fa-circle nav-icon"></i>
                          <p>Dashboard v2</p>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="./index3.html" className="nav-link">
                          <i className="far fa-circle nav-icon"></i>
                          <p>Dashboard v3</p>
                        </a>
                      </li>
                    </ul>
                </li>*/}
            <form className="form-inline pb-3 mb-3 ml-3">
              <div className="input-group input-group-sm">
                {/* <span className="nav-icon fas fa-search"></span> */}
               &nbsp;&nbsp; <input className="form-control form-control-navbar" type="search" placeholder="Search" aria-label="Search" />
              </div>
            </form>

                <li className="nav-item">
                  <a href="pages/widgets.html" className="nav-link">
                <i className="nav-icon fa fa-industry"></i>
                    <p>
                      Warehouse - Gurgaon
                    </p>
                <i className="fas fa-angle-left right"></i>
                  </a>
                </li>

            <li className="nav-item">
              <a href="pages/widgets.html" className="nav-link">
                <i className="nav-icon fa fa-line-chart"></i>
                <p>Reports </p>
                <i className="fas fa-angle-left right"></i>
              </a>
            </li>

            <li className="nav-item">
              <a href="pages/widgets.html" className="nav-link">
                <i className="nav-icon fa fa-database"></i>
                <p>Admin </p>
                <i className="fas fa-angle-left right"></i>
              </a>
            </li>
              </ul>
            </nav>
    </div>
  </aside>
	)
}

export default Sidebar;