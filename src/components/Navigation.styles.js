import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  width: 100%;
  padding: 22px 105px;
  align-items: center;
  justify-content: space-between;
  height: 84px;
  box-sizing: border-box;
  background-color: #f5f7fa;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 100;
  transition:
    box-shadow 0.25s cubic-bezier(0.4, 0, 0.2, 1),
    background 0.25s cubic-bezier(0.4, 0, 0.2, 1),
    transform 0.3s cubic-bezier(0.4, 0, 0.2, 1),
    opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  &.nav-hidden {
    opacity: 0;
    pointer-events: none;
    transform: translateY(-100%);
    transition:
      opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1),
      transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  &.nav-visible {
    opacity: 1;
    pointer-events: auto;
    transform: translateY(0);
    transition:
      opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1),
      transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  &.scrolled {
    box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.06);
    background: #fff;
  }

  @keyframes navSlideDown {
    from {
      transform: translateY(-16px);
      opacity: 0.7;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @media (max-width: 991px) {
    padding: 22px 40px;
    gap: 20px;
  }
  @media (max-width: 640px) {
    padding: 16px 20px;
    gap: 16px;
  }
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const LogoIconGroup = styled.div`
  width: 35px;
  height: 24px;
  position: relative;
`;

export const NavLinksWrapper = styled.div`
  width: 588px;
  height: 24px;
  flex-shrink: 0;

  @media (max-width: 1200px) {
    display: none;
  }
`;

export const NavLinks = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
  width: 588px;
  height: 24px;

  @media (max-width: 991px) {
    gap: 30px;
    justify-content: flex-start;
  }
`;

export const NavLink = styled.div`
  font-weight: 400;
  color: #18191f;
  font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif;
  font-size: 16px;
  line-height: 24px;
  gap: 10px;
  cursor: pointer;
`;

export const Hamburger = styled.div`
  display: none;
  color: #18191f;
  font-size: 28px;
  cursor: pointer;
  user-select: none;

  @media (max-width: 1200px) {
    display: block;
  }
`;

export const NavActions = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 14px;

  @media (max-width: 1200px) {
    display: none;
  }
`;

export const LoginButton = styled.button`
  color: #4caf4f;
  text-align: center;
  font-feature-settings: "salt" on, "liga" off, "clig" off;
  font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  padding: 10px 20px;
  gap: 10px;
  border-radius: 6px;
  cursor: pointer;
  background-color: #f5f7fa;
  border: none;

  @media (max-width: 640px) {
    font-size: 12px;
    padding: 8px 16px;
  }
`;

export const SignupButton = styled.button`
  color: #fff;
  text-align: center;
  font-feature-settings: "salt" on, "liga" off, "clig" off;
  font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  padding: 10px 20px;
  gap: 10px;
  border-radius: 6px;
  cursor: pointer;
  background-color: #4caf4f;
  border: none;

  @media (max-width: 640px) {
    font-size: 12px;
    padding: 8px 16px;
  }
`;

export const MobileMenu = styled.div`
  display: none;
  @media (max-width: 1200px) {
    display: ${({ open }) => (open ? "flex" : "none")};
    flex-direction: column;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: #fff;
    z-index: 1000;
    padding: 80px 24px 24px 24px;
    box-sizing: border-box;
    animation: fadeIn 0.2s;
  }
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 22px;
  right: 105px;
  background: none;
  border: none;
  font-size: 36px;
  color: #18191f;
  cursor: pointer;
  z-index: 1100;
  line-height: 1;

  @media (max-width: 991px) {
    top: 28px;
    right: 40px;
  }
  @media (max-width: 640px) {
    top: 28px;
    right: 20px;
  }
`;

export const MobileNavLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  align-items: center;
`;

export const MobileNavLink = styled.div`
  font-size: 20px;
  color: #18191f;
  font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif;
  font-weight: 500;
  cursor: pointer;
`;

export const MobileNavActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 32px;
  align-items: center;
`;