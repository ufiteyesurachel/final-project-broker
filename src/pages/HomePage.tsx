import React, { useState } from 'react';
import '../styles/home-page.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faChartLine, 
  faGlobe 
} from '@fortawesome/free-solid-svg-icons';

const HomePage: React.FC = () => {
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);

  return (
    <div className="brokersync-homepage">
      <nav className="navbar">
        <a href="#" className="logo">
          <FontAwesomeIcon icon={faChartLine} />
          BrokerSync Elite
        </a>
        <div className="nav-links">
          <a href="#features">Features</a>
          <a href="#pricing">Pricing</a>
          <a href="#about">About</a>
          <div 
            className="language-switcher"
            onMouseEnter={() => setIsLanguageDropdownOpen(true)}
            onMouseLeave={() => setIsLanguageDropdownOpen(false)}
          >
            <button className="language-btn">
              <FontAwesomeIcon icon={faGlobe} />
              English
            </button>
            {isLanguageDropdownOpen && (
              <div className="language-dropdown">
                <a href="?lang=en">English</a>
                <a href="?lang=fr">Français</a>
                <a href="?lang=es">Español</a>
                <a href="?lang=rw">Kinyarwanda</a>
                <a href="?lang=sw">Kiswahili</a>
              </div>
            )}
          </div>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-content">
          <h1>Transform Your Brokerage Operations</h1>
          <p>Experience the next generation of brokerage management with intelligent solutions designed for modern businesses.</p>
          <div className="cta-buttons">
            <a href="/register" className="btn btn-primary">Get Started</a>
            <a href="/login" className="btn btn-secondary">Sign In</a>
          </div>
        </div>
      </section>

      <section id="pricing" className="pricing">
        <div className="section-header">
          <h2>Simple, Transparent Pricing</h2>
          <p>Choose the perfect plan for your brokerage needs. All plans include our core features with no hidden fees.</p>
        </div>
        <div className="pricing-cards">
          <div className="pricing-card">
            <h3>Starter</h3>
            <div className="price">$49<span>/month</span></div>
            <ul className="features-list">
              <li>Up to 50 listings</li>
              <li>Basic analytics</li>
              <li>Email support</li>
              <li>Mobile app access</li>
            </ul>
            <a href="/register" className="btn btn-primary">Get Started</a>
          </div>
          <div className="pricing-card">
            <h3>Professional</h3>
            <div className="price">$99<span>/month</span></div>
            <ul className="features-list">
              <li>Unlimited listings</li>
              <li>Advanced analytics</li>
              <li>Priority support</li>
              <li>API access</li>
            </ul>
            <a href="/register" className="btn btn-primary">Get Started</a>
          </div>
          <div className="pricing-card">
            <h3>Enterprise</h3>
            <div className="price">Custom</div>
            <ul className="features-list">
              <li>Custom solutions</li>
              <li>Dedicated support</li>
              <li>Custom integrations</li>
              <li>Training & onboarding</li>
            </ul>
            <a href="/contact" className="btn btn-primary">Contact Sales</a>
          </div>
        </div>
      </section>

      <section id="about" className="about">
        <div className="about-content">
          <div className="about-text">
            <h2>Transforming Brokerage Management Since 2015</h2>
            <p>BrokerSync Elite was founded with a simple mission: to modernize brokerage operations and empower brokers with cutting-edge technology. Our platform combines years of industry expertise with innovative solutions.</p>
            <p>Today, we serve thousands of brokers worldwide, helping them streamline their operations, increase efficiency, and grow their business with confidence.</p>
            <div className="stats-grid">
              <div className="stat-item">
                <div className="stat-number">10K+</div>
                <div className="stat-label">Active Users</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">50M+</div>
                <div className="stat-label">Transactions Processed</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">99.9%</div>
                <div className="stat-label">Uptime</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">24/7</div>
                <div className="stat-label">Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;