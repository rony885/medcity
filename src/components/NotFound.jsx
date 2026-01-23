import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NotFound = () => {
  return (
    <Wrapper>
      <section className="error-page">
        <div className="container">
          <div className="error-content text-center">
            <h1 className="error-code">404</h1>
            <h2 className="error-title">Page Not Found</h2>
            <p className="error-desc">
              Oops! The page you’re looking for doesn’t exist or has been moved.
            </p>

            <div className="error-actions">
              <Link to="/" className="btn btn__primary btn__rounded">
                Go to Home
              </Link>
              <Link to="/contact" className="btn btn__secondary btn__rounded">
                Contact Support
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .error-page {
    min-height: 100vh;
    display: flex;
    align-items: center;
    background: linear-gradient(135deg, #21cdc0, #1baaa0);
    color: #fff;
  }

  .error-content {
    max-width: 600px;
    margin: auto;
  }

  .error-code {
    font-size: 120px;
    font-weight: 800;
    line-height: 1;
    margin-bottom: 10px;
  }

  .error-title {
    font-size: 32px;
    margin-bottom: 15px;
  }

  .error-desc {
    font-size: 16px;
    opacity: 0.9;
    margin-bottom: 30px;
  }

  .error-actions {
    display: flex;
    gap: 15px;
    justify-content: center;
    flex-wrap: wrap;
  }

  .error-actions .btn {
    padding: 12px 28px;
  }
`;

export default NotFound;
