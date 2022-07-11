import { useColorMode } from "@docusaurus/theme-common";
import React from "react";
import { BlueButton } from "./Button";
import { Spacer } from "./Spacer";
import videoapps from "./videoapps.module.css";
import { YouAreHere } from "./YouAreHere";
import Jonny from "./Jonny Burger.png";
import Mehmet from "./Mehmet Ademi.png";
import Patric from "./Patric Salvisberg.png";

const panel: React.CSSProperties = {
  backgroundColor: "var(--ifm-background-color)",
  boxShadow: "var(--box-shadow)",
  padding: 10,
  borderRadius: 15,
  flex: 1,
  paddingTop: 30,
  paddingBottom: 10,
  minHeight: 550,
  display: "flex",
  flexDirection: "column",
};

const center: React.CSSProperties = {
  textAlign: "center",
};

const row: React.CSSProperties = {
  display: "flex",
  flexDirection: "row",
};

const flex: React.CSSProperties = {
  flex: 1,
};

const step: React.CSSProperties = {
  flex: 1,
  ...panel,
};

const list: React.CSSProperties = {
  listStyleType: "none",
  textAlign: "center",
  paddingLeft: 0,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  fontWeight: 500,
};

const hr: React.CSSProperties = {
  width: 20,
  textAlign: "center",
  borderTop: 0,
  marginTop: 10,
  marginBottom: 10,
};

const stepTitle: React.CSSProperties = {
  textAlign: "center",
  fontSize: "1.6em",
  marginBottom: 0,
  color: "var(--ifm-color-primary)",
};

const docsButton: React.CSSProperties = {
  textDecoration: "none",
};

const TwitterLogo: React.FC = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1059 1059"
      style={{
        width: 30,
        marginRight: 10,
      }}
    >
      <path
        fill="var(--blue-button-color"
        d="M529.5 0.5625C237.404 0.5625 0.5625 237.404 0.5625 529.5C0.5625 821.596 237.404 1058.44 529.5 1058.44C821.596 1058.44 1058.44 821.596 1058.44 529.5C1058.44 237.404 821.596 0.5625 529.5 0.5625ZM783.697 399.273C784.051 404.822 784.051 410.607 784.051 416.274C784.051 589.596 652.053 789.246 410.843 789.246C336.461 789.246 267.511 767.64 209.422 730.449C220.048 731.63 230.202 732.102 241.064 732.102C302.458 732.102 358.894 711.322 403.877 676.138C346.261 674.958 297.854 637.177 281.324 585.227C301.514 588.179 319.696 588.179 340.476 582.866C310.809 576.839 284.143 560.727 265.01 537.267C245.876 513.807 235.454 484.447 235.515 454.174V452.521C252.87 462.32 273.296 468.342 294.666 469.168C276.701 457.195 261.968 440.975 251.774 421.945C241.579 402.915 236.238 381.663 236.223 360.075C236.223 335.635 242.599 313.32 254.051 293.958C286.98 334.494 328.071 367.648 374.652 391.264C421.233 414.88 472.262 428.43 524.423 431.033C505.887 341.892 572.476 269.754 652.525 269.754C690.306 269.754 724.31 285.575 748.277 311.077C777.912 305.528 806.248 294.43 831.514 279.553C821.714 309.896 801.171 335.517 773.897 351.692C800.344 348.858 825.847 341.538 849.46 331.267C831.632 357.477 809.317 380.736 783.697 399.273V399.273Z"
      />
    </svg>
  );
};

const LinkedInLogo: React.FC = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1000 1000"
      style={{
        width: 30,
        marginRight: 10,
      }}
    >
      <path
        fill="var(--blue-button-color"
        d="M195.877 0C88.16 0 0 88.158 0 195.877V803.718C0 911.435 88.158 999.563 195.877 999.563H803.718C911.436 999.563 999.563 911.436 999.563 803.718V195.877C999.563 88.16 911.436 0 803.718 0H195.877ZM245.143 164.948C296.791 164.948 328.604 198.854 329.586 243.423C329.586 287.008 296.789 321.867 244.144 321.867H243.175C192.51 321.867 159.763 287.01 159.763 243.423C159.763 198.855 193.501 164.948 245.142 164.948H245.143ZM690.223 373.258C789.552 373.258 864.013 438.18 864.013 577.694V838.143H713.06V595.156C713.06 534.096 691.213 492.438 636.584 492.438C594.88 492.438 570.022 520.516 559.108 547.64C555.121 557.344 554.141 570.897 554.141 584.472V838.143H403.188C403.188 838.143 405.169 426.53 403.188 383.91H554.172V448.234C574.232 417.284 610.114 373.257 690.223 373.257V373.258ZM168.667 383.943H319.62V838.145H168.667V383.943V383.943Z"
      />
    </svg>
  );
};

const GitHubLogo: React.FC = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1084 1084"
      style={{
        width: 30,
        marginRight: 10,
      }}
    >
      <path
        fill="var(--blue-button-color"
        d="M542 0C242.545 0 0 242.545 0 542C0 781.835 155.147 984.408 370.592 1056.22C397.692 1060.97 407.855 1044.71 407.855 1030.48C407.855 1017.61 407.178 974.923 407.178 929.53C271 954.598 235.77 896.332 224.93 865.845C218.832 850.262 192.41 802.16 169.375 789.287C150.405 779.125 123.305 754.057 168.698 753.38C211.38 752.702 241.868 792.675 252.03 808.935C300.81 890.912 378.723 867.878 409.888 853.65C414.63 818.42 428.857 794.707 444.44 781.157C323.845 767.607 197.83 720.86 197.83 513.545C197.83 454.602 218.833 405.822 253.385 367.882C247.965 354.332 228.995 298.777 258.805 224.252C258.805 224.252 304.198 210.025 407.855 279.808C451.215 267.613 497.285 261.515 543.355 261.515C589.425 261.515 635.495 267.613 678.855 279.808C782.513 209.348 827.905 224.252 827.905 224.252C857.715 298.777 838.745 354.332 833.325 367.882C867.878 405.822 888.88 453.925 888.88 513.545C888.88 721.537 762.188 767.607 641.593 781.157C661.24 798.095 678.178 830.615 678.178 881.428C678.178 953.92 677.5 1012.19 677.5 1030.48C677.5 1044.71 687.663 1061.64 714.763 1056.22C822.365 1019.91 915.868 950.759 982.106 858.512C1048.34 766.264 1083.98 655.565 1084 542C1084 242.545 841.455 0 542 0Z"
      />
    </svg>
  );
};

export const VideoApps: React.FC<{
  active: "remotion" | "player" | "lambda";
}> = ({ active }) => {
  const { colorMode } = useColorMode();
  return (
    <div className={videoapps.row}>
      <div style={step}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flex: 1,
          }}
        >
          <img
            src={Jonny}
            style={{
              width: 250,
              height: 250,
              boxShadow: "var(--box-shadow)",
              borderRadius: 1500,
            }}
          />
        </div>
        <h2 style={stepTitle}>Jonny</h2>
        <strong style={center}>Chief Hacker</strong>

        <ul style={list}>
          <li>
            As a former indie hacker I loved working on projects that combine
            engineering, art and business. At Remotion I bascially do the same
            just together with an amazing community and team.
          </li>
        </ul>

        <div style={row}>
          {active === "remotion" ? null : (
            <>
              <div style={flex}>
                <a style={docsButton} href="https://twitter.com/JNYBGR">
                  <BlueButton loading={false} fullWidth size="sm">
                    <TwitterLogo /> Twitter
                  </BlueButton>
                </a>
              </div>
              <Spacer />
              <Spacer />
            </>
          )}
          <div style={flex}>
            <a
              style={docsButton}
              href="https://ch.linkedin.com/in/jonny-burger-4115109b"
            >
              <BlueButton loading={false} fullWidth size="sm">
                <LinkedInLogo /> LinkedIn
              </BlueButton>
            </a>
          </div>
        </div>
        <div style={{ height: 10 }} />
        <div style={row}>
          {active === "remotion" ? null : (
            <>
              <div style={flex}>
                <a style={docsButton} href="https://github.com/JonnyBurger">
                  <BlueButton loading={false} fullWidth size="sm">
                    <GitHubLogo /> GitHub
                  </BlueButton>
                </a>
              </div>
            </>
          )}
        </div>
      </div>
      <Spacer />
      <Spacer />
      <Spacer />
      <div style={step}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flex: 1,
          }}
        >
          <img
            src={Mehmet}
            style={{
              width: 250,
              height: 250,
              boxShadow: "var(--box-shadow)",
              borderRadius: 1500,
            }}
          />
        </div>
        <h2 style={stepTitle}>Mehmet</h2>
        <strong style={center}>Business Manager</strong>

        <ul style={list}>
          <li>Preview videos in the browser</li>
        </ul>
        <div style={row}>
          {active === "remotion" ? null : (
            <>
              <div style={flex}>
                <a style={docsButton} href="https://twitter.com/MehmetAdemi">
                  <BlueButton loading={false} fullWidth size="sm">
                    <TwitterLogo /> Twitter
                  </BlueButton>
                </a>
              </div>
              <Spacer />
              <Spacer />
            </>
          )}
          <div style={flex}>
            <a
              style={docsButton}
              href="https://www.linkedin.com/in/mehmet-ademi/?locale=en_US"
            >
              <BlueButton loading={false} fullWidth size="sm">
                <LinkedInLogo /> LinkedIn
              </BlueButton>
            </a>
          </div>
        </div>
        <div style={{ height: 10 }} />
        <div style={row}>
          {active === "remotion" ? null : (
            <>
              <div style={flex}>
                <a style={docsButton} href="https://github.com/MehmetAdemi">
                  <BlueButton loading={false} fullWidth size="sm">
                    <GitHubLogo /> GitHub
                  </BlueButton>
                </a>
              </div>
            </>
          )}
        </div>
      </div>
      <Spacer />
      <Spacer />
      <Spacer />
      <div style={step}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flex: 1,
          }}
        >
          <img
            src={Patric}
            style={{
              width: 250,
              height: 250,
              boxShadow: "var(--box-shadow)",
              borderRadius: 1500,
            }}
          />
        </div>
        <h2 style={stepTitle}>Patric</h2>
        <strong style={center}>Intern</strong>

        <ul style={list}>
          <li>Render videos in the cloud</li>
        </ul>
        <div style={row}>
          {active === "remotion" ? null : (
            <>
              <div style={flex}>
                <a style={docsButton} href="https://twitter.com/Salvispat">
                  <BlueButton loading={false} fullWidth size="sm">
                    <TwitterLogo /> Twitter
                  </BlueButton>
                </a>
              </div>
              <Spacer />
              <Spacer />
            </>
          )}
          <div style={flex}>
            <a
              style={docsButton}
              href="https://www.linkedin.com/in/patric-salvisberg-b73b51234/"
            >
              <BlueButton loading={false} fullWidth size="sm">
                <LinkedInLogo /> LinkedIn
              </BlueButton>
            </a>
          </div>
        </div>
        <div style={{ height: 10 }} />
        <div style={row}>
          {active === "remotion" ? null : (
            <>
              <div style={flex}>
                <a style={docsButton} href="https://github.com/JonnyBurger">
                  <BlueButton loading={false} fullWidth size="sm">
                    <GitHubLogo /> GitHub
                  </BlueButton>
                </a>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
