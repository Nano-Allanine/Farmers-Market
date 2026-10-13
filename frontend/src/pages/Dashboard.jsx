
import {
  Package,
  ShoppingCart,
  Banknote,
  Clock,
  Plus,
  TrendingUp,
  ArrowUpRight,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import '../styles/Dahboard.css';

const stats = [
  {
    title: "Total Products",
    value: "24",
    description: "Products listed",
    icon: Package,
  },
  {
    title: "Total Orders",
    value: "18",
    description: "Orders received",
    icon: ShoppingCart,
  },
  {
    title: "Total Sales",
    value: "UGX 850,000",
    description: "Sales revenue",
    icon: Banknote,
  },
  {
    title: "Pending Orders",
    value: "5",
    description: "Awaiting processing",
    icon: Clock,
  },
];

const recentOrders = [
  {
    id: "ORD-1001",
    customer: "Sarah Namusoke",
    product: "Matooke",
    amount: "UGX 75,000",
    status: "Pending",
  },
  {
    id: "ORD-1002",
    customer: "David Okello",
    product: "Fresh tomatoes",
    amount: "UGX 40,000",
    status: "Completed",
  },
  {
    id: "ORD-1003",
    customer: "Mary Achieng",
    product: "Beans",
    amount: "UGX 120,000",
    status: "Processing",
  },
];

function Dashboard() {
  return (
    <main className="dashboard">
      <div className="dashboard-header">
        <div>
          <h1>Dashboard</h1>
          <p>
            Venda's Overview
          </p>
        </div>

        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Add Product
        </Button>
      </div>

      <section className="stats-grid">
        {stats.map((stat) => {
          const Icon = stat.icon;

          return (
            <Card key={stat.title} className="stat-card">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">
                  {stat.title}
                </CardTitle>

                <Icon className="h-5 w-5 text-green-700" />
              </CardHeader>

              <CardContent>
                <div className="stat-value">{stat.value}</div>
                <p className="stat-description">
                  {stat.description}
                </p>
              </CardContent>
            </Card>
          );
        })}
      </section>

      <section className="dashboard-lower">
        <Card className="sales-card">
          <CardHeader>
            <CardTitle>Sales Overview</CardTitle>
          </CardHeader>

          <CardContent>
            <div className="sales-placeholder">
              <TrendingUp size={40} />
              <p>Sales analytics will appear here.</p>
              <span>
                We'll connect this section to real order data.
              </span>
            </div>
          </CardContent>
        </Card>

        <Card className="orders-card">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Recent Orders</CardTitle>

            <Button variant="ghost" size="sm">
              View all
              <ArrowUpRight className="ml-1 h-4 w-4" />
            </Button>
          </CardHeader>

          <CardContent>
            <div className="orders-list">
              {recentOrders.map((order) => (
                <div className="order-row" key={order.id}>
                  <div className="order-info">
                    <strong>{order.customer}</strong>
                    <span>
                      {order.id} · {order.product}
                    </span>
                  </div>

                  <div className="order-details">
                    <strong>{order.amount}</strong>

                    <span
                      className={`order-status ${order.status.toLowerCase()}`}
                    >
                      {order.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}

export default Dashboard;
