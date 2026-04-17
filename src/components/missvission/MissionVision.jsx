  import React, { useState } from "react";
  import "./MissVission.css";

  const missionVisionData = [
    {
      id: 1,
      number: "01",
      icon: "🎯",
      title: "Our Mission",
      desc: "Make every Indian Financially Literate. Through education, advisory, and accessible guidance — we democratise the wealth creation knowledge once reserved for a privileged few.",
    },
    {
      id: 2,
      number: "02",
      icon: "💡",
      title: "Our Vision",
      desc: "To lead the Wealth Management Industry through our customer-centric approach — building an institution that puts client outcomes above all else, for this generation and the next.",
    },
  ];

  const MissionVision = () => {
    const [activeCard, setActiveCard] = useState(null);

    const handleFlip = (id) => {
      setActiveCard((prev) => (prev === id ? null : id));
    };

    return (
      <section className="mv-section">
        <div className="mv-bg-lines"></div>
        <div className="mv-glow mv-glow-one"></div>
        <div className="mv-glow mv-glow-two"></div>

        <div className="mv-container">
          <div className="mv-head">
            <p className="mv-label">Guided by purpose</p>
            <h2 className="mv-title">Guided by a clear mission &amp; vision</h2>
          </div>

          <div className="mv-grid">
            {missionVisionData.map((item) => (
              <div
                key={item.id}
                className={`mv-card ${activeCard === item.id ? "is-flipped" : ""}`}
                onClick={() => handleFlip(item.id)}
              >
                <div className="mv-card-float">
                  <div className="mv-card-inner">
                    {/* Front */}
                    <article className="mv-card-face mv-card-front">
                      <span className="mv-corner mv-corner-tl"></span>
                      <span className="mv-corner mv-corner-br"></span>
                      {/* <span className="mv-card-number">{item.number}</span> */}
                      <div className="mv-card-shine"></div>

                      <div className="mv-icon-wrap">
                        <span className="mv-icon">{item.icon}</span>
                      </div>

                      <h3>{item.title}</h3>
                    </article>

                    {/* Back */}
                    <article className="mv-card-face mv-card-back">
                      <span className="mv-corner mv-corner-tl"></span>
                      <span className="mv-corner mv-corner-br"></span>
                      <div className="mv-card-shine"></div>

                      <p className="mv-back-mini">Description</p>
                      <h3>{item.title}</h3>
                      <p>{item.desc}</p>
                    </article>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };

  export default MissionVision;