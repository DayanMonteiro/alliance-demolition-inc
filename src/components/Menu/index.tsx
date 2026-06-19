"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { IoChevronDown, IoClose, IoMenu } from "react-icons/io5";

import LogoImg from "../../../public/logo.svg";

import { menuLinks, servicesMenuItems } from "./definitions";

import styles from "./Menu.module.css";

const Menu = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [isDesktopServicesOpen, setIsDesktopServicesOpen] = useState(false);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setIsMobileServicesOpen(false);
  };

  const closeDesktopServices = () => {
    setIsDesktopServicesOpen(false);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logoWrapper}>
          <Image
            src={LogoImg}
            alt="Alliance Demolition Inc"
            width={50}
            height={50}
          />

          <div className={styles.containerText}>
            <h2>ALLIANCE DEMOLITION INC</h2>
          </div>
        </Link>

        <nav className={styles.desktopMenu}>
          {menuLinks.map((link) => {
            if (link.hasDropdown) {
              return (
                <div
                  key={link.label}
                  className={styles.dropdownWrapper}
                  onMouseLeave={closeDesktopServices}
                >
                  <button
                    type="button"
                    className={`${styles.menuLinkButton} ${
                      isDesktopServicesOpen ? styles.activeMenuLink : ""
                    }`}
                    onClick={() => setIsDesktopServicesOpen((prev) => !prev)}
                  >
                    {link.label}

                    <IoChevronDown
                      size={14}
                      className={
                        isDesktopServicesOpen
                          ? styles.chevronOpen
                          : styles.chevron
                      }
                    />
                  </button>

                  {isDesktopServicesOpen && (
                    <div className={styles.dropdownMenu}>
                      <Link href="/services" onClick={closeDesktopServices}>
                        ALL SERVICES
                      </Link>

                      {servicesMenuItems.map((service) => (
                        <Link
                          key={service.href}
                          href={service.href}
                          onClick={closeDesktopServices}
                        >
                          {service.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            return (
              <Link
                key={link.href}
                href={link.href}
                className={styles.menuLink}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          className={styles.mobileButton}
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMobileMenuOpen ? (
            <IoClose size={30} color="#1e1e1e" />
          ) : (
            <IoMenu size={30} color="#1e1e1e" />
          )}
        </button>
      </div>

      {isMobileMenuOpen && (
        <nav className={styles.mobileMenu}>
          {menuLinks.map((link) => {
            if (link.hasDropdown) {
              return (
                <div key={link.label} className={styles.mobileDropdown}>
                  <button
                    type="button"
                    className={styles.mobileDropdownButton}
                    onClick={() => setIsMobileServicesOpen((prev) => !prev)}
                  >
                    {link.label}

                    <IoChevronDown
                      size={16}
                      className={
                        isMobileServicesOpen
                          ? styles.chevronOpen
                          : styles.chevron
                      }
                    />
                  </button>

                  {isMobileServicesOpen && (
                    <div className={styles.mobileSubmenu}>
                      <Link href="/services" onClick={closeMobileMenu}>
                        ALL SERVICES
                      </Link>

                      {servicesMenuItems.map((service) => (
                        <Link
                          key={service.href}
                          href={service.href}
                          onClick={closeMobileMenu}
                        >
                          {service.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            return (
              <Link key={link.href} href={link.href} onClick={closeMobileMenu}>
                {link.label}
              </Link>
            );
          })}
        </nav>
      )}
    </header>
  );
};

export default Menu;
