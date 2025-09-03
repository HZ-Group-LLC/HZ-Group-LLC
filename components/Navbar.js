"use client";

import { useState } from "react";
import {
  AppBar,
  Box,
  Divider,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import { usePathname } from "next/navigation"; // ✅ import hook
import Image from "next/image";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname(); // ✅ current URL path

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/contactus", label: "Contact" },
  ];

  const drawer = (
    <Box sx={{ textAlign: "left", padding: "20px" }}>
      <Typography
        color={"black"}
        variant="h6"
        component="div"
        sx={{ flexGrow: 1, my: 2, fontWeight: "bold", textAlign: "center" }}
      >
        {/* logo here */}
      </Typography>
      <Divider sx={{ mb: 2 }} />
      <ul className="mobile-navigation">
        {navItems.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className={pathname === item.href ? "active" : ""}
              onClick={() => setMobileOpen(false)}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </Box>
  );

  return (
    <>
      <Box>
        <AppBar
          component="nav"
          sx={{ bgcolor: "#0273cc", boxShadow: "0 2px 4px rgba(0,0,0,0.1)" }}
        >
          <Toolbar>
            <IconButton
              sx={{
                mr: 2,
                display: { sm: "none" },
                color: "white",
              }}
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>

            <Typography
              color={"black"}
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, fontWeight: "bold" }}
            >
              <Link href="/">
                <Image
                  src="/images/logo.png" // path inside public folder
                  alt="Logo"
                  width={120} // adjust width as needed
                  height={50} // adjust height as needed
                  className=" py-2"
                />
              </Link>
            </Typography>

            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <ul className="navigation-menu flex gap-6">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={pathname === item.href ? "active" : ""}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </Box>
          </Toolbar>
        </AppBar>

        <Box component="nav">
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            sx={{
              display: { xs: "block", sm: "none", bgcolor: "#0273cc" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: 240,
                bgcolor: "#0273cc",
              },
            }}
          >
            {drawer}
          </Drawer>
        </Box>

        {/* Push content below navbar */}
        <Toolbar />
      </Box>
    </>
  );
};

export default Navbar;
