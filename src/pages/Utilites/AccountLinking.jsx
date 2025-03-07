import { Card, CardContent } from '@/components/ui/card';
import React from 'react';
import { Link } from 'react-router-dom';

const AccountLinking = () => {
  const accountLinks = [
    { title: "Login ", path: "/login" },
    { title: "Register", path: "/register" },
    { title: "Vendor Register", path: "/vendor/register" },
    { title: "Forgotten Password", path: "/forget-password" },
    { title: "Address Book", path: "/address" },
    { title: "Wish List", path: "/wishlist" },
    { title: "Order History", path: "/order-history" },
    { title: "Downloads", path: "#" },
    { title: "Recurring payments", path: "#" },
    { title: "Returns", path: "/refund-return" },
    { title: "Newsletter", path: "#" },
  ]

    
    return (
    
          <Card className="w-fit">
            <CardContent className="p-4">
              <h2 className="font-bold mb-4">ACCOUNT</h2>
              <ul className="space-y-2">
                {accountLinks.map((link, index) => (
                  <li key={index} className="flex items-center">
                    <span className="mr-2">•</span>
                    <Link to={link.path} className="text-gray-700 hover:text-gray-900">
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
    );
};

export default AccountLinking;