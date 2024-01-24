import React from "react";
import logo from "../../assets/logo.png";
import profile from "../../assets/profile.jpg";
import "./Dashboard.css";
import SideLink from "../SideLink/SideLink";
import LineChart from "../LineChart/LineChart";
import Table from "../Table/Table";
import {PieChart}  from "../PieChart/PieChart";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
    const router = useNavigate()
  const links = [
    { name: "Overview", icon: <i className="bx bx-menu"></i> },
    { name: "Sales Reports", icon: <i className="bx bxs-bar-chart-alt-2"></i> },
    { name: "Transactions", icon: <i className="bx bx-receipt"></i> },
    { name: "orderSummary", icon: <i className="bx bx-clipboard"></i> },
    { name: "Products Stocks", icon: <i className="bx bx-package"></i> },
    { name: "Settings", icon: <i className="bx bxs-cog"></i> },
    { name: "Support & Help", icon: <i className="bx bx-support"></i> },
  ];

  return (
    <div className="main-2">
      <aside className="left">
        <div className="logo">
          <img src={logo} style={{width: "40px", height:"40px"}} alt="logo" className="logo-img"/>
          <h1>TruAD</h1>
        </div>
        <div className="links">
          {links.map((link) => {
            return <SideLink link={link.name} icon={link.icon} key={link.name}/>;
          })}
        </div>

        <div className="logout">
          <i className="bx bx-log-out"></i>
          <p onClick={() => router("/")}>Log Out</p>
        </div>
      </aside>
      <main>
        <div className="container">
          <div className="top">
            <div className="sales">
              <h1>Sales Analytics</h1>
            </div>
            <div className="nav-links">
              <a href="#">Products</a>
              <a href="#">Analytics</a>
              <a href="#">Revenue</a>
              <a href="#">Message</a>
            </div>
            <div className="profile">
              <div className="profile-image">
                <img src={profile} alt="logo" className="image" />
              </div>
              <div className="info">
                <h3>Aniket Mukherjee</h3>
                <p>Sales Manager</p>
              </div>
            </div>
          </div>
          <div className="analytics">
            <div className="item">
              <div className="title">
                <i className="bx bx-line-chart"></i>
                <p>Total Sales</p>
              </div>
              <div className="info">
                <h6>$41,23,222</h6>
                <p>+5.64</p>
                <i className="bx bx-bar-chart-alt"></i>
              </div>
              <div className="sub">
                <p>Increase total sales by 5.4% from last month</p>
              </div>
            </div>
            <div className="item">
              <div className="title">
                <i className="bx bx-line-chart"></i>
                <p>Total Sales</p>
              </div>
              <div className="info">
                <h6>$41,23,222</h6>
                <p>+5.64</p>
                <i className="bx bx-bar-chart-alt"></i>
              </div>
              <div className="sub">
                <p>Increase total sales by 5.4% from last month</p>
              </div>
            </div>
            <div className="item">
              <div className="title">
                <i className="bx bx-line-chart"></i>
                <p>Total Sales</p>
              </div>
              <div className="info">
                <h6>$41,23,222</h6>
                <p>+5.64</p>
                <i className="bx bx-bar-chart-alt"></i>
              </div>
              <div className="sub">
                <p>Increase total sales by 5.4% from last month</p>
              </div>
            </div>
            <div className="big">
              <h3>Sales Performance</h3>
              <p>You can see monthly sales volume from here</p>
              <LineChart />
            </div>
            <div className="insights">
              <div className="info">
                <h3>View Insights</h3>
                <p>There are more to view</p>
              </div>
              <div className="button">
                <div className="name">
                  <i className="bx bx-bar-chart-alt"></i>
                  <a>Order Complete Ratio</a>
                </div>
                <i className="bx bx-chevron-right"></i>
              </div>
              <div className="button">
                <div className="name">
                  <i className="bx bx-analyse"></i>
                  <a>Invoice Analysis</a>
                </div>
                <i className="bx bx-chevron-right"></i>
              </div>
            </div>
            <div className="misc">
              <h4>Analytics</h4>
              <PieChart />
            </div>
            <div className="report">
              <h4>Recent Orders</h4>
              <Table />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
