/** @jsxImportSource @emotion/react */
import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Button from "./Button";
import Link from "./Link";
import {
  Nav,
  LogoWrapper,
  LogoIconGroup,
  NavLinksWrapper,
  NavLinks,
  NavLink,
  Hamburger,
  NavActions,
  MobileMenu,
  MobileNavLinks,
  MobileNavLink,
  MobileNavActions,
  CloseButton,
} from "./Navigation.styles";

const NAV_LINKS = [
  { id: 1, label: "Home", href: "/", isRoute: true },
  { id: 2, label: "Service", href: "#service", isRoute: false },
  { id: 3, label: "Feature", href: "#feature", isRoute: false },
  { id: 4, label: "Product", href: "#product", isRoute: false },
  { id: 5, label: "Testimonial", href: "#testimonial", isRoute: false },
  { id: 6, label: "FAQ", href: "/faq", isRoute: true },
  { id: 7, label: "Blog", href: "/blog", isRoute: true },
];

export default function Navigation() {
  const navigate = useNavigate();
  const location = useLocation();
  const navRef = useRef(null);
  const lastScrollY = useRef(window.scrollY);
  const [mobileOpen, setMobileOpen] = useState(false);

  const updateNavClasses = (element, isVisible, isScrolled) => {
    element.classList.toggle("nav-visible", isVisible);
    element.classList.toggle("nav-hidden", !isVisible);
    element.classList.toggle("scrolled", isScrolled);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPosition = window.scrollY;
      const isScrollingDown = currentScrollPosition > lastScrollY.current;
      const isScrollingUp = currentScrollPosition < lastScrollY.current;
      const isAtTop = currentScrollPosition === 0;
      const shouldHideNav = isScrollingDown && currentScrollPosition > 80;

      if (navRef.current) {
        if (shouldHideNav) {
          updateNavClasses(navRef.current, false, false);
        } else if (isScrollingUp) {
          updateNavClasses(navRef.current, true, !isAtTop);
        }

        if (isAtTop) {
          navRef.current.classList.remove("scrolled");
        }
      }

      lastScrollY.current = currentScrollPosition;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (navRef.current) {
      updateNavClasses(navRef.current, true, false);
    }
  }, []);

  const handleHamburgerClick = () => setMobileOpen((open) => !open);
  const handleCloseMenu = () => setMobileOpen(false);
  const handleLogin = () => console.log("Login clicked");
  const handleSignup = () => console.log("Signup clicked");
  const handleLogoClick = () => navigate("/");

  const handleNavigation = (link) => {
    if (link.isRoute) {
      // For routes like Home and FAQ
      navigate(link.href);
    } else {
      // For hash links to sections
      if (location.pathname !== "/") {
        // If not on home page, navigate to home first, then scroll
        navigate("/");
        setTimeout(() => {
          const element = document.querySelector(link.href);
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }, 100);
      } else {
        // Already on home page, just scroll
        const element = document.querySelector(link.href);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
    setMobileOpen(false);
  };

  return (
    <>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap"
      />
      <Nav ref={navRef} className="nav-visible">
        <LogoWrapper onClick={handleLogoClick} style={{ cursor: "pointer" }}>
          <LogoIconGroup>
            <svg
              width="35"
              height="24"
              viewBox="0 0 35 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.7863 13.1341L13.3954 22.3669L8.00448 13.1341H18.7863ZM20.2305 12.3088H6.55444L13.3954 24L20.2305 12.3088Z"
                fill="#263238"
              />
              <path
                d="M28.1591 1.65038L33.55 10.8833H22.7681L28.1591 1.65038ZM28.1591 0L21.3181 11.6912H35L28.1591 0Z"
                fill="#263238"
              />
              <path
                d="M0 0L5.7359 10.3409L12.0038 0.259661L0 0Z"
                fill="#4CAF4F"
              />
              <path
                d="M13.3955 0.905762L19.4121 11.1889H7.36728L13.3955 0.905762Z"
                fill="#4CAF4F"
              />
              <path
                d="M20.9615 13.4341L26.9839 24H14.6526L20.7744 13.4341H20.9615Z"
                fill="#4CAF4F"
              />
              <path
                d="M22.2653 12.7935L28.1591 23.1978L34.1347 12.7935H22.2653Z"
                fill="#4CAF4F"
              />
            </svg>
          </LogoIconGroup>
          <div
            dangerouslySetInnerHTML={{
              __html:
                '<svg id="I213:948;208:745" width="112" height="22" viewBox="0 0 112 22" fill="none" xmlns="http://www.w3.org/2000/svg" class="nexcent-text" style="width: 111.49px; height: 20.662px; fill: #263238"> <path d="M17.0327 0.668945V21.0326H13.3139L4.45455 8.21582H4.3054V21.0326H0V0.668945H3.77841L12.5682 13.4758H12.7472V0.668945H17.0327Z" fill="#263238"></path> <path d="M27.4705 21.3309C25.8995 21.3309 24.5472 21.0127 23.4137 20.3763C22.2868 19.7333 21.4184 18.8252 20.8086 17.6519C20.1987 16.472 19.8938 15.0766 19.8938 13.4658C19.8938 11.8948 20.1987 10.516 20.8086 9.32946C21.4184 8.1429 22.2769 7.21819 23.3839 6.55531C24.4975 5.89243 25.8034 5.56099 27.3015 5.56099C28.3091 5.56099 29.247 5.7234 30.1154 6.04821C30.9904 6.36639 31.7527 6.84698 32.4023 7.48997C33.0586 8.13296 33.569 8.94167 33.9336 9.9161C34.2982 10.8839 34.4805 12.0174 34.4805 13.3167V14.48H21.5842V11.855H30.4933C30.4933 11.2452 30.3607 10.7049 30.0955 10.2343C29.8304 9.76364 29.4625 9.39574 28.9918 9.13059C28.5278 8.85881 27.9876 8.72292 27.3711 8.72292C26.7281 8.72292 26.158 8.87207 25.6609 9.17037C25.1703 9.46203 24.7859 9.85645 24.5075 10.3536C24.229 10.8441 24.0865 11.391 24.0799 11.9942V14.49C24.0799 15.2457 24.2191 15.8986 24.4975 16.4488C24.7826 16.999 25.1836 17.4232 25.7006 17.7215C26.2177 18.0198 26.8308 18.1689 27.5401 18.1689C28.0108 18.1689 28.4416 18.1027 28.8327 17.9701C29.2238 17.8375 29.5586 17.6386 29.837 17.3735C30.1154 17.1083 30.3275 16.7835 30.4734 16.3991L34.391 16.6576C34.1921 17.5989 33.7844 18.4208 33.168 19.1235C32.5581 19.8195 31.7693 20.3631 30.8015 20.7542C29.8403 21.1386 28.73 21.3309 27.4705 21.3309Z" fill="#263238"></path> <path d="M40.511 5.75985L43.315 11.0993L46.1886 5.75985H50.5337L46.109 13.3962L50.6531 21.0326H46.3278L43.315 15.7528L40.3519 21.0326H35.9769L40.511 13.3962L36.136 5.75985H40.511Z" fill="#263238"></path> <path d="M59.4031 21.3309C57.8387 21.3309 56.493 20.9994 55.3661 20.3366C54.2459 19.6671 53.3841 18.739 52.7809 17.5525C52.1843 16.3659 51.886 15.0004 51.886 13.4559C51.886 11.8915 52.1876 10.5193 52.7908 9.3394C53.4007 8.15285 54.2657 7.22813 55.386 6.56525C56.5063 5.89574 57.8387 5.56099 59.3832 5.56099C60.7156 5.56099 61.8822 5.80294 62.8832 6.28684C63.8841 6.77074 64.6762 7.4502 65.2596 8.3252C65.8429 9.2002 66.1644 10.2277 66.2241 11.4076H62.2269C62.1142 10.6453 61.8159 10.0321 61.332 9.56809C60.8548 9.09745 60.2283 8.86213 59.4528 8.86213C58.7965 8.86213 58.2231 9.0411 57.7326 9.39906C57.2487 9.75038 56.8709 10.2641 56.5991 10.9403C56.3273 11.6164 56.1914 12.435 56.1914 13.3962C56.1914 14.3707 56.324 15.1992 56.5891 15.882C56.8609 16.5648 57.2421 17.0851 57.7326 17.4431C58.2231 17.801 58.7965 17.98 59.4528 17.98C59.9367 17.98 60.3709 17.8806 60.7553 17.6817C61.1464 17.4829 61.4679 17.1945 61.7198 16.8167C61.9783 16.4322 62.1474 15.9715 62.2269 15.4346H66.2241C66.1578 16.6012 65.8396 17.6287 65.2695 18.517C64.7061 19.3986 63.9272 20.088 62.9329 20.5851C61.9386 21.0823 60.762 21.3309 59.4031 21.3309Z" fill="#263238"></path> <path d="M75.8963 21.3309C74.3253 21.3309 72.973 21.0127 71.8395 20.3763C70.7126 19.7333 69.8442 18.8252 69.2344 17.6519C68.6245 16.472 68.3196 15.0766 68.3196 13.4658C68.3196 11.8948 68.6245 10.516 69.2344 9.32946C69.8442 8.1429 70.7026 7.21819 71.8097 6.55531C72.9233 5.89243 74.2292 5.56099 75.7273 5.56099C76.7348 5.56099 77.6728 5.7234 78.5412 6.04821C79.4162 6.36639 80.1785 6.84698 80.8281 7.48997C81.4844 8.13296 81.9948 8.94167 82.3594 9.9161C82.724 10.8839 82.9062 12.0174 82.9062 13.3167V14.48H70.0099V11.855H78.919C78.919 11.2452 78.7865 10.7049 78.5213 10.2343C78.2561 9.76364 77.8883 9.39574 77.4176 9.13059C76.9536 8.85881 76.4134 8.72292 75.7969 8.72292C75.1539 8.72292 74.5838 8.87207 74.0866 9.17037C73.5961 9.46203 73.2116 9.85645 72.9332 10.3536C72.6548 10.8441 72.5123 11.391 72.5057 11.9942V14.49C72.5057 15.2457 72.6449 15.8986 72.9233 16.4488C73.2083 16.999 73.6094 17.4232 74.1264 17.7215C74.6435 18.0198 75.2566 18.1689 75.9659 18.1689C76.4365 18.1689 76.8674 18.1027 77.2585 17.9701C77.6496 17.8375 77.9844 17.6386 78.2628 17.3735C78.5412 17.1083 78.7533 16.7835 78.8991 16.3991L82.8168 16.6576C82.6179 17.5989 82.2102 18.4208 81.5938 19.1235C80.9839 19.8195 80.1951 20.3631 79.2273 20.7542C78.2661 21.1386 77.1558 21.3309 75.8963 21.3309Z" fill="#263238"></path> <path d="M89.9062 12.203V21.0326H85.6704V5.75985H89.7074V8.45446H89.8864C90.2244 7.5662 90.7912 6.86355 91.5866 6.3465C92.3821 5.82283 93.3466 5.56099 94.4801 5.56099C95.5407 5.56099 96.4654 5.793 97.2543 6.25701C98.0431 6.72103 98.6562 7.38391 99.0938 8.24565C99.5312 9.10076 99.75 10.1216 99.75 11.3082V21.0326H95.5142V12.0638C95.5208 11.1292 95.2822 10.4 94.7983 9.87633C94.3144 9.34603 93.6482 9.08088 92.7997 9.08088C92.2296 9.08088 91.7258 9.20351 91.2883 9.44878C90.8575 9.69404 90.5194 10.052 90.2741 10.5226C90.0355 10.9867 89.9129 11.5468 89.9062 12.203Z" fill="#263238"></path> <path d="M111.212 5.75985V8.94167H102.015V5.75985H111.212ZM104.103 2.10076H108.338V16.3394C108.338 16.7305 108.398 17.0354 108.517 17.2542C108.637 17.4663 108.802 17.6154 109.015 17.7016C109.233 17.7878 109.485 17.8309 109.77 17.8309C109.969 17.8309 110.168 17.8143 110.367 17.7812C110.566 17.7414 110.718 17.7116 110.824 17.6917L111.49 20.8437C111.278 20.91 110.98 20.9862 110.596 21.0724C110.211 21.1652 109.744 21.2215 109.194 21.2414C108.173 21.2812 107.278 21.1453 106.509 20.8337C105.747 20.5222 105.153 20.0383 104.729 19.382C104.305 18.7258 104.096 17.8972 104.103 16.8962V2.10076Z" fill="#263238"></path> </svg>',
            }}
          />
        </LogoWrapper>
        <NavLinksWrapper>
          <NavLinks>
            {NAV_LINKS.map((link) => (
              <NavLink key={link.id}>
                <Link
                  href={link.href}
                  variant="dark"
                  onClick={() => handleNavigation(link)}
                >
                  {link.label}
                </Link>
              </NavLink>
            ))}
          </NavLinks>
        </NavLinksWrapper>
        <NavActions>
          <Button onClick={handleLogin} type="tertiary" size="medium">
            Login
          </Button>
          <Button onClick={handleSignup} type="primary" size="medium">
            Sign up
          </Button>
        </NavActions>
        <Hamburger onClick={handleHamburgerClick}>☰</Hamburger>
      </Nav>
      <MobileMenu open={mobileOpen}>
        <CloseButton onClick={handleCloseMenu} aria-label="Close menu">
          ×
        </CloseButton>
        <MobileNavLinks>
          {NAV_LINKS.map((link) => (
            <MobileNavLink key={link.id}>
              <Link
                href={link.href}
                variant="dark"
                onClick={() => handleNavigation(link)}
              >
                {link.label}
              </Link>
            </MobileNavLink>
          ))}
        </MobileNavLinks>
        <MobileNavActions>
          <Button onClick={handleLogin} type="tertiary" size="medium">
            Login
          </Button>
          <Button onClick={handleSignup} type="primary" size="medium">
            Sign up
          </Button>
        </MobileNavActions>
      </MobileMenu>
    </>
  );
}
